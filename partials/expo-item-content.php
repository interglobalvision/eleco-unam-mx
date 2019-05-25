<a href="<?php the_permalink(); ?>">
  <div class="grid-row justify-between font-size-tiny">
    <div><span>Category</span></div>
    <div><span>Dates</span></div>
  </div>
  <?php the_post_thumbnail(); ?>
  <h2 class="font-serif text-align-center"><?php the_title(); ?></h2>
</a>
