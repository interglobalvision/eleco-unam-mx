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
?>
    <div class="grid-row border-bottom">
      <div class="grid-item item-s-12 text-align-center">
        <?php echo get_locale() === 'en_US' ? 'See more' : 'Ver más'; ?>
      </div>
    </div>
<?php
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
