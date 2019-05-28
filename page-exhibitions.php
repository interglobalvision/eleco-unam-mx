<?php
get_header();
?>

<main id="main-content">
  <section id="archive-expo" class="border-bottom">
    <div class="grid-row">
      <header class="grid-item item-s-12 background-grey-lite border-bottom padding-top-mid padding-bottom-mid">
        <h1 class="font-serif font-size-extra text-align-center"><?php echo igv_pll_str('Exposiciones', 'Exhibitions'); ?></h1>
      </header>
<?php
get_template_part('partials/expo-archive-current');

get_template_part('partials/expo-archive-future');

$now = time();
$args = array(
  'post_type' => 'expo',
  'posts_per_page' => -1,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'meta_key' => '_igv_expo_date_end',
  'meta_query' => array(
    array(
      'key' => '_igv_expo_date_end',
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
?>
  <article <?php post_class('grid-item item-s-12 item-m-6 item-l-4'); ?> id="post-<?php the_ID(); ?>">
    <?php get_template_part('partials/expo-item-content'); ?>
  </article>
<?php
  }

  if ($count > 12) {
    get_template_part('partials/see-more');
  }
}
?>
    </div>
  </section>
</main>

<?php
get_footer();
?>
