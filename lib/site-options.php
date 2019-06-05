<?php
add_action( 'cmb2_admin_init', 'igv_register_theme_options_metabox' );

function igv_register_theme_options_metabox() {
  $prefix = '_igv_';
/*
  $boiler_options = new_cmb2_box( array(
    'id'           => $prefix . 'boiler_options_page',
    'title'        => esc_html__( 'Boiler Options', 'cmb2' ),
    'object_types' => array( 'options-page' ),

    'option_key'      => $prefix . 'boiler_options', // The option key and admin menu page slug.
    'icon_url'        => 'dashicons-layout', // Menu icon. Only applicable if 'parent_slug' is left empty.
    // 'menu_title'      => esc_html__( 'Options', 'cmb2' ), // Falls back to 'title' (above).
    // 'parent_slug'     => 'themes.php', // Make options page a submenu item of the themes menu.
    'capability'      => 'manage_options', // Cap required to view options-page.
    // 'position'        => 1, // Menu position. Only applicable if 'parent_slug' is left empty.
    // 'admin_menu_hook' => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
    // 'display_cb'      => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
    'save_button'     => esc_html__( 'Boil me baby', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
  ) );

  $boiler_options->add_field( array(
    'name'    => esc_html__( 'THE TITLE', 'cmb2' ),
    'desc'    => esc_html__( 'field description (optional)', 'cmb2' ),
    'id'      => 'title',
    'type'    => 'title',
  ) );

  $boiler_options->add_field( array(
    'name'    => esc_html__( 'Site Background Color', 'cmb2' ),
    'desc'    => esc_html__( 'field description (optional)', 'cmb2' ),
    'id'      => 'bg_color',
    'type'    => 'colorpicker',
    'default' => '#ffffff',
  ) );
*/

  // Site options for general data

  $site_options = new_cmb2_box( array(
    'id'           => $prefix . 'site_options_page',
    'title'        => esc_html__( 'Site Options', 'cmb2' ),
    'object_types' => array( 'options-page' ),
    /*
     * The following parameters are specific to the options-page box
     * Several of these parameters are passed along to add_menu_page()/add_submenu_page().
     */
    'option_key'      => $prefix . 'site_options', // The option key and admin menu page slug.
    // 'menu_title'      => esc_html__( 'Options', 'cmb2' ), // Falls back to 'title' (above).
    // 'parent_slug'     => 'themes.php', // Make options page a submenu item of the themes menu.
    'capability'      => 'manage_options', // Cap required to view options-page.
    // 'position'        => 1, // Menu position. Only applicable if 'parent_slug' is left empty.
    // 'admin_menu_hook' => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
    // 'display_cb'      => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
    // 'save_button'     => esc_html__( 'Save Theme Options', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Noticia', 'cmb2' ),
    'desc'    => esc_html__( '', 'cmb2' ),
    'id'      => $prefix . 'notice_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Noticia (español)', 'cmb2' ),
    'id'      => 'notice_es',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Noticia (inglés)', 'cmb2' ),
    'id'      => 'notice_en',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Información General', 'cmb2' ),
    'desc'    => esc_html__( '', 'cmb2' ),
    'id'      => $prefix . 'generalinfo_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Dirección (español)', 'cmb2' ),
    'id'      => 'generalinfo_address_es',
    'type'    => 'textarea_small',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Dirección (inglés)', 'cmb2' ),
    'id'      => 'generalinfo_address_en',
    'type'    => 'textarea_small',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Horario (español)', 'cmb2' ),
    'id'      => 'generalinfo_hours_es',
    'type'    => 'textarea_small',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Horario (inglés)', 'cmb2' ),
    'id'      => 'generalinfo_hours_en',
    'type'    => 'textarea_small',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Foto del exterior', 'cmb2' ),
    'id'      => 'generalinfo_exterior_photo',
    'type'    => 'file',
    'query_args' => array(
      'type' => array(
        'image/gif',
        'image/jpeg',
        'image/png',
      ),
    ),
  ) );

  $site_options->add_field( array(
    'name' => esc_html__( 'Google map embed', 'cmb2' ),
    'id'   => 'generalinfo_map_embed',
    'type' => 'textarea_code',
    'default' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5130860677154!2d-99.16122639999999!3d19.4334331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8ccbdf3d5ab%3A0xc524d8eeb0f7637e!2sEl+Eco!5e0!3m2!1sen!2smx!4v1559005049438!5m2!1sen!2smx" frameborder="0" style="border:0"></iframe>',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Mailchimp Action', 'cmb2' ),
    'id'      => 'mailchimp_action',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Contacto', 'cmb2' ),
    'id'      => 'generalinfo_contact',
    'type'    => 'wysiwyg',
    'options' => array(
	    'media_buttons' => false, // show insert/upload button(s)
	    'textarea_rows' => get_option('default_post_edit_rows', 3), // rows="..."
	    'editor_css' => '', // intended for extra styles for both visual and HTML editors buttons, needs to include the `<style>` tags, can use "scoped".
	    'editor_class' => '', // add extra class(es) to the editor textarea
  	),
  ) );

  // Social Media variables

  $site_options->add_field( array(
    'name'    => esc_html__( 'Social Media', 'cmb2' ),
    'desc'    => esc_html__( 'Urls and accounts for different social media platforms. For use in menus and metadata', 'cmb2' ),
    'id'      => $prefix . 'socialmedia_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Facebook Page URL', 'cmb2' ),
    'id'      => 'socialmedia_facebook_url',
    'type'    => 'text',
    'default' => 'https://www.facebook.com/museoexperimentaleleco/',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Twitter Account Handle', 'cmb2' ),
    'id'      => 'socialmedia_twitter',
    'type'    => 'text',
    'default' => 'museo_el_eco',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Instagram Account Handle', 'cmb2' ),
    'id'      => 'socialmedia_instagram',
    'type'    => 'text',
    'default' => 'museoexperimentaleleco',
  ) );

  // Metadata options

  $site_options->add_field( array(
    'name'    => esc_html__( 'Metadata options', 'cmb2' ),
    'desc'    => esc_html__( 'Settings relating to open graph, facebook and twitter sharing, and other social media metadata', 'cmb2' ),
    'id'      => $prefix . 'og_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Open Graph default image', 'cmb2' ),
    'desc'    => esc_html__( 'primarily displayed on Facebook, but other locations as well', 'cmb2' ),
    'id'      => 'og_image',
    'type'    => 'file',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Logo for SEO results', 'cmb2' ),
    'desc'    => esc_html__( 'presentation logo for this site (optional)', 'cmb2' ),
    'id'      => 'metadata_logo',
    'type'    => 'file',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Facebook App ID', 'cmb2' ),
    'desc'    => esc_html__( '(optional)', 'cmb2' ),
    'id'      => 'og_fb_app_id',
    'type'    => 'text',
  ) );

  // Analytics

  $site_options->add_field( array(
    'name'    => esc_html__( 'Analytics', 'cmb2' ),
    'desc'    => esc_html__( 'Settings for analytics', 'cmb2' ),
    'id'      => $prefix . 'analytics_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Google Analytics Tracking ID', 'cmb2' ),
    'desc'    => esc_html__( '(optional)', 'cmb2' ),
    'id'      => 'google_analytics_id',
    'type'    => 'text',
  ) );
}
