<?php
$now = time();
$args = array(
  'post_type' => 'expo',
  'posts_per_page' => -1,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'meta_key' => '_igv_expo_date_start',
  'meta_query' => array(
    array(
      'key' => '_igv_expo_date_start',
      'value' => $now,
      'compare' => '>=',
    ),
  ),
);
$future_query = new WP_Query($args);

if ($future_query->have_posts()) {
?>
      <div class="grid-item item-s-12 background-grey-dark no-gutter grid-row font-color-white">
        <div class="grid-item item-s-12 text-align-center font-size-mid"><h2><?php igv_pll_str('Proximas', 'Upcoming'); ?></h2></div>
        <?php
          while ($future_query->have_posts()) {
            $future_query->the_post();
            get_template_part('partials/expo-featured-item');
          }
        ?>
      </div>
<?php
}
