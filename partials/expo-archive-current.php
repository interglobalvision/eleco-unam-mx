<?php
$now = time();
$args = array(
  'post_type' => 'expo',
  'posts_per_page' => -1,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'meta_key' => '_igv_expo_date_start',
  'meta_query' => array(
    'relation' => 'AND',
    array(
      'key' => '_igv_expo_date_start',
      'value' => $now,
      'compare' => '<=',
    ),
    array(
      'key' => '_igv_expo_date_end',
      'value' => $now,
      'compare' => '>=',
    ),
  ),
);
$wp_query = new WP_Query($args);

if ($wp_query->have_posts()) {
?>
<div class="grid-item item-s-12 background-grey-lite no-gutter grid-row border-top">
  <div class="grid-item item-s-12 text-align-center font-size-mid padding-top-mid"><h2><?php echo igv_pll_str('Actuales', 'On View'); ?></h2></div>
  <?php
    while ($wp_query->have_posts()) {
      $wp_query->the_post();
      get_template_part('partials/expo-featured-item');
    }
  ?>
</div>
<?php
}
wp_reset_query();
