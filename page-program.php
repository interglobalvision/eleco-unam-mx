<?php
get_header();
?>

<main id="main-content" data-archive="<?php echo get_post_type_archive_link('evento'); ?>">
  <section id="archive-evento">
    <div class="grid-row">
      <header class="grid-item item-s-12 background-grey-lite border-bottom padding-top-mid padding-bottom-mid">
        <?php get_template_part('partials/headers/header-program.svg'); ?>
        <h1 class="font-serif font-size-extra text-align-center"><?php echo igv_pll_str('Programa', 'Program'); ?></h1>
      </header>
      <?php
        get_template_part('partials/evento-archive-future');
      ?>
    </div>
    <?php get_template_part('partials/evento-archive-past'); ?>
  </section>
</main>

<?php
get_footer();
?>
