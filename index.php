<?php
get_header();
?>

<main id="main-content">
  <section id="page">
    <header class="grid-item item-s-12 background-grey-lite padding-top-mid padding-bottom-mid">
      <h1 class="font-serif font-size-extra text-align-center"><?php echo get_the_archive_title(); ?></h1>
    </header>
    <div class="grid-row padding-bottom-mid" id="post-holder">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>
      <article <?php post_class('grid-item item-s-12 item-m-4 item-l-3 text-align-center padding-top-basic'); ?> id="post-<?php the_ID(); ?>">
        <?php get_template_part('partials/post-item-content'); ?>
      </article>
<?php
  }
} else {
?>
      <div class="grid-item item-s-12 text-align-center">
        <span><?php igv_pll_str('Nada encontrado', 'Nothing found'); ?></span>
      </div>
<?php
}
?>
    </div>
  </section>
</main>

<?php
get_footer();
?>
