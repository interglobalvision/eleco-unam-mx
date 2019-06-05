<?php

if( function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'post-thumbnails' );
}

if( function_exists( 'add_image_size' ) ) {
  add_image_size( 'admin-thumb', 150, 150, false );
  add_image_size( 'opengraph', 1200, 630, true );

  add_image_size( 'header-featured', 1820, 1000, false);

  add_image_size( 'archive-thumb', 860, 460, true);

  add_image_size( 'archive-event', 9999, 400, false);

  add_image_size( 'gallery', 1200, 9999, false );
}
