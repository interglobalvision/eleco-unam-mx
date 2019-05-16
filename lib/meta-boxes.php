<?php

/* Get post objects for select field options */
function get_post_objects( $query_args ) {
  $args = wp_parse_args( $query_args, array(
    'post_type' => 'post',
  ) );
  $posts = get_posts( $args );
  $post_options = array();
  if ( $posts ) {
    foreach ( $posts as $post ) {
      $post_options [ $post->ID ] = $post->post_title;
    }
  }
  return $post_options;
}


/**
 * Include and setup custom metaboxes and fields.
 *
 * @category YourThemeOrPlugin
 * @package  Metaboxes
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     https://github.com/WebDevStudios/CMB2
 */

/**
 * Hook in and add metaboxes. Can only happen on the 'cmb2_init' hook.
 */
add_action( 'cmb2_init', 'igv_cmb_metaboxes' );
function igv_cmb_metaboxes() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
   * Metaboxes declarations here
   * Reference: https://github.com/WebDevStudios/CMB2/blob/master/example-functions.php
   */

  $post_metabox = new_cmb2_box( array(
    'id'            => $prefix . 'post_metabox',
    'title'         => __( 'Options', 'cmb2' ),
    'object_types'  => array( 'post', ), // Post type
  ) );

  $post_metabox->add_field( array(
  	'name'    => 'PDF (español)',
  	'desc'    => '',
  	'id'      => $prefix . 'post_pdf_es',
  	'type'    => 'file',
  	'text'    => array(
  		'add_upload_file_text' => 'Añadir PDF' // Change upload button text. Default: "Add or Upload File"
  	),
  	// query_args are passed to wp.media's library query.
  	'query_args' => array(
  		'type' => 'application/pdf', // Make library only display PDFs.
  	),
  ) );

  $post_metabox->add_field( array(
  	'name'    => 'PDF (inglés)',
  	'desc'    => '',
  	'id'      => $prefix . 'post_pdf_en',
  	'type'    => 'file',
  	'text'    => array(
  		'add_upload_file_text' => 'Añadir PDF' // Change upload button text. Default: "Add or Upload File"
  	),
  	// query_args are passed to wp.media's library query.
  	'query_args' => array(
  		'type' => 'application/pdf', // Make library only display PDFs.
  	),
  ) );

  $visit_page = get_page_by_path('visita');

  if (!empty($visit_page) ) {

    $visit_metabox = new_cmb2_box( array(
  		'id'            => $prefix . 'visit_metabox',
  		'title'         => __( 'Options', 'cmb2' ),
  		'object_types'  => array( 'page', ), // Post type
      'show_on'      => array( 'key' => 'id', 'value' => array($visit_page->ID) ),
  	) );

  }

}
?>
