<a href="<?php the_permalink(); ?>">
  <div class="grid-row justify-around font-size-tiny margin-bottom-micro">
    <div><span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span></div>
    <div><span><?php echo igv_expo_dates($post->ID); ?></span></div>
  </div>
  <?php the_post_thumbnail('archive-thumb'); ?>
  <h2 class="font-serif margin-top-micro font-size-item-title"><?php the_title(); ?></h2>
</a>
