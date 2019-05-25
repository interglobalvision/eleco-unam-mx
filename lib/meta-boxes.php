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
    'object_types'  => array( 'post','expo','evento' ), // Post type
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

  //EXPO

  $expo_dates_metabox = new_cmb2_box( array(
    'id'            => $prefix . 'expo_dates_metabox',
    'title'         => __( 'Dates', 'cmb2' ),
    'object_types'  => array( 'expo' ), // Post type
  ) );

  $expo_dates_metabox->add_field( array(
  	'name' => 'Fecha de inicio',
  	'id'   => $prefix . 'expo_date_start',
  	'type' => 'text_date_timestamp',
  ) );

  $expo_dates_metabox->add_field( array(
  	'name' => 'Fecha final',
  	'id'   => $prefix . 'expo_date_end',
  	'type' => 'text_date_timestamp',
  ) );

  $expo_details_metabox = new_cmb2_box( array(
    'id'            => $prefix . 'expo_details_metabox',
    'title'         => __( 'Details', 'cmb2' ),
    'object_types'  => array( 'expo' ), // Post type
  ) );

  $expo_details_metabox->add_field( array(
  	'name' => 'Nota importante',
    'desc' => 'Curaduria por, etc.',
  	'id'   => $prefix . 'expo_note',
  	'text' => 'text',
  ) );

  //ABOUT

  $about_page_es = get_page_by_path('acercade');
  $about_page_en = get_page_by_path('about');

  if (!empty($about_page_es) && !empty($about_page_en)) {

    $about_mission_metabox = new_cmb2_box( array(
  		'id'            => $prefix . 'about_mission_metabox',
  		'title'         => __( 'Misión, Visión, Vocación', 'cmb2' ),
  		'object_types'  => array( 'page', ), // Post type
      'show_on'      => array(
        'key' => 'id',
        'value' => array(
          $about_page_es->ID,
          $about_page_en->ID
        )
      ),
  	) );

    global $about_mission_sections;

    foreach ($about_mission_sections as $section) {
      $about_mission_metabox->add_field( array(
      	'name'    => $section['es'],
      	'desc'    => '',
      	'id'      => $prefix . 'about_' . $section['id'],
      	'type'    => 'wysiwyg',
        'options' => array(
    	    'media_buttons' => false, // show insert/upload button(s)
    	    'textarea_rows' => get_option('default_post_edit_rows', 5), // rows="..."
      	),
      ) );
    }

    $about_program_metabox = new_cmb2_box( array(
  		'id'            => $prefix . 'about_program_metabox',
  		'title'         => __( 'Descripión de Programas', 'cmb2' ),
  		'object_types'  => array( 'page', ), // Post type
      'show_on'      => array(
        'key' => 'id',
        'value' => array(
          $about_page_es->ID,
          $about_page_en->ID
        )
      ),
  	) );

    global $about_program_sections;

    foreach ($about_program_sections as $section) {
      $about_program_metabox->add_field( array(
      	'name'    => $section['es'],
      	'desc'    => '',
      	'id'      => $prefix . 'about_' . $section['id'],
      	'type'    => 'wysiwyg',
        'options' => array(
    	    'media_buttons' => false, // show insert/upload button(s)
    	    'textarea_rows' => get_option('default_post_edit_rows', 5), // rows="..."
      	),
      ) );

      $about_program_metabox->add_field( array(
      	'name'    => $section['es'] . ' URL',
      	'desc'    => '',
      	'id'      => $prefix . 'about_' . $section['id'] . '_url',
      	'type'    => 'text_url',
      ) );

      $about_program_metabox->add_field( array(
      	'name'    => $section['es'] . ' imagen',
      	'desc'    => '',
      	'id'      => $prefix . 'about_' . $section['id'] . '_image',
      	'type'    => 'file',
        'query_args' => array(
      		'type' => array(
      		  'image/gif',
    	      'image/jpeg',
      	    'image/png',
        	),
      	),
      ) );
    }

  }

}
?>
