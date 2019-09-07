<div id="post-featured-holder" class="border-bottom background-grey-lite padding-top-mid padding-bottom-mid">
  <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
    <a href="<?php the_permalink() ?>" class="grid-row">
      <div  id="post-featured-cat-holder" class="item-s-12 grid-row margin-bottom-micro">
        <div class="grid-item">
          <div class="block-category"><span><?php echo igv_pll_cat($post->ID); ?></span></div>
        </div>
        <div class="grid-item "><span><?php echo igv_post_author($post->ID); ?></span></div>
      </div>
      <div id="post-featured-image-holder" class="grid-item item-s-12 grid-column">
        <div id="post-featured-image" class="flex-grow" style="background-image: url(<?php echo get_the_post_thumbnail_url($post->ID, 'header-featured'); ?>)"></div>
      </div>
      <div id="post-featured-title-holder" class="grid-item item-s-12 item-m-11 offset-m-1 item-l-10 offset-l-2 item-xl-8 offset-xl-4 margin-bottom-small padding-top-small">
        <h2 class="font-serif font-size-extra js-fix-widows"><?php the_title(); ?></h2>
      </div>
      <div id="post-featured-excerpt-holder" class="grid-item item-m-12 item-m-4 offset-m-8">
        <?php the_excerpt(); ?>
      </div>
    </a>
  </article>
</div>
