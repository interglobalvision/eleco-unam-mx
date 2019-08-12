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
    $footnotes = get_post_meta($post->ID, '_igv_footnotes', true);
?>
    <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>" style="order: <?php echo $current - 2; ?>">
      <header id="single-header" class="grid-item item-s-12 background-grey-lite border-bottom padding-top-mid padding-bottom-mid grid-row justify-center align-items-center">
        <div id="single-title-holder" class="item-s-12 item-m-11 item-l-10">
          <h1 class="font-serif font-size-extra text-align-center"><?php the_title(); ?></h1>
        </div>
        <div id="single-header-image-holder" style="background-image: url(<?php echo get_the_post_thumbnail_url($post->ID, 'header-featured'); ?>)"></div>
      </header>
      <div class="grid-item item-s-12 font-size-tiny background-grey-lite border-bottom grid-row justify-between align-items-center padding-top-tiny padding-bottom-tiny">
        <div><span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span></div>
        <div><span><?php echo igv_post_author($post->ID, true); ?></span></div>
        <div><span><?php the_date(); ?></span></div>
      </div>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row padding-top-large padding-bottom-large">
        <?php the_content(); ?>
      </div>

      <?php if (!empty($footnotes)) { ?>

        <div class="grid-row justify-center item-s-12 border-bottom padding-top-small padding-bottom-small">
          <div class="grid-item item-s-12 item-m-10 item-l-8">
            <ol>
            <?php foreach($footnotes as $index => $footnote) { ?>
              <li id="footnote-ref-<?php echo $index + 1; ?>"><a href="#article-ref-<?php echo $index + 1; ?>"><?php echo $footnote; ?></a></li>
            <?php } ?>
            </ol>
          </div>
        </div>

      <?php } ?>

      <?php get_template_part('partials/share-pdf'); ?>

      <div class="grid-item item-s-12 no-gutter">
        <?php get_template_part('partials/tags'); ?>
      </div>

      <div class="grid-item item-s-12 no-gutter">
        <?php get_template_part('partials/related'); ?>
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
