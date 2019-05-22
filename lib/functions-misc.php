<?php

// Remove WP Emoji
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Disable that freaking admin bar
add_filter('show_admin_bar', '__return_false');

// Turn off version in meta
function no_generator() { return ''; }
add_filter( 'the_generator', 'no_generator' );

// Show thumbnails in admin lists
add_filter('manage_posts_columns', 'new_add_post_thumbnail_column');
function new_add_post_thumbnail_column($cols) {
  $cols['new_post_thumb'] = __('Thumbnail');
  return $cols;
}
add_action('manage_posts_custom_column', 'new_display_post_thumbnail_column', 5, 2);
function new_display_post_thumbnail_column($col, $id) {
  if ($col === 'new_post_thumb' && function_exists('the_post_thumbnail')) {
    echo the_post_thumbnail( 'admin-thumb' );
  }
}

// remove automatic <a> links from images in blog
function wpb_imagelink_setup() {
  $image_set = get_option( 'image_default_link_type' );
  if ($image_set !== 'none') {
    update_option('image_default_link_type', 'none');
  }
}
add_action('admin_init', 'wpb_imagelink_setup', 10);

// Clean site desc. after theme activation
function clean_site_blog_info() {
  $old  = get_option('blogdescription');
  if ( $old == 'Just another WordPress site' || $old == 'Otro sitio realizado con WordPress' ) {
    update_option( 'blogdescription', '' );
  }
}
add_action( 'after_setup_theme', 'clean_site_blog_info' );

// custom login logo
/*
function custom_login_logo() {
  echo '<style type="text/css">h1 a { background-image:url(' . get_bloginfo( 'template_directory' ) . '/images/login-logo.png) !important; background-size:300px auto !important; width:300px !important; }</style>';
}
add_action( 'login_head', 'custom_login_logo' );
 */

// set globals
function igv_theme_globals() {
  global $about_mission_sections;
  global $about_program_sections;

  $about_mission_sections = [
    ['mission','Misión','Mission'],
    ['vision','Visión','Vision'],
    ['vocation','Vocación','Vocation']
  ];

  foreach ($about_mission_sections as $k => $v) {
    $about_mission_sections[$k] = array(
      'id' => $v[0],
      'es' => $v[1],
      'en' => $v[2]
    );
  }

  $about_program_sections = [
    ['exhibition','Proyectos de Exposición','Exhibition Projects'],
    ['public','Programa Publico','Public Program'],
    ['bar','Barra Eco','Eco Bar'],
    ['pavilion','Pabellón Eco','Eco Pavilion'],
  ];

  foreach ($about_program_sections as $k => $v) {
    $about_program_sections[$k] = array(
      'id' => $v[0],
      'es' => $v[1],
      'en' => $v[2]
    );
  }
}
add_action( 'init', 'igv_theme_globals' );

function eco_shortcode( $atts, $content = null ) {
  $a = shortcode_atts( array(
    'tag' => 'tag',
  ), $atts );
	return '<span class="inline-tag" data-tag="' . esc_attr($a['tag']) . '">' . $content . '</span>';
}
add_shortcode( 'eco', 'eco_shortcode' );
