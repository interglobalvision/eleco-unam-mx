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
      'compare' => '<=',
    ),
  ),
);
$past_query = new WP_Query($args);

if ($past_query->have_posts()) {
  $count = $past_query->post_count;
  while ($past_query->have_posts()) {
    $past_query->the_post();

    get_template_part('partials/evento-past-item');
  }

  if ($count > 12) {
    get_template_part('partials/see-more');
  }
}
?>
