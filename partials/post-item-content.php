<a href="<?php the_permalink() ?>">
  <div class="grid-row justify-between font-size-tiny">
    <div><span>Category</span></div>
    <div><span>Author</span></div>
  </div>
  <?php the_post_thumbnail(); ?>
  <h2 class="font-serif"><?php the_title(); ?></h2>
  <div class="font-size-tiny"><?php the_excerpt(); ?></div>
</a>
