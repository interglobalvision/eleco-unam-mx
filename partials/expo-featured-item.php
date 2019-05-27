<?php
$note = get_post_meta($post->ID, '_igv_expo_note', true);
?>
<article <?php post_class('grid-item item-s-12 border-bottom no-gutter'); ?> id="post-<?php the_ID(); ?>">
  <a href="<?php the_permalink(); ?>" class="grid-row">
    <div class="grid-item item-s-12 item-m-6">
      <?php the_post_thumbnail(); ?>
    </div>
    <div class="grid-item item-s-12 item-m-6 no-gutter grid-row">
      <div class="grid-item item-s-12 no-gutter grid-row font-size-tiny">
        <div class="grid-item item-s-4"><span><?php echo igv_pll_cat('Exposición', 'Exhibition', $post->ID); ?></span></div>
        <div class="grid-item item-s-8"><span><?php echo !empty($note) ? $note : ''; ?></span></div>
      </div>
      <div class="grid-item item-s-12 font-serif font-size-big"><h3><?php the_title(); ?></h3></div>
      <div class="grid-item item-s-8 offset-s-4"><span><?php echo igv_expo_dates($post->ID); ?></span></div>
    </div>
  </a>
</article>
