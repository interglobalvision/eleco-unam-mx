<article <?php post_class('grid-item item-s-12 no-gutter'); ?> id="post-<?php the_ID(); ?>">
  <a href="<?php the_permalink(); ?>" class="grid-row padding-top-small padding-bottom-small">
    <div class="grid-item item-s-12 item-m-9 item-l-10 no-gutter grid-column justify-center">
      <div class="grid-item no-gutter grid-row font-size-tiny">
        <div class="grid-item"><span class="block-category"><?php echo igv_pll_cat('Evento','Event',$post->ID); ?></span></div>
        <div class="grid-item"><span><?php echo igv_evento_datetime($post->ID); ?></span></div>
      </div>
      <div class="grid-item font-serif"><h3><?php the_title(); ?></h3></div>
    </div>
    <div class="grid-item item-s-12 item-m-3 item-l-2 font-size-zero archive-event-past-image-holder">
      <?php the_post_thumbnail('archive-event'); ?>
    </div>
  </a>
</archive>
