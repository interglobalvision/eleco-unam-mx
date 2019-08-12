<?php
get_header();
?>

<main id="main-content" data-archive="<?php echo get_post_type_archive_link('post'); ?>">
  <section id="posts">
<?php
$num_posts = 24;
global $num_posts;
$args = array(
  'post_type' => 'post',
  'posts_per_page' => $num_posts + 1,
);

$home_query = new WP_Query( $args );

// The Loop
if ( $home_query->have_posts() ) {
  global $home_query;
  $count = $home_query->post_count;

  get_template_part('partials/home-loop');

  if ($count > $num_posts) {
    get_template_part('partials/see-more');
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
