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
    ['exhibition','Proyectos de Exposición','Exhibition Projects'],
    ['public','Programa Publico','Public Program'],
    ['bar','Barra Eco','Eco Bar'],
    ['pavilion','Pabellón Eco','Eco Pavilion'],
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

// echo string for current language
function igv_pll_str($es_str, $en_str = false) {
  $lang = get_locale();
  return $lang === 'en_US' && $en_str !== false ? $en_str : $es_str;
}

function igv_pll_cat($es_str, $en_str = false, $id) {
  $cats = get_the_category($id);
  $the_cat = igv_pll_str($es_str,$en_str);
  if (!empty($cats)) {
    if ($cats[0]->slug !== 'uncategorized') {
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
      $dates .= '— ' . date_i18n($date_format, $timestamp_end);
    }
  }
  return $dates;
}

function igv_post_author($id) {
  $authors = get_the_terms($id, 'author');
  $default_author = 'El Eco';
  if (!empty($authors)) {
    $author_count = count($authors);
    if ($author_count > 1) {
      $author_list = '';
      foreach($authors as $k => $v) {
        $author_list .= '<span class="u-inline-block">' . $authors[$k]->name;
        if ($k < ($author_count - 1)) {
          $author_list .= ',&nbsp;';
        }
        $author_list .= '</span>';
      }
      return $author_list;
    } else {
      return $authors[0]->name;
    }
  } else {
    return $default_author;
  }
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
}
function get_rest_featured_image( $object, $field_name, $request ) {
  if( $object['featured_media'] ){
    $img = wp_get_attachment_image_src( $object['featured_media'], 'archive-thumb' );
    return $img[0];
  }
  return false;
}
function get_rest_cat_name( $object, $field_name, $request ) {
  if( $object['categories'] ){
    $cat = get_category($object['categories'][0]);
    if ( $cat->slug !== 'uncategorized'
      && $cat->slug !== 'uncategorized-es'
      && $cat->slug !== 'uncategorized-en'
      && $cat->slug !== 'sin-categoria'
      && $cat->slug !== 'sin-categoria-es'
      && $cat->slug !== 'sin-categoria-en'
    ) {
      return $cat->name;
    }
  }
  return false;
}
