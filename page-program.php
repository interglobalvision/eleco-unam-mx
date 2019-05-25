<?php
get_header();
?>

<main id="main-content">
  <section id="archive-evento" class="border-bottom">
    <div class="grid-row">
      <div class="grid-item item-s-12 background-grey-lite border-bottom">
        <h1 class="font-serif font-size-extra text-align-center"><?php igv_pll_str('Programa', 'Program'); ?></h1>
      </div>
<?php
get_template_part('partials/evento-archive-future');

$now = time();
$args = array(
  'post_type' => 'evento',
  'posts_per_page' => -1,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
  'meta_key' => '_igv_expo_date_end',
  'meta_query' => array(
    array(
      'key' => '_igv_expo_datetime',
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
  <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">
    <?php the_title(); ?>
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
