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
      <div class="grid-item item-s-12 background-grey-lite border-bottom">
        <h1 class="font-serif font-size-extra"><?php the_title(); ?></h1>
        <?php the_post_thumbnail(); ?>
      </div>
      <div class="grid-item item-s-12 justify-between font-size-tiny background-grey-lite border-bottom grid-row justify-between">
        <div><span>Category</span></div>
        <div><span>Author</span></div>
      </div>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row padding-top-mid padding-bottom-large">
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
