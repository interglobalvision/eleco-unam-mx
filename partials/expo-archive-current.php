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
$current_query = new WP_Query($args);

if ($current_query->have_posts()) {
?>
      <div class="grid-item item-s-12 background-grey-lite no-gutter grid-row">
        <div class="grid-item item-s-12 text-align-center font-size-mid"><h2><?php igv_pll_str('Actuales', 'On View'); ?></h2></div>
        <?php
          while ($current_query->have_posts()) {
            $current_query->the_post();
            get_template_part('partials/expo-featured-item');
          }
        ?>
      </div>
<?php
}
