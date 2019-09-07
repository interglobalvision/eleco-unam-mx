<a href="<?php the_permalink(); ?>">
  <div class="detail-thumb-holder grid-column">
    <div class="font-size-tiny margin-bottom-micro">
      <span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span>
      <span class="post-item-authors"><?php echo igv_post_author($post->ID); ?></span>
    </div>
    <div class="flex-grow post-item-thumb" style="background-image: url('<?php echo get_the_post_thumbnail_url(null, 'archive-thumb'); ?>')"></div>
  </div>
  <h2 class="font-serif margin-top-micro font-size-item-title"><?php the_title(); ?></h2>
  <div class="font-size-tiny margin-top-micro"><?php the_excerpt(); ?></div>
</a>
