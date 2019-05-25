<?php
$now = time();
$args = array(
  'post_type' => 'evento',
  'posts_per_page' => -1,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'meta_key' => '_igv_evento_datetime',
  'meta_query' => array(
    array(
      'key' => '_igv_evento_datetime',
      'value' => $now,
      'compare' => '>=',
    ),
  ),
);
$query = new WP_Query($args);

if ($query->have_posts()) {
  while ($query->have_posts()) {
    $query->the_post();
?>
<article <?php post_class('grid-item item-s-12 no-gutter background-grey-lite'); ?> id="post-<?php the_ID(); ?>">
  <?php get_template_part('partials/evento-future-item-content'); ?>
</article>
<?php
  }
}
