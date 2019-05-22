<div class="grid-item item-s-12 item-m-8 item-l-6 background-yellow grid-column justify-center" id="home-highlight">
  <article <?php post_class('text-align-center post-highlight grid-column'); ?> id="post-<?php the_ID(); ?>">
    <a href="<?php the_permalink() ?>">
      <div class="grid-row justify-around font-size-tiny">
        <div class="block-category"><span>Category</span></div>
        <div><span>Author</span></div>
      </div>
      <h2 class="font-serif font-size-big"><?php the_title(); ?></h2>
      <?php the_post_thumbnail(); ?>
      <div class="grid-row font-size-small justify-center">
        <div class="grid-item no-gutter item-s-12 item-m-11 item-l-10">
          <?php the_excerpt(); ?>
        </div>
      </div>
    </a>
  </article>
</div>
