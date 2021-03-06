<?php

// Custom hooks (like excerpt length etc)

// Programatically create pages
function create_custom_pages() {
  $custom_pages = array(
    ['programa' => 'Programa',
    'program' => 'Program'],
    ['exposiciones' => 'Exposiciones',
    'exhibitions' => 'Exhibitions'],
    ['acercade' => 'El Eco',
    'about' => 'El Eco'],
    ['visita' => 'Visita',
    'visit' => 'Visit'],
    ['directorio' => 'Directorio',
    'directory' => 'Directory'],
    ['privacidad' => 'Política de Privacidad',
    'privacy' => 'Privacy Policy'],
    ['prensa' => 'Prensa',
    'press' => 'Press'],
    ['publicaciones' => 'Publicaciones',
    'publicationes' => 'Publications'],
    ['inicio' => 'Inicio',
    'home' => 'Home'],
    ['entradas' => 'Entradas',
    'posts' => 'Posts']
  );
  foreach($custom_pages as $page_pair) {
    foreach($page_pair as $page_name => $page_title) {
      $page = get_page_by_path($page_name);
      if( empty($page) ) {
        wp_insert_post( array(
          'post_type' => 'page',
          'post_title' => $page_title,
          'post_name' => $page_name,
          'post_status' => 'publish'
        ));
      }
    }
    if (function_exists('pll_set_post_language')) {
      $page_es = get_page_by_path(key(array_slice($page_pair, 0, 1, true)));
      $page_en = get_page_by_path(key(array_slice($page_pair, 1, 1, true)));

      pll_set_post_language($page_es->ID, 'es');
      pll_set_post_language($page_en->ID, 'en');

      pll_save_post_translations( array(
        'es' => $page_es->ID,
        'en' => $page_en->ID
      ) );

      $default_template = 'page.php';
      $template = 'page-' . $page_en->post_name . '.php';
      $located = locate_template( $template );

      if ( !empty( $located ) ) {
        update_post_meta( $page_es->ID, '_wp_page_template', $template );
        update_post_meta( $page_en->ID, '_wp_page_template', $template );
      } else {
        update_post_meta( $page_es->ID, '_wp_page_template', $default_template );
        update_post_meta( $page_en->ID, '_wp_page_template', $default_template );
      }
    }
  }
}
add_filter( 'after_setup_theme', 'create_custom_pages' );

// WP Nav Menu
function register_igv_nav_menus() {
  register_nav_menu('header',__( 'Header Menu' ));
  register_nav_menu('footer',__( 'Footer Menu' ));
}
add_action( 'init', 'register_igv_nav_menus' );

// Filter except length to 15 words.
function igv_custom_excerpt_length( $length ) {
  return 15;
}
add_filter( 'excerpt_length', 'igv_custom_excerpt_length', 999 );

// Change excerpt ellipse
function igv_excerpt_more( $more ) {
	if ( is_admin() ) {
		return $more;
	}
	return '&nbsp;&mdash;';
}
add_filter( 'excerpt_more', 'igv_excerpt_more', 999 );

add_filter( 'allowed_block_types', 'igv_allowed_block_types' );
function igv_allowed_block_types( $allowed_blocks ) {
	return array(
		'core/image',
		'core/paragraph',
		'core/heading',
		'core/list',
    'core/gallery',
    'core/list',
    'core/quote',
    'core/audio',
    'core/video',
    'core/pullquote',
    'core/separator',
    'core-embed/twitter',
    'core-embed/youtube',
    'core-embed/instagram',
    'core-embed/vimeo'
	);
}
