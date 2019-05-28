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
      <div class="grid-item item-s-12 background-grey-lite">
        <h1 class="font-serif font-size-extra text-align-center padding-top-mid padding-bottom-mid"><?php the_title(); ?></h1>
      </div>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row padding-top-large">
        <h2 class="font-serif font-size-big text-align-center padding-bottom-mid"><?php echo $lang === 'en_US' ? 'History' : 'Historia'; ?></h2>
        <?php the_content(); ?>
      </div>

      <?php get_template_part('partials/about-mission'); ?>

      <?php get_template_part('partials/about-programs'); ?>

      <?php get_template_part('partials/share-pdf'); ?>
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
