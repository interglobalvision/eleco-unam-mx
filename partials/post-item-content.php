<a href="<?php the_permalink() ?>">
  <div class="grid-row justify-around font-size-tiny margin-bottom-micro">
    <div><span class="block-category"><?php echo igv_pll_cat('Entrada', 'Post', $post->ID); ?></span></div>
    <div><span><?php echo igv_post_author($post->ID); ?></span></div>
  </div>
  <?php the_post_thumbnail(); ?>
  <h2 class="font-serif margin-top-micro"><?php the_title(); ?></h2>
  <div class="font-size-tiny margin-top-micro"><?php the_excerpt(); ?></div>
</a>
