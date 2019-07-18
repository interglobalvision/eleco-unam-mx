<article <?php post_class('grid-item item-s-12 no-gutter background-grey-lite'); ?> id="post-<?php the_ID(); ?>">
  <a href="<?php the_permalink(); ?>" class="grid-row padding-top-basic padding-bottom-basic">
    <div class="grid-item item-s-12 item-m-7 item-l-9 no-gutter grid-column justify-center">
      <div class="grid-item no-gutter grid-row font-size-tiny margin-bottom-small">
        <div class="grid-item"><span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span></div>
        <div><span><?php echo igv_evento_datetime($post->ID); ?></span></div>
      </div>
      <div class="grid-item font-serif font-size-large"><h3><?php the_title(); ?></h3></div>
    </div>
    <div class="grid-item item-s-12 item-m-5 item-l-3 font-size-zero archive-event-future-image-holder">
      <?php the_post_thumbnail('archive-event'); ?>
    </div>
  </a>
</article>
