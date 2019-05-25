<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
<?php
if (have_posts()) {
  $count = $wp_query->post_count;

  get_template_part('partials/home-loop');

  if ($count > 16) {
    get_template_part('partials/see-more');
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
