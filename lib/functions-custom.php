<?php

// Custom functions (like special queries, etc)

// add global keys
function igv_set_global_keys(&$array) {
  foreach ($array as $k => $v) {
    $array[$k] = array(
      'id' => $v[0],
      'es' => $v[1],
      'en' => $v[2]
    );
  }
}

// set globals
function igv_theme_globals() {
  global $about_mission_sections;
  global $about_program_sections;

  $about_mission_sections = [
    ['mission','Misión','Mission'],
    ['vision','Visión','Vision'],
    ['vocation','Vocación','Vocation']
  ];

  $about_program_sections = [
    ['exhibition','Proyectos de exposición','Exhibition Projects'],
    ['public','Programa público','Public Program'],
    ['bar','Barra Eco','Eco Bar'],
    ['pavilion','Pabellón Eco','Eco Pavilion'],
    ['residencies','Estancias de Trabajo','Work Residencies'],
    ['goeritz','Cátedra Goeritz','Goeritz Cathedral'],
  ];

  igv_set_global_keys($about_mission_sections);
  igv_set_global_keys($about_program_sections);
}
add_action( 'init', 'igv_theme_globals' );

// shortcode
function eleco_shortcode( $atts, $content = null ) {
  $a = shortcode_atts( array(
    'tag' => 'tag',
  ), $atts );
	return '<span class="inline-tag" data-tag="' . esc_attr($a['tag']) . '">' . $content . '</span>';
}
add_shortcode( 'eco', 'eleco_shortcode' );

function footnote_shortcode( $atts ) {
  $a = shortcode_atts( array(
    'num' => false,
  ), $atts );
  if ($a['num']) {
  	return '<a id="article-ref-' . $a['num'] . '" href="#footnote-ref-' . $a['num'] . '">[' . $a['num'] . ']</a>';
  }
  return;
}
add_shortcode( 'footnote', 'footnote_shortcode' );

// echo string for current language
function igv_pll_str($es_str, $en_str = false) {
  $lang = get_locale();
  return $lang === 'en_US' && $en_str !== false ? $en_str : $es_str;
}

function igv_pll_cat($id) {
  $cats = get_the_category($id);

  $the_cat = igv_pll_str('Entrada','Post');

  $type = get_post_type($id);

  if ($type === 'expo') {
    $the_cat = igv_pll_str('Exposición','Exhibition');
  } else if ($type === 'evento') {
    $cats = get_the_terms($id, 'evento_type');
    $the_cat = igv_pll_str('Evento','Event');
  }

  if (!empty($cats)) {
    if ( $cats[0]->slug !== 'uncategorized'
      && $cats[0]->slug !== 'uncategorized-es'
      && $cats[0]->slug !== 'uncategorized-en'
      && $cats[0]->slug !== 'sin-categoria'
      && $cats[0]->slug !== 'sin-categoria-es'
      && $cats[0]->slug !== 'sin-categoria-en'
    ) {
      $the_cat = $cats[0]->name;
    }
  }
  return $the_cat;
}

function igv_evento_datetime($id) {
  $date_format = 'D j M Y H:i';
  $timestamp = get_post_meta($id, '_igv_evento_datetime', true);
  $datetime = date_i18n('D j M Y H:i', $timestamp);
  return $datetime;
}

function igv_expo_dates($id) {
  $date_format = 'D j M Y';
  $timestamp_start = get_post_meta($id, '_igv_expo_date_start', true);
  $timestamp_end = get_post_meta($id, '_igv_expo_date_end', true);
  $dates = '';
  if (!empty($timestamp_start)) {
    $dates = date_i18n($date_format, $timestamp_start);
    if (!empty($timestamp_end)) {
      $dates .= ' — ' . date_i18n($date_format, $timestamp_end);
    }
  }
  return $dates;
}

function igv_post_author($id, $link = false) {
  $post = get_post( $id );
  $authors = $post->post_type === 'post' ? get_the_terms($id, 'contributor') : get_the_terms($id, 'artist');
  $default_author = 'El Eco';
  if (!empty($authors)) {
    $author_count = count($authors);
    if ($author_count > 0) {
      $author_list = '';
      foreach($authors as $k => $v) {
        $author_list .= '<span class="u-inline-block">';
        if ($link) {
          $author_list .= '<a class="hover-underline" href="' . get_term_link($authors[$k]) . '">' . $authors[$k]->name . '</a>';
        } else {
          $author_list .= $authors[$k]->name;
        }
        if ($k < ($author_count - 1)) {
          $author_list .= ',&nbsp;';
        }
        $author_list .= '</span>';
      }
      return $author_list;
    }
  }
  return $default_author;
}

// Include in REST result
add_action('rest_api_init', 'igv_register_rest_fields' );
function igv_register_rest_fields(){
  register_rest_field( array('post','expo','evento'),
    'fimg_url',
    array(
      'get_callback'    => 'get_rest_featured_image',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('post','expo','evento'),
    'cat_name',
    array(
      'get_callback'    => 'get_rest_cat_name',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('post'),
    'post_author',
    array(
      'get_callback'    => 'get_rest_author',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('post','expo','evento'),
    'post_thumb',
    array(
      'get_callback'    => 'get_rest_post_thumb',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('post','expo','evento'),
    'post_thumb_url',
    array(
      'get_callback'    => 'get_rest_post_thumb_url',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('evento'),
    'evento_thumb',
    array(
      'get_callback'    => 'get_rest_evento_thumb',
      'update_callback' => null,
      'schema'          => null,
    )
  );
  register_rest_field( array('evento'),
    'evento_datetime',
    array(
      'get_callback'    => 'get_rest_evento_datetime',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}
function get_rest_featured_image( $object, $field_name, $request ) {
  if( $object['featured_media'] ){
    $img = wp_get_attachment_image_src( $object['featured_media'], 'archive-thumb' );
    return $img[0];
  }
  return false;
}
function get_rest_cat_name( $object, $field_name, $request ) {
  return igv_pll_cat($object['id']);
}
function get_rest_author( $object, $field_name, $request ) {
  return igv_post_author($object['id']);
}
function get_rest_post_thumb( $object, $field_name, $request ) {
  return get_the_post_thumbnail($object['id'], 'archive-thumb');
}
function get_rest_post_thumb_url( $object, $field_name, $request ) {
  return get_the_post_thumbnail_url($object['id'], 'archive-thumb');
}
function get_rest_evento_thumb( $object, $field_name, $request ) {
  return get_the_post_thumbnail($object['id'], 'archive-event');
}
function get_rest_evento_datetime( $object, $field_name, $request ) {
  return igv_evento_datetime($object['id']);
}
function filter_rest_evento_query($query_vars, $request) {
  $now = time();
  $query_vars['orderby'] = 'meta_value_num';
  $query_vars['order'] = 'DESC';
  $query_vars['meta_key'] = '_igv_evento_datetime';
  $query_vars['meta_query'] = array(
    array(
      'key' => '_igv_evento_datetime',
      'value' => $now,
      'compare' => '<=',
    ),
  );
  return $query_vars;
}
// The filter is named rest_{post_type}_query. So you need to hook a new filter for each
// of the custom post types you need to sort.
add_filter( 'rest_evento_query', 'filter_rest_evento_query', 10, 2);
?>
