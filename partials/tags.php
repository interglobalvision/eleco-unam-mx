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
      <span><?php echo $tag->name; ?></span>
    </div>
  </div>
<?php
  }
?>
</div>
<?php
}
?>
