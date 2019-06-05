<?php
$related = get_post_meta($post->ID, '_igv_post_related', true);

if (!empty($related)) {
  $args = array(
    'post__in' => $related,
    'post_type' => 'any',
    'posts_per_page' => 1
  );

  $query = new WP_Query( $args );

  if ($query->have_posts()) {
?>
<div class="grid-row justify-center">
<?php
    while ($query->have_posts()) {
      $query->the_post();
?>
  <article <?php post_class('grid-item item-s-12 item-m-4 item-l-3 text-align-center padding-top-mid'); ?> id="post-<?php the_ID(); ?>">
    <?php get_template_part('partials/post-item-content'); ?>
  </article>
<?php
    }
?>
</div>
<?php
  }
  wp_reset_query();
}
?>
