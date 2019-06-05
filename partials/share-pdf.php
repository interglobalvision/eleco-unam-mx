<?php
$tags = get_the_tags();
$pdf = get_post_meta($post->ID, '_igv_post_pdf', true);
?>
<div class="grid-item item-s-12 no-gutter grid-row text-align-center flex-nowrap <?php echo empty($tags) ? 'border-bottom' : ''; ?>">
  <?php
    if (!empty($pdf)) {
  ?>
  <div class="grid-item item-s-12 item-l-6 border-right font-size-mid padding-top-tiny padding-bottom-tiny">
    <a class="link-underline" href="<?php echo $pdf; ?>"><?php igv_pll_str('Descargar PDF', 'Download PDF'); ?></a>
  </div>
  <?php
    }
  ?>
  <div class="grid-item item-s-12 <?php echo !empty($pdf) ? 'item-l-6' : ''; ?> ">
    <?php get_template_part('partials/share'); ?>
  </div>
</div>
