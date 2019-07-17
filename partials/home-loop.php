<?php
global $home_query;
global $num_posts;
$count = $home_query->post_count;
$options = get_site_option('_igv_site_options');
$lang = pll_current_language();
$offset = !empty($options['featured_post_'.$lang]) ? $num_posts - 1 : $num_posts;

while ($home_query->have_posts()) {
  $home_query->the_post();
  $current = empty($options['featured_post_'.$lang]) ? $home_query->current_post : $home_query->current_post + 1;

  if (!empty($options['featured_post_'.$lang]) && $current === 1) {
    global $post;

    $post = get_post( $options['featured_post_'.$lang] );

    setup_postdata($post);

    get_template_part('partials/post-featured');

    $home_query->reset_postdata();
  }

  if ($current === 0) {
    get_template_part('partials/post-featured');
    get_template_part('partials/notice');
    get_template_part('partials/quick-info');
  }

  if ($current === 1) {
    if (!empty($options['featured_post_'.$lang])) {
      get_template_part('partials/notice');
      get_template_part('partials/quick-info');
    }
?>
  <div class="grid-row border-bottom padding-bottom-basic">
<?php
    get_template_part('partials/post-highlight');
  }

  if ($current === 2) {
?>
    <div class="grid-item item-s-12 item-m-6 item-l-4 item-xl-8 item-xxl-6 no-gutter grid-row" id="home-side-row">
<?php
  }

  if ($current >= 2 && $current <= 7) {
?>
      <article <?php post_class('grid-item item-s-12 item-xl-6 text-align-center padding-top-basic'); ?> id="post-<?php the_ID(); ?>">
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
    <div class="grid-item item-s-12 no-gutter grid-row js-post-holder" id="home-bottom-row" data-offset="<?php echo $offset; ?>">
<?php
while ($home_query->have_posts()) {
  $home_query->the_post();
  $current = empty($options['featured_post_'.$lang]) ? $home_query->current_post : $home_query->current_post + 1;

  if ($current >= 2 && $current < $num_posts) {
?>
      <article <?php post_class('grid-item item-s-12 item-m-6 item-l-4 item-xxl-3 text-align-center padding-top-mid'); ?> id="post-<?php the_ID(); ?>">
        <?php get_template_part('partials/post-item-content'); ?>
      </article>
<?php

  }
}
?>
    </div>
  </div>
