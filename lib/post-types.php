<?php
// Menu icons for Custom Post Types
// https://developer.wordpress.org/resource/dashicons/
function add_menu_icons_styles(){
?>

<style>
#menu-posts-evento .dashicons-admin-post:before {
  content: '\f508';
}
#menu-posts-expo .dashicons-admin-post:before {
  content: '\f232';
}
</style>

<?php
}
add_action( 'admin_head', 'add_menu_icons_styles' );


//Register Custom Post Types
add_action( 'init', 'register_cpt_evento' );

function register_cpt_evento() {

  $labels = array(
    'name' => _x( 'Programa', 'evento' ),
    'singular_name' => _x( 'Evento', 'evento' ),
    'add_new' => _x( 'Agregar Nuevo', 'evento' ),
    'add_new_item' => _x( 'Agregar Nuevo Evento', 'evento' ),
    'edit_item' => _x( 'Editar Evento', 'evento' ),
    'new_item' => _x( 'Nuevo Evento', 'evento' ),
    'view_item' => _x( 'Ver Evento', 'evento' ),
    'search_items' => _x( 'Buscar Eventos', 'evento' ),
    'not_found' => _x( 'Ningún evento encontrado', 'evento' ),
    'not_found_in_trash' => _x( 'Ningún evento encontrado en la Papelera', 'evento' ),
    'parent_item_colon' => _x( 'Parent Evento:', 'evento' ),
    'menu_name' => _x( 'Programa', 'evento' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'show_in_rest' => true,
    'taxonomies' => array('post_tag')
  );

  register_post_type( 'evento', $args );
}

add_action( 'init', 'register_cpt_expo' );

function register_cpt_expo() {

  $labels = array(
    'name' => _x( 'Exposiciones', 'expo' ),
    'singular_name' => _x( 'Expo', 'expo' ),
    'add_new' => _x( 'Agregar Nuevo', 'expo' ),
    'add_new_item' => _x( 'Agregar Nuevo Expo', 'expo' ),
    'edit_item' => _x( 'Editar Expo', 'expo' ),
    'new_item' => _x( 'Nuevo Expo', 'expo' ),
    'view_item' => _x( 'Ver Expo', 'expo' ),
    'search_items' => _x( 'Buscar Expos', 'expo' ),
    'not_found' => _x( 'Ningún expo encontrado', 'expo' ),
    'not_found_in_trash' => _x( 'Ningún expo encontrado en la Papelera', 'expo' ),
    'parent_item_colon' => _x( 'Parent Expo:', 'expo' ),
    'menu_name' => _x( 'Expos', 'expo' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'show_in_rest' => true,
    'taxonomies' => array('post_tag')
  );

  register_post_type( 'expo', $args );
}
