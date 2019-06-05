<?php
$options = get_site_option('_igv_site_options');
$lang = get_locale();
$notice = false;

if ($lang === 'es_MX' && !empty($options['notice_es'])) {
  $notice = $options['notice_es'];
} else if ($lang === 'en_US' && !empty($options['notice_en'])) {
  $notice = $options['notice_en'];
}

if ($notice) {
?>
<div id="notice-holder" class="marquee font-italic background-blue border-bottom padding-bottom-tiny padding-top-tiny">
</div>
<?php
}
?>
