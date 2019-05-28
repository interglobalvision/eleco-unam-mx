<?php

if( function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'post-thumbnails' );
}

if( function_exists( 'add_image_size' ) ) {
  add_image_size( 'admin-thumb', 150, 150, false );
  add_image_size( 'opengraph', 1200, 630, true );

  add_image_size( 'header-featured', 910, 500, false);

  add_image_size( 'archive-thumb', 430, 230, true);

  add_image_size( 'archive-event', 9999, 200, false);

  add_image_size( 'gallery', 1200, 9999, false );
}
