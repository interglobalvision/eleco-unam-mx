<div class="grid-row share-holder js-trigger-share justify-center font-size-mid padding-top-tiny padding-bottom-tiny">
  <div class="share-indicator">
    <a href="#" class="link-underline"><?php echo $lang === 'en_US' ? 'Share' : 'Compartir'; ?></a>
  </div>
  <ul class="share-options justify-center">
    <li class="grid-item">
      <a class="js-social-share link-underline" href="#" data-social="facebook" data-permalink="<?php the_permalink(); ?>" data-title="<?php the_title(); ?>">Facebook</a>
    </li>
    <li class="grid-item">
      <a class="js-social-share link-underline" href="#" data-social="twitter" data-permalink="<?php the_permalink(); ?>" data-title="<?php the_title(); ?>">Twitter</a>
    </li>
    <li class="grid-item">
      <a class="copy-trigger js-social-share js-copy-permalink link-underline" href="#" data-permalink="<?php the_permalink(); ?>"><?php echo $lang === 'en_US' ? 'Copy' : 'Copiar'; ?></a>
    </li>
  </ul>
</div>
