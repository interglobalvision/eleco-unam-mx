<div class="grid-item item-s-12 item-m-8 item-l-6 background-yellow grid-column justify-center padding-top-mid padding-bottom-mid" id="home-highlight">
  <article <?php post_class('text-align-center post-highlight grid-column'); ?> id="post-<?php the_ID(); ?>">
    <a href="<?php the_permalink() ?>">
      <div class="grid-row justify-around font-size-tiny margin-bottom-micro">
        <div class="block-category"><span><?php echo igv_pll_cat($post->ID); ?></span></div>
        <div><span><?php echo igv_post_author($post->ID); ?></span></div>
      </div>
      <h2 class="font-serif font-size-big margin-bottom-mid js-fix-widows"><?php the_title(); ?></h2>
      <?php the_post_thumbnail('header-featured'); ?>
      <div class="grid-row font-size-small justify-center margin-top-basic">
        <div class="grid-item no-gutter item-s-12 item-m-11 item-l-10">
          <?php the_excerpt(); ?>
        </div>
      </div>
    </a>
  </article>
</div>
