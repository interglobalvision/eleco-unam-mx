<?php
$pdf_es = get_post_meta($post->ID, '_igv_post_pdf_es', true);
$pdf_en = get_post_meta($post->ID, '_igv_post_pdf_en', true);
?>
<div class="grid-item item-s-12 no-gutter grid-row text-align-center flex-nowrap border-bottom">
  <?php
    if ($lang === 'en_US' && !empty($pdf_en)) {
  ?>
  <div class="grid-item flex-grow border-right font-size-mid padding-top-tiny padding-bottom-tiny">
    <a class="link-underline" href="<?php echo $pdf_en; ?>">Download PDF</a>
  </div>
  <?php
    } elseif (!empty($pdf_es)) {
  ?>
  <div class="grid-item flex-grow border-right font-size-mid padding-top-tiny padding-bottom-tiny">
    <a class="link-underline" href="<?php echo $pdf_es; ?>">Descargar PDF</a>
  </div>
  <?php
    }
  ?>
  <div class="grid-item flex-grow">
    <?php get_template_part('partials/share'); ?>
  </div>
</div>
