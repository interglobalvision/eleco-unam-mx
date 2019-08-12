<?php
get_header();
$options = get_site_option('_igv_site_options');
$lang = get_locale();
?>

<main id="main-content">
  <section id="page-visit">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $admission = get_post_meta($post->ID, '_igv_visit_admission', true);
    $transport = get_post_meta($post->ID, '_igv_visit_transport', true);
    $guided = get_post_meta($post->ID, '_igv_visit_guided', true);
?>
    <article <?php post_class(); ?> id="post-<?php the_ID(); ?>" class="font-size-mid">
      <header class="background-grey-lite padding-top-mid padding-bottom-mid border-bottom">
        <?php get_template_part('partials/headers/header-visit.svg'); ?>
        <h1 class="font-serif font-size-extra text-align-center"><?php the_title(); ?></h1>
      </header>
      <div class="background-grey-lite border-bottom grid-row padding-top-basic">
        <div class="grid-item item-s-12 item-m-6 padding-bottom-basic">
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Ubicación', 'Location'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php
              if ($lang === 'en_US' && !empty($options['generalinfo_address_en'])) {
                echo apply_filters('the_content', $options['generalinfo_address_en']);
              } elseif (!empty($options['generalinfo_address_es'])) {
                echo apply_filters('the_content', $options['generalinfo_address_es']);
              }
            ?>
          </div>
        </div>
        <div class="grid-item item-s-12 item-m-6 padding-bottom-basic">
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Horario', 'Hours'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php
              if ($lang === 'en_US' && !empty($options['generalinfo_hours_en'])) {
                echo apply_filters('the_content', $options['generalinfo_hours_en']);
              } elseif (!empty($options['generalinfo_hours_es'])) {
                echo apply_filters('the_content', $options['generalinfo_hours_es']);
              }
            ?>
          </div>
        </div>
      </div>
      <div class="background-grey-lite grid-row padding-top-mid">
        <div class="grid-item item-s-12 <?php echo !empty($options['generalinfo_exterior_photo']) ? 'item-m-6' : ''; ?> padding-bottom-mid" id="map-holder">
          <?php
            echo !empty($options['generalinfo_map_embed']) ? $options['generalinfo_map_embed'] : '';
          ?>
        </div>
        <?php if (!empty($options['generalinfo_exterior_photo'])) { ?>
        <div class="grid-item item-s-12 item-m-6 padding-bottom-mid font-size-zero">
          <?php
            echo !empty($options['generalinfo_exterior_photo']) ? wp_get_attachment_image($options['generalinfo_exterior_photo_id'], 'full') : '';
          ?>
        </div>
        <?php } ?>
      </div>
      <div class="border-bottom grid-row padding-top-basic">
        <div class="grid-item item-s-12 item-m-6 item-l-3 padding-bottom-basic">
          <?php if (!empty($admission)) { ?>
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Admisión', 'Admission'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php echo apply_filters('the_content', $admission); ?>
          </div>
          <?php } ?>
        </div>
        <div class="grid-item item-s-12 item-m-6 item-l-3 padding-bottom-basic">
          <?php if (!empty($transport)) { ?>
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('¿Cómo llegar?', 'Getting here'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php echo apply_filters('the_content', $transport); ?>
          </div>
          <?php } ?>
        </div>
        <div class="grid-item item-s-12 item-m-6 item-l-3 padding-bottom-basic">
          <?php if (!empty($options['generalinfo_contact'])) { ?>
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Contacto', 'Contact'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php echo apply_filters('the_content', $options['generalinfo_contact']); ?>
          </div>
          <?php } ?>
        </div>
        <div class="grid-item item-s-12 item-m-6 item-l-3 padding-bottom-basic">
          <?php if (!empty($guided)) { ?>
          <h2 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Visitas guiadas', 'Guided visits'); ?></h4>
          <div class="p-no-margin-bottom">
            <?php echo apply_filters('the_content', $guided); ?>
          </div>
          <?php } ?>
        </div>
      </div>
    </article>
<?php
  }
}
?>
  </section>
</main>

<?php
get_footer();
?>
