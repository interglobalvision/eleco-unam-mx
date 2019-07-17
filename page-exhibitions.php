<?php
get_header();
?>

<main id="main-content" data-archive="<?php echo get_post_type_archive_link('expo'); ?>">
  <section id="archive-expo">
    <div class="grid-row padding-bottom-mid">
      <header class="grid-item item-s-12 background-grey-lite padding-top-mid padding-bottom-mid">
        <?php get_template_part('partials/headers/header-exhibitions.svg'); ?>
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
$wp_query = new WP_Query($args);

if ($wp_query->have_posts()) {
  $count = $wp_query->post_count;
  while ($wp_query->have_posts()) {
    $wp_query->the_post();
?>
  <article <?php post_class('grid-item item-s-12 item-m-6 item-l-4 text-align-center padding-top-mid'); ?> id="post-<?php the_ID(); ?>">
    <?php get_template_part('partials/expo-item-content'); ?>
  </article>
<?php
  }

  if ($count > 12) {
    get_template_part('partials/see-more');
  }
}
wp_reset_query();
?>
    </div>
    <?php get_template_part('partials/expo-years'); ?>
  </section>
</main>

<?php
get_footer();
?>
