<?php
$options = get_site_option('_igv_site_options');
$lang = get_locale();
?>
<div id="quick-info" class="grid-row border-bottom justify-between background-grey-lite font-size-small padding-top-tiny">
<?php
if (($lang === 'en_US' && !empty($options['generalinfo_address_en'])) || !empty($options['generalinfo_address_es'])) {
?>
  <div class="grid-item item-s-12 item-m-6 item-l-auto padding-bottom-tiny">
    <h4 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Ubicación', 'Location'); ?></h4>
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
<?php
}

if (($lang === 'en_US' && !empty($options['generalinfo_hours_en'])) || !empty($options['generalinfo_hours_es'])) {
?>
  <div class="grid-item item-s-12 item-m-6 item-l-auto padding-bottom-tiny">
    <h4 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Horario', 'Hours'); ?></h4>
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
<?php
}

if (!empty($options['mailchimp_action'])) {
?>
  <div class="grid-item item-s-12 item-m-6 item-l-auto padding-bottom-tiny" id="mailchimp-form-holder">
    <h4 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Suscribir', 'Subscribe'); ?></h4>
    <?php get_template_part('partials/mailchimp-form'); ?>
  </div>
<?php
}

if (!empty($options['socialmedia_instagram']) || !empty($options['socialmedia_facebook_url']) || !empty($options['socialmedia_twitter'])) {
?>
  <div class="grid-item item-s-12 item-m-6 item-l-auto padding-bottom-tiny">
    <h4 class="font-uppercase font-size-tiny margin-bottom-half-em"><?php echo igv_pll_str('Seguir', 'Follow'); ?></h4>
    <ul class="u-inline-list" id="social-list">
      <?php
        echo !empty($options['socialmedia_instagram']) ? '<li><a class="link-underline" href="https://instagram.com/' . $options['socialmedia_instagram'] . '">IG</a></li>' : '';
        echo !empty($options['socialmedia_facebook_url']) ? '<li><a class="link-underline" href="' . $options['socialmedia_facebook_url'] . '">FB</a></li>' : '';
        echo !empty($options['socialmedia_twitter']) ? '<li><a class="link-underline" href="https://twitter.com/' . $options['socialmedia_twitter'] . '">TW</a></li>' : '';
      ?>
    </ul>
  </div>
<?php
}
?>
</div>
