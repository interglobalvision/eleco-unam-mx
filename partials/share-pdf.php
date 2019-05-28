<?php
$pdf_es = get_post_meta($post->ID, '_igv_post_pdf_es', true);
$pdf_en = get_post_meta($post->ID, '_igv_post_pdf_en', true);
$has_pdf = false;
?>
<div class="grid-item item-s-12 no-gutter grid-row text-align-center flex-nowrap border-bottom">
  <?php
    if ($lang === 'en_US' && !empty($pdf_en)) {
      $has_pdf = true;
  ?>
  <div class="grid-item item-s-12 item-l-6 border-right font-size-mid padding-top-tiny padding-bottom-tiny">
    <a class="link-underline" href="<?php echo $pdf_en; ?>">Download PDF</a>
  </div>
  <?php
    } elseif (!empty($pdf_es)) {
      $has_pdf = true;
  ?>
  <div class="grid-item item-s-12 item-l-6 border-right font-size-mid padding-top-tiny padding-bottom-tiny">
    <a class="link-underline" href="<?php echo $pdf_es; ?>">Descargar PDF</a>
  </div>
  <?php
    }
  ?>
  <div class="grid-item item-s-12 <?php echo $has_pdf ? 'item-l-6' : ''; ?> ">
    <?php get_template_part('partials/share'); ?>
  </div>
</div>
