<?php
get_header();
?>

<main id="main-content">
  <section id="archive-evento" class="border-bottom">
    <div class="grid-row">
      <div class="grid-item item-s-12 background-grey-lite border-bottom">
        <h1 class="font-serif font-size-extra text-align-center"><?php echo igv_pll_str('Programa', 'Program'); ?></h1>
      </div>
<?php
get_template_part('partials/evento-archive-future');

get_template_part('partials/evento-archive-past');
?>
    </div>
  </section>
</main>

<?php
get_footer();
?>