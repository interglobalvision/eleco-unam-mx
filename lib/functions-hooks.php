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
    'publicationes' => 'Publications']
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
