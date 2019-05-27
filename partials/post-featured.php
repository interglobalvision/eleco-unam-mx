<div class="grid-row border-bottom background-grey-lite padding-top-mid padding-bottom-mid">
  <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">
    <a href="<?php the_permalink() ?>">
      <?php the_post_thumbnail(); ?>
      <div class="grid-row justify-between font-size-tiny">
        <div class="block-category"><span><?php echo igv_pll_cat('Entrada', 'Post', $post->ID); ?></span></div>
        <div><span>Author</span></div>
      </div>
      <h2 class="font-serif font-size-extra"><?php the_title(); ?></h2>
      <?php the_excerpt(); ?>
    </a>
  </article>
</div>
