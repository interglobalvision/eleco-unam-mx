<div class="grid-item item-s-12 item-m-6 item-l-8 item-xl-6 item-xxl-6 background-yellow grid-column justify-center padding-top-mid padding-bottom-mid" id="home-highlight">
  <article <?php post_class('text-align-center post-highlight grid-column'); ?> id="post-<?php the_ID(); ?>">
    <a href="<?php the_permalink() ?>">
      <div class="font-size-tiny margin-bottom-micro">
        <span class="block-category"><?php echo igv_pll_cat($post->ID); ?></span>
        <span class="post-item-authors"><?php echo igv_post_author($post->ID); ?></span>
      </div>
      <h2 class="font-serif font-size-big margin-bottom-mid js-fix-widows not-mobile"><?php the_title(); ?></h2>
      <div><?php the_post_thumbnail('header-featured'); ?></div>
      <h2 class="font-serif margin-top-micro font-size-item-title mobile-only"><?php the_title(); ?></h2>
      <div class="grid-row font-size-small justify-center margin-top-basic">
        <div class="grid-item no-gutter item-s-12 item-m-11 item-l-10">
          <?php the_excerpt(); ?>
        </div>
      </div>
    </a>
  </article>
</div>
