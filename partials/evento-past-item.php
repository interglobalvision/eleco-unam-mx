<article <?php post_class('grid-item item-s-12 no-gutter'); ?> id="post-<?php the_ID(); ?>">
  <a href="<?php the_permalink(); ?>" class="grid-row">
    <div class="grid-item item-s-12 item-m-9 item-l-10 no-gutter grid-row">
      <div class="grid-item item-s-12 no-gutter grid-row font-size-tiny">
        <div class="grid-item"><span class="block-category"><?php echo igv_pll_cat('Evento','Event',$post->ID); ?></span></div>
        <div class="grid-item"><span><?php echo igv_evento_datetime($post->ID); ?></span></div>
      </div>
      <div class="grid-item item-s-12 font-serif"><h3><?php the_title(); ?></h3></div>
    </div>
    <div class="grid-item item-s-12 item-m-3 item-l-2">
      <?php the_post_thumbnail(); ?>
    </div>
  </a>
</archive>
