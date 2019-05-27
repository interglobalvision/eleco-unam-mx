<a href="<?php the_permalink(); ?>">
  <div class="grid-row justify-between font-size-tiny">
    <div><span><?php echo igv_pll_cat('Exposición', 'Exhibition', $post->ID); ?></span></div>
    <div><span><?php echo igv_expo_dates($post->ID); ?></span></div>
  </div>
  <?php the_post_thumbnail(); ?>
  <h2 class="font-serif text-align-center"><?php the_title(); ?></h2>
</a>
