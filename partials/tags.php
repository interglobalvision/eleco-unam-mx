<?php
$tags = get_the_tags();
if (!empty($tags)) {
?>
<div class="grid-row justify-center background-yellow padding-top-small padding-bottom-small font-size-mid">
<?php
  foreach ( $tags as $tag ) {
?>
  <div class="grid-item">
    <div class="post-tag">
      <a href="<?php echo get_tag_link($tag->term_id); ?>"><?php echo $tag->name; ?></a>
    </div>
  </div>
<?php
  }
?>
</div>
<?php
}
?>
