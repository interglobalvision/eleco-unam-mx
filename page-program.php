<?php
get_header();
?>

<main id="main-content">
  <section id="archive-evento" class="border-bottom">
    <div class="grid-row">
      <header class="grid-item item-s-12 background-grey-lite border-bottom padding-top-mid padding-bottom-mid">
        <h1 class="font-serif font-size-extra text-align-center"><?php echo igv_pll_str('Programa', 'Program'); ?></h1>
      </header>
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
