<a href="<?php the_permalink(); ?>" class="grid-row">
  <div class="grid-item item-s-12 item-m-7 item-l-9 no-gutter grid-row">
    <div class="grid-item item-s-12 no-gutter grid-row font-size-tiny">
      <div class="grid-item"><span class="block-category"><?php echo igv_pll_cat('Evento','Event',$post->ID); ?></span></div>
      <div class="grid-item"><span><?php echo igv_evento_datetime($post->ID); ?></span></div>
    </div>
    <div class="grid-item item-s-12 font-serif font-size-large"><h3><?php the_title(); ?></h3></div>
  </div>
  <div class="grid-item item-s-12 item-m-5 item-l-3 font-size-zero">
    <?php the_post_thumbnail(); ?>
  </div>
</a>
