<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
<?php
if (have_posts()) {
  $count = $wp_query->post_count;

  while (have_posts()) {
    the_post();
    $current = $wp_query->current_post;

    if ($current === 0) {
?>
    <div class="grid-row border-bottom background-grey-lite">
      <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">
        <a href="<?php the_permalink() ?>">
          <?php the_post_thumbnail(); ?>
          <div class="grid-row justify-between font-size-tiny">
            <div class="block-category"><span>Category</span></div>
            <div><span>Author</span></div>
          </div>
          <h2 class="font-serif font-size-extra"><?php the_title(); ?></h2>
          <?php the_excerpt(); ?>
        </a>
      </article>
    </div>
<?php
      get_template_part('partials/quick-info');
    }

    if ($current === 1) {
?>
    <div class="grid-row border-bottom">
      <article <?php post_class('grid-item item-s-6 item-m-8 item-l-6 text-align-center background-yellow post-highlight grid-column justify-around'); ?> id="post-<?php the_ID(); ?>">
        <a href="<?php the_permalink() ?>">
          <div class="grid-row justify-around font-size-tiny">
            <div class="block-category"><span>Category</span></div>
            <div><span>Author</span></div>
          </div>
          <h2 class="font-serif font-size-big"><?php the_title(); ?></h2>
          <?php the_post_thumbnail(); ?>
          <div class="grid-row font-size-small justify-center">
            <div class="grid-item no-gutter item-s-12 item-m-11 item-l-10">
              <?php the_excerpt(); ?>
            </div>
          </div>
        </a>
      </article>
<?php
    }

    if ($current >= 2) {
?>
      <article <?php post_class('grid-item item-s-6 item-m-4 item-l-3 text-align-center'); ?> id="post-<?php the_ID(); ?>" style="order: <?php echo $current - 2; ?>">
        <a href="<?php the_permalink() ?>">
          <div class="grid-row justify-between font-size-tiny">
            <div><span>Category</span></div>
            <div><span>Author</span></div>
          </div>
          <?php the_post_thumbnail(); ?>
          <h2 class="font-serif"><?php the_title(); ?></h2>
          <div class="font-size-tiny"><?php the_excerpt(); ?></div>
        </a>
      </article>
<?php
    }
  }
?>
    </div>
<?php
  if ($count > 12) {
?>
    <div class="grid-row border-bottom">
      <div class="grid-item item-s-12 text-align-center">
        <?php echo get_locale() === 'en_US' ? 'See more' : 'Ver más'; ?>
      </div>
    </div>
<?php
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
