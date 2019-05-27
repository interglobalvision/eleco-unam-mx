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
  $cat = !empty($cats) ? $cats[0] : igv_pll_str($es_str,$en_str);
  return $cat;
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
