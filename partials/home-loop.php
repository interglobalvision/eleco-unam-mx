<?php
$count = $wp_query->post_count;

while (have_posts()) {
  the_post();
  $current = $wp_query->current_post;

  if ($current === 0) {
    get_template_part('partials/post-featured');
    get_template_part('partials/quick-info');
  }

  if ($current === 1) {
?>
  <div class="grid-row border-bottom padding-bottom-basic">
<?php
    get_template_part('partials/post-highlight');
  }

  if ($current === 2) {
?>
    <div class="grid-item item-s-12 item-m-4 item-l-6 no-gutter grid-row" id="home-side-row">
<?php
  }

  if ($current >= 2 && $current <= 7) {
?>
      <article <?php post_class('grid-item item-s-12 item-l-6 text-align-center padding-top-basic'); ?> id="post-<?php the_ID(); ?>">
        <?php get_template_part('partials/post-item-content'); ?>
      </article>
<?php
  }

  if ($current === 7 || ($current === ($count - 1) && $count <= 8)) {
?>
    </div>
<?php
  }
}
?>
    <div class="grid-item item-s-12 no-gutter grid-row" id="home-bottom-row">
<?php
while (have_posts()) {
  the_post();
  $current = $wp_query->current_post;

  if ($current >= 2) {
?>
      <article <?php post_class('grid-item item-s-12 item-m-4 item-l-3 text-align-center padding-top-mid'); ?> id="post-<?php the_ID(); ?>">
        <?php get_template_part('partials/post-item-content'); ?>
      </article>
<?php

  }
}
?>
    </div>
  </div>
