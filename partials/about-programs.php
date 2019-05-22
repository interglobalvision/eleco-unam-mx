<?php
global $about_program_sections;
$program_sections = $about_program_sections;

$is_empty = true;

foreach ($program_sections as $k => $v) {
  $content = get_post_meta($post->ID, '_igv_about_' . $v['id'], true);
  if (!empty($content)) {
    $program_sections[$k]['content'] = $content;
    $is_empty = false;

    $url = get_post_meta($post->ID, '_igv_about_' . $v['id'] . '_url', true);
    $image = get_post_meta($post->ID, '_igv_about_' . $v['id'] . '_image_id', true);

    if (!empty($url)) {
      $program_sections[$k]['url'] = $url;
    }

    if (!empty($image)) {
      $program_sections[$k]['image'] = $image;
    }
  }
}

if (!$is_empty) {
?>
<div class="grid-item item-s-12 border-bottom no-gutter grid-row justify-around" id="eleco-program">
  <div class="grid-item item-s-12">
    <h2 class="font-serif font-size-big text-align-center"><?php echo $lang === 'en_US' ? 'Program Descriptions' : 'Descripción de Programas'; ?></h2>
  </div>
  <?php
  foreach ($program_sections as $section) {
    if (!empty($section['content'])) {
  ?>
  <div class="grid-item item-s-12 item-m-6 offset-m-3 item-l-4 offset-l-0">
    <h3 class="text-align-center font-serif">
      <?php
        echo !empty($section['url']) ? '<a href="' . $section['url'] . '">' : '';
        echo $lang === 'en_US' ? $section['en'] : $section['es'];
        echo !empty($section['url']) ? '</a>' : '';
      ?>
    </h3>
    <?php echo apply_filters('the_content', $section['content']); ?>
    <?php
      if (!empty($section['image'])) {
    ?>
    <div><?php echo wp_get_attachment_image($section['image']); ?></div>
    <?php
      }
    ?>
  </div>
  <?php
    }
  }
  ?>
</div>
<?php
}
?>
