<div class="grid-row share-holder js-trigger-share justify-center">
  <div class="share-indicator">
    <a href="#"><?php echo $lang === 'en_US' ? 'Share' : 'Compartir'; ?></a>
  </div>
  <ul class="share-options justify-center">
    <li class="grid-item">
      <a class="js-social-share" href="#" data-social="facebook" data-permalink="<?php the_permalink(); ?>" data-title="<?php the_title(); ?>">Facebook</a>
    </li>
    <li class="grid-item">
      <a class="js-social-share" href="#" data-social="twitter" data-permalink="<?php the_permalink(); ?>" data-title="<?php the_title(); ?>">Twitter</a>
    </li>
    <li class="grid-item">
      <a class="js-social-share js-copy-permalink" href="#" data-permalink="<?php the_permalink(); ?>"><?php echo $lang === 'en_US' ? 'Copy' : 'Copiar'; ?></a>
    </li>
  </ul>
</div>
