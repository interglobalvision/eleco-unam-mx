<?php
$now = time();
$num_posts = 2;
$args = array(
  'post_type' => 'evento',
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'posts_per_page' => $num_posts,
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
?>
<div class="grid-row js-post-holder" data-offset="<?php echo $num_posts; ?>" data-template="evento-item" data-type="evento">
<?php
  while ($past_query->have_posts()) {
    $past_query->the_post();

    get_template_part('partials/evento-past-item');
  }
?>
</div>
<?php
  if ($count > $num_posts) {
    get_template_part('partials/see-more');
  }
}
?>
