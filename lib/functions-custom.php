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

// eco shortcode
function eco_shortcode( $atts, $content = null ) {
  $a = shortcode_atts( array(
    'tag' => 'tag',
  ), $atts );
	return '<span class="inline-tag" data-tag="' . esc_attr($a['tag']) . '">' . $content . '</span>';
}
add_shortcode( 'eco', 'eco_shortcode' );
