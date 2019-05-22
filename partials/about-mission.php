<?php
global $about_mission_sections;
$mission_sections = $about_mission_sections;

$is_empty = true;

foreach ($mission_sections as $k => $v) {
  $content = get_post_meta($post->ID, '_igv_about_' . $v['id'], true);
  if (!empty($content)) {
    $mission_sections[$k]['content'] = $content;
    $is_empty = false;
  }
}

if (!$is_empty) {
?>
<div class="grid-item item-s-12 border-bottom no-gutter grid-row justify-around" id="eleco-mission">
  <?php
  foreach ($mission_sections as $section) {
    if (!empty($section['content'])) {
  ?>
  <div class="grid-item item-s-12 item-m-6 offset-m-3 item-l-4 offset-l-0">
    <h3 class="text-align-center font-serif"><?php echo $lang === 'en_US' ? $section['en'] : $section['es']; ?></h3>
    <?php echo apply_filters('the_content', $section['content']); ?>
  </div>
  <?php
    }
  }
  ?>
</div>
<?php
}
?>
