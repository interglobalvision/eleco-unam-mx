<?php
get_header();
$lang = get_locale();
?>

<main id="main-content">
  <section id="page">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>
    <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>">
      <header class="grid-item item-s-12 background-grey-lite padding-top-mid padding-bottom-mid">
        <h1 class="font-serif font-size-extra text-align-center"><?php the_title(); ?></h1>
      </header>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row padding-top-large padding-bottom-large">
        <?php the_content(); ?>
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
