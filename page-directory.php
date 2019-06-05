<?php
get_header();
$lang = get_locale();
?>

<main id="main-content">
  <section id="page">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $directory = get_post_meta($post->ID, '_igv_directory_group', true);
?>
    <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>">
      <header class="grid-item item-s-12 background-grey-lite padding-top-mid padding-bottom-mid">
        <h1 class="font-serif font-size-extra text-align-center"><?php the_title(); ?></h1>
      </header>
<?php
  if (!empty($directory)) {
?>
      <div class="grid-item item-s-12 no-gutter grid-row padding-top-large padding-bottom-small">
<?php
    foreach ($directory as $entry) {
?>
        <div class="grid-item item-s-12 item-m-6 item-l-4 item-xl-3 text-align-center margin-bottom-mid">
        <?php
          if (!empty($entry['title'])) {
        ?>
          <div><span class="font-size-tiny"><?php echo $entry['title']; ?></span></div>
        <?php
          }
          if (!empty($entry['name'])) {
        ?>
          <div><h2 class="font-size-item-title font-serif"><?php echo $entry['name']; ?></h2></div>
        <?php
          }
          if (!empty($entry['phone'])) {
        ?>
          <div class="margin-top-micro"><a class="link-underline" href="tel:<?php echo $entry['phone']; ?>"><?php echo $entry['phone']; ?></a></div>
        <?php
          }
          if (!empty($entry['email'])) {
        ?>
          <div class="margin-top-micro"><a class="link-underline" href="mailto:<?php echo $entry['email']; ?>"><?php echo $entry['email']; ?></a></div>
        <?php
          }
        ?>
        </div>
<?php
    }
?>
      </div>
<?php
  }
?>
    </article>
<?php
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
