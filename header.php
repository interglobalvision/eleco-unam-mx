<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php wp_title('|',true,'right'); bloginfo('name'); ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

<?php
get_template_part('partials/globie');
get_template_part('partials/seo');
?>

  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">
  <link rel="shortcut" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.ico">
  <link rel="apple-touch-icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon-touch.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">

<?php if (is_singular() && pings_open(get_queried_object())) { ?>
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php } ?>

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!--[if lt IE 9]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->

<section id="main-container" class="grid-column">

  <header id="header" class="background-grey-lite font-size-small">
    <div class="grid-row font-uppercase border-bottom padding-top-tiny padding-bottom-tiny">
      <div id="header-title" class="grid-item item-s-auto">
        <h1 class="font-size-small">
          <a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
        </h1>
      </div>
      <div id="header-lang" class="grid-row justify-end grid-item item-s-auto text-align-right">
        <ul>
          <?php pll_the_languages(array('hide_current'=>1)); ?>
        </ul>
      </div>
      <nav id="header-nav" class="grid-row grid-item item-s-12 item-l-auto">
        <?php wp_nav_menu( array( 'theme_location' => 'header' ) ); ?>
      </nav>
    </div>
    <?php get_template_part('partials/search'); ?>
  </header>
