<?php
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_project_taxonomies', 0 );

// create two taxonomies, types and years for the post type "book"
function create_project_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
  $name = function_exists('pll__') ? pll__( 'Autores' ) : __( 'Autores' );
  $singular_name = function_exists('pll__') ? pll__( 'Autor' ) : __( 'Autor' );

	$labels = array(
		'name'              => $name,
		'singular_name'     => $singular_name,
		'search_items'      => __( 'Buscar Autores', 'igv' ),
		'all_items'         => __( 'Todos Autores', 'igv' ),
		'parent_item'       => __( 'Parent Autor', 'igv' ),
		'parent_item_colon' => __( 'Parent Autor:', 'igv' ),
		'edit_item'         => __( 'Editar Autor', 'igv' ),
		'update_item'       => __( 'Actualizar Autor', 'igv' ),
		'add_new_item'      => __( 'Añadir Autor', 'igv' ),
		'new_item_name'     => __( 'Nombre de nuevo Autor', 'igv' ),
		'menu_name'         => __( 'Autor', 'igv' ),
	);

	$args = array(
		'hierarchical'      => false,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'autor' ),
    'show_in_rest' => true,
	);

	register_taxonomy( 'author', array( 'post' ), $args );

  $name = function_exists('pll__') ? pll__( 'Artistas' ) : __( 'Artistas' );
  $singular_name = function_exists('pll__') ? pll__( 'Artista' ) : __( 'Artista' );

	$labels = array(
		'name'              => $name,
		'singular_name'     => $singular_name,
		'search_items'      => __( 'Buscar Artistas', 'igv' ),
		'all_items'         => __( 'Todos Artistas', 'igv' ),
		'parent_item'       => __( 'Parent Artista', 'igv' ),
		'parent_item_colon' => __( 'Parent Artista:', 'igv' ),
		'edit_item'         => __( 'Editar Artista', 'igv' ),
		'update_item'       => __( 'Actualizar Artista', 'igv' ),
		'add_new_item'      => __( 'Añadir Artista', 'igv' ),
		'new_item_name'     => __( 'Nombre de nuevo Artista', 'igv' ),
		'menu_name'         => __( 'Artista', 'igv' ),
	);

	$args = array(
		'hierarchical'      => false,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'artista' ),
    'show_in_rest' => true,
	);

	register_taxonomy( 'artist', array( 'expo', 'evento' ), $args );

  $name = function_exists('pll__') ? pll__( 'Años' ) : __( 'Años' );
  $singular_name = function_exists('pll__') ? pll__( 'Año' ) : __( 'Año' );

	$labels = array(
    'name'              => $name,
    'singular_name'     => $singular_name,
    'search_items'      => __( 'Buscar Años', 'igv' ),
    'all_items'         => __( 'Todos Años', 'igv' ),
    'parent_item'       => __( 'Parent Año', 'igv' ),
    'parent_item_colon' => __( 'Parent Año:', 'igv' ),
    'edit_item'         => __( 'Editar Año', 'igv' ),
    'update_item'       => __( 'Actualizar Año', 'igv' ),
    'add_new_item'      => __( 'Añadir Año', 'igv' ),
    'new_item_name'     => __( 'Nombre de nuevo Año', 'igv' ),
    'menu_name'         => __( 'Año', 'igv' ),
  );

  $args = array(
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'exposiciones-fecha' ),
    'has_archive' => 'news-updates-archive',
    'show_in_rest' => true,
  );

  register_taxonomy( 'expo_year', array( 'expo' ), $args );

  $name = function_exists('pll__') ? pll__( 'Años' ) : __( 'Años' );
  $singular_name = function_exists('pll__') ? pll__( 'Año' ) : __( 'Año' );

  $labels = array(
    'name'              => $name,
    'singular_name'     => $singular_name,
    'search_items'      => __( 'Buscar Años', 'igv' ),
    'all_items'         => __( 'Todos Años', 'igv' ),
    'parent_item'       => __( 'Parent Año', 'igv' ),
    'parent_item_colon' => __( 'Parent Año:', 'igv' ),
    'edit_item'         => __( 'Editar Año', 'igv' ),
    'update_item'       => __( 'Actualizar Año', 'igv' ),
    'add_new_item'      => __( 'Añadir Año', 'igv' ),
    'new_item_name'     => __( 'Nombre de nuevo Año', 'igv' ),
    'menu_name'         => __( 'Año', 'igv' ),
  );

  $args = array(
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'programa-fecha' ),
    'has_archive' => true,
    'show_in_rest' => true,
  );

  register_taxonomy( 'evento_year', array( 'evento' ), $args );
}
?>
