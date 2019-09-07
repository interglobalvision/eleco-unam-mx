<?php
$years = get_terms( array(
    'taxonomy' => 'expo_year',
    'hide_empty' => false,
) );
if (!empty($years)) {
?>
    <div class="grid-row justify-center background-yellow padding-top-small font-size-mid">
<?php
  foreach ( $years as $year ) {
?>
      <div class="grid-item margin-bottom-small">
        <div class="post-tag">
          <a href="<?php echo get_tag_link($year->term_id); ?>"><?php echo $year->name; ?></a>
        </div>
      </div>
<?php
  }
?>
    </div>
<?php
}
?>
