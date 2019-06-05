<?php
$note = get_post_meta($post->ID, '_igv_expo_note', true);
$count = $wp_query->post_count;
$current = $wp_query->current_post;
$classes = 'grid-item item-s-12 no-gutter padding-bottom-mid padding-top-mid';
if ($current < ($count - 1)) { $classes .= ' border-bottom'; }
?>
<article <?php post_class($classes); ?> id="post-<?php the_ID(); ?>">
  <a href="<?php the_permalink(); ?>" class="grid-row">
    <div class="grid-item item-s-12 item-m-6">
      <?php the_post_thumbnail('header-featured'); ?>
    </div>
    <div class="grid-item item-s-12 item-m-6 no-gutter grid-row">
      <div class="grid-item item-s-12 no-gutter grid-row font-size-tiny">
        <div class="grid-item item-s-4"><span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span></div>
        <div class="grid-item item-s-8"><span><?php echo !empty($note) ? $note : ''; ?></span></div>
      </div>
      <div class="grid-item item-s-12 font-serif font-size-big"><h3><?php the_title(); ?></h3></div>
      <div class="grid-item item-s-8 offset-s-4"><span><?php echo igv_expo_dates($post->ID); ?></span></div>
    </div>
  </a>
</article>
