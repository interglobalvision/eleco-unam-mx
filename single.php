<?php
get_header();
$lang = get_locale();
?>

<main id="main-content">
  <section id="post">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    $pdf_es = get_post_meta($post->ID, '_igv_post_pdf_es', true);
    $pdf_en = get_post_meta($post->ID, '_igv_post_pdf_en', true);
?>
    <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>" style="order: <?php echo $current - 2; ?>">
      <div class="grid-item item-s-12 background-grey-lite border-bottom">
        <h1 class="font-serif font-size-extra"><?php the_title(); ?></h1>
        <?php the_post_thumbnail(); ?>
      </div>
      <div class="grid-item item-s-12 justify-between font-size-tiny background-grey-lite border-bottom">
        <div><span>Category</span></div>
        <div><span>Author</span></div>
      </div>
      <div id="article-content" class="grid-item item-s-12 border-bottom no-gutter grid-row">
        <?php the_content(); ?>
      </div>
      <div class="grid-item item-s-12 no-gutter grid-row text-align-center flex-nowrap border-bottom">
        <?php
          if ($lang === 'en_US' && !empty($pdf_en)) {
        ?>
        <div class="grid-item flex-grow border-right">
          <a class="link-underline" href="<?php echo $pdf_en; ?>">Download PDF</a>
        </div>
        <?php
          } elseif (!empty($pdf_es)) {
        ?>
        <div class="grid-item flex-grow border-right">
          <a class="link-underline" href="<?php echo $pdf_en; ?>">Descargar PDF</a>
        </div>
        <?php
          }
        ?>
        <div class="grid-item flex-grow">
          <div><?php echo $lang === 'en_US' ? 'Share' : 'Compartir'; ?></div>
          <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">Facebook</a></li>
            <li>
              <a href="<?php
                $options = get_site_option('_igv_site_options');
                $handle = !empty($options['socialmedia_twitter']) ? $options['socialmedia_twitter'] : 'El+Elco';
                echo 'https://twitter.com/share?url=' . get_the_permalink() . '&text=';
                echo $lang = 'en_US' ? 'Me%20gust%C3%B3%20este%20art%C3%ADculo%20de%20' : 'I%20liked%20this%20article%20from%20';
                echo $handle;
              ?>">Twitter</a>
            </li>
          </ul>
        </div>
    </article>
<?php
  }
}
?>
    </div>
  </section>
</main>

<?php
get_footer();
?>
