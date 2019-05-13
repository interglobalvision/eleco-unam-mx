<?php
$options = get_site_option('_igv_site_options');
$lang = get_locale();
?>
<div id="quick-info" class="grid-row border-bottom justify-between background-grey-lite font-size-small">
  <div class="grid-item item-s-12 item-m-6 item-l-auto">
    <h4 class="font-uppercase font-size-tiny"><?php echo $lang === 'en_US' ? 'Address' : 'Dirección'; ?></h4>
    <div>
      <?php
        if ($lang === 'en_US' && !empty($options['generalinfo_address_en'])) {
          echo apply_filters('the_content', $options['generalinfo_address_en']);
        } elseif (!empty($options['generalinfo_address_es'])) {
          echo apply_filters('the_content', $options['generalinfo_address_es']);
        }
      ?>
    </div>
  </div>
  <div class="grid-item item-s-12 item-m-6 item-l-auto">
    <h4 class="font-uppercase font-size-tiny"><?php echo $lang === 'en_US' ? 'Hours' : 'Horario'; ?></h4>
    <div>
      <?php
        if ($lang === 'en_US' && !empty($options['generalinfo_hours_en'])) {
          echo apply_filters('the_content', $options['generalinfo_hours_en']);
        } elseif (!empty($options['generalinfo_hours_es'])) {
          echo apply_filters('the_content', $options['generalinfo_hours_es']);
        }
      ?>
    </div>
  </div>
  <div class="grid-item item-s-12 item-m-6 item-l-auto">
    <h4 class="font-uppercase font-size-tiny"><?php echo $lang === 'en_US' ? 'Subscribe' : 'Suscribir'; ?></h4>
    <form>
    </form>
  </div>
  <div class="grid-item item-s-12 item-m-6 item-l-auto">
    <h4 class="font-uppercase font-size-tiny"><?php echo $lang === 'en_US' ? 'Follow' : 'Seguir'; ?></h4>
    <ul class="u-inline-list">
      <?php
        echo !empty($options['socialmedia_instagram']) ? '<li><a href="https://instagram.com/' . $options['socialmedia_instagram'] . '">IG</a></li>' : '';
        echo !empty($options['socialmedia_facebook_url']) ? '<li><a href="' . $options['socialmedia_facebook_url'] . '">FB</a></li>' : '';
        echo !empty($options['socialmedia_twitter']) ? '<li><a href="https://twitter.com/' . $options['socialmedia_twitter'] . '">TW</a></li>' : '';
      ?>
    </ul>
  </div>
</div>
