<div class="grid-row border-bottom background-grey-lite padding-top-mid padding-bottom-mid" id="post-featured-holder">
  <article <?php post_class('grid-item item-s-12 no-gutter grid-row'); ?> id="post-<?php the_ID(); ?>">
    <div id="post-featured-image-holder" style="background-image: url(<?php echo get_the_post_thumbnail_url($post->ID, 'header-featured'); ?>)"></div>
    <a href="<?php the_permalink() ?>" class="grid-item no-gutter item-s-12 grid-row">
      <div class="grid-item no-gutter item-s-12 item-m-8 offset-m-4 item-l-6 offset-l-6 grid-row font-size-tiny margin-bottom-small margin-top-small">
        <div class="grid-item item-s-6 item-l-4">
          <div class="block-category u-inline-block"><span><?php echo igv_pll_cat($post->ID); ?></span></div>
        </div>
        <div class="grid-item item-s-6 item-l-8">
          <div><span><?php echo igv_post_author($post->ID); ?></span></div>
        </div>
      </div>
      <div id="post-featured-title-holder" class="grid-item item-s-12 item-m-11 offset-m-1 item-l-10 offset-l-2 item-xl-8 offset-xl-4 margin-bottom-small">
        <h2 class="font-serif font-size-extra js-fix-widows"><?php the_title(); ?></h2>
      </div>
      <div class="grid-item item-m-12 item-m-4 offset-m-8">
        <?php the_excerpt(); ?>
      </div>
    </a>
  </article>
</div>
