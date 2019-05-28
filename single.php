<?php
get_header();
$lang = get_locale();
?>

<main id="main-content">
  <section id="post">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>
    <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>" style="order: <?php echo $current - 2; ?>">
      <header id="single-header" class="grid-item item-s-12 background-grey-lite border-bottom padding-top-mid padding-bottom-mid grid-row justify-center align-items-center">
        <div id="single-title-holder" class="item-s-12 item-m-11 item-l-10">
          <h1 class="font-serif font-size-extra text-align-center"><?php the_title(); ?></h1>
        </div>
        <div id="single-header-image-holder" style="background-image: url(<?php echo get_the_post_thumbnail_url($post->ID, 'header-featured'); ?>)"></div>
      </header>
      <div class="grid-item item-s-12 font-size-tiny background-grey-lite border-bottom grid-row justify-between align-items-center padding-top-tiny padding-bottom-tiny">
        <div><span class="block-category"><?php echo igv_pll_cat('Entrada', 'Post', $post->ID); ?></span></div>
        <div><span><?php echo igv_post_author($post->ID); ?></span></div>
        <div><span><?php the_date(); ?></span></div>
      </div>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row padding-top-large padding-bottom-large">
        <?php the_content(); ?>
      </div>

      <?php get_template_part('partials/share-pdf'); ?>

      <div class="grid-item item-s-12 no-gutter">
        <?php get_template_part('partials/tags'); ?>
      </div>
    </article>
<?php
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
