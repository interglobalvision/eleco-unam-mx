<?php
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_project_taxonomies', 0 );

// create two taxonomies, types and themes for the post type "book"
function create_project_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Autores', 'taxonomy general name', 'igv' ),
		'singular_name'     => _x( 'Autor', 'taxonomy singular name', 'igv' ),
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

	// Add new taxonomy, NOT hierarchical (like tags)
	$labels = array(
		'name'                       => _x( 'Themes', 'taxonomy general name', 'textdomain' ),
		'singular_name'              => _x( 'Theme', 'taxonomy singular name', 'textdomain' ),
		'search_items'               => __( 'Search Themes', 'textdomain' ),
		'popular_items'              => __( 'Popular Themes', 'textdomain' ),
		'all_items'                  => __( 'All Themes', 'textdomain' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Theme', 'textdomain' ),
		'update_item'                => __( 'Update Theme', 'textdomain' ),
		'add_new_item'               => __( 'Add New Theme', 'textdomain' ),
		'new_item_name'              => __( 'New Theme Name', 'textdomain' ),
		'separate_items_with_commas' => __( 'Separate themes with commas', 'textdomain' ),
		'add_or_remove_items'        => __( 'Add or remove themes', 'textdomain' ),
		'choose_from_most_used'      => __( 'Choose from the most used themes', 'textdomain' ),
		'not_found'                  => __( 'No themes found.', 'textdomain' ),
		'menu_name'                  => __( 'Themes', 'textdomain' ),
	);

	$args = array(
		'hierarchical'          => false,
		'labels'                => $labels,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'theme' ),
	);

	register_taxonomy( 'theme', 'book', $args );
}
?>
