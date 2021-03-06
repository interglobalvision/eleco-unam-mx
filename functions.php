<?php

// Enqueue

function scripts_and_styles_method() {
  $templateuri = get_template_directory_uri();

  $javascriptMain = $templateuri . '/dist/js/main.js';
  $javascriptSearch = $templateuri . '/dist/js/search.min.js';
  $javascriptMarquee = 'https://cdn.jsdelivr.net/npm/dynamic-marquee@1';

  $is_admin = current_user_can('administrator') ? 1 : 0;

  $site_options = get_site_option('_igv_site_options');

  $lang = get_locale() === 'en_US' ? 'en' : 'es';

  $notice = false;
  if ($lang === 'es' && !empty($site_options['notice_es'])) {
    $notice = $site_options['notice_es'];
  } else if ($lang === 'en' && !empty($site_options['notice_en'])) {
    $notice = $site_options['notice_en'];
  }

  $javascriptVars = array(
    'siteUrl' => home_url(),
    'themeUrl' => get_template_directory_uri(),
    'isAdmin' => $is_admin,
    'mailchimp' => !empty($site_options['mailchimp_action']) ? $site_options['mailchimp_action'] : null,
    'lang' => get_locale(),
    'notice' => $notice,
    'restSearchPosts' => rest_url( 'wp/v2/multiple-post-type?search=%s&per_page=4&lang=' . $lang . '&type[]=post&type[]=expo&type[]=evento&type[]=page' ),
    'restLoadMore' => rest_url( 'wp/v2/' ),
  );

  wp_register_script('javascript-marquee', $javascriptMarquee);
  wp_enqueue_script('javascript-marquee', $javascriptMarquee, '', '', true);

  wp_register_script('javascript-main', $javascriptMain);
  wp_localize_script('javascript-main', 'WP', $javascriptVars);
  wp_enqueue_script('javascript-main', $javascriptMain, '', '', true);

  wp_register_script('javascript-search', $javascriptSearch);
  wp_localize_script('javascript-search', 'WP', $javascriptVars);
  wp_enqueue_script('javascript-search', $javascriptSearch, '', '', true);

  wp_enqueue_script( 'wp-util' );

  // Enqueue style
  wp_enqueue_style( 'style-site', get_stylesheet_directory_uri() . '/dist/css/site.css' );

  // dashicons for admin
  if (is_admin()) {
    wp_enqueue_style( 'dashicons' );
  }
}
add_action('wp_enqueue_scripts', 'scripts_and_styles_method');

// Declare thumbnail sizes

get_template_part( 'lib/thumbnail-sizes' );

// Register Nav Menus
/*
register_nav_menus( array(
  'menu_location' => 'Location Name',
) );
 */

// Add third party PHP libs

function cmb_initialize_cmb_meta_boxes() {
  if (!class_exists( 'cmb2_bootstrap_202' ) ) {
    require_once 'vendor/cmb2/cmb2/init.php';
    require_once 'vendor/alexis-magina/cmb2-field-post-search-ajax/cmb-field-post-search-ajax.php';
  }
}
add_action( 'init', 'cmb_initialize_cmb_meta_boxes', 11 );

function composer_autoload() {
  require_once( 'vendor/autoload.php' );
}
add_action( 'init', 'composer_autoload', 10 );

// Add libs

get_template_part( 'lib/custom-gallery' );
get_template_part( 'lib/post-types' );
get_template_part( 'lib/taxonomies' );
get_template_part( 'lib/meta-boxes' );
get_template_part( 'lib/site-options' );

// Add custom functions

get_template_part( 'lib/functions-misc' );
get_template_part( 'lib/functions-custom' );
get_template_part( 'lib/functions-filters' );
get_template_part( 'lib/functions-hooks' );
get_template_part( 'lib/functions-utility' );

/*
 * Plugin Name:       WP Rest Api V2 Multiple PostTypes
 * Plugin URI:        https://github.com/elevati/wp-api-multiple-posttype
 * Description:       Extension of wp/v2/posts api to allow query multiple post types
 * Version:           1.0.2
 * Author:            ElevatiInfotech
 * Author URI:        https://github.com/elevati
 * License:           GPL-3.0-or-later
 */
/**
 * WP_REST_Multiple_PostType_Controller class.
 */
function init_wp_rest_multiple_posttype_endpoint()
{
    if (!class_exists('WP_REST_Multiple_PostType_Controller')) {
        require_once dirname(__FILE__) . '/lib/endpoints/class-wp-rest-multiple-posttype-controller.php';
    }
    $controller = new WP_REST_Multiple_PostType_Controller();
    $controller->register_routes();
}
/**
 * REST INIT
 */
add_action('rest_api_init', 'init_wp_rest_multiple_posttype_endpoint');

?>
