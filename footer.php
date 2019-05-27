  <footer id="footer" class="grid-column flex-grow padding-top-large font-size-small">
    <div class="grid-row justify-between align-items-end">
      <nav class="grid-item item-s-12 item-l-auto padding-bottom-tiny">
        <?php wp_nav_menu( array( 'theme_location' => 'footer' ) ); ?>
      </nav>
      <div class="grid-item item-s-12 item-l-auto padding-bottom-tiny">
        <img id="unam-logo" src="<?php bloginfo('stylesheet_directory'); ?>/dist/img/pleca_firma_UNAM.jpg" />
      </div>
    </div>
    <div class="grid-row justify-between background-grey-lite flex-grow font-size-micro padding-top-micro padding-bottom-micro">
      <div class="grid-item item-s-12 item-l-auto">
        Bien hecho en la CDMX por <a href="https://interglobal.vision" class="link-underline">Interglobal Vision</a>
      </div>
      <div class="grid-item item-s-12 item-l-auto">
        Todos los derechos reservados <?php echo date("Y"); ?>.
      </div>
    </div>
  </footer>

</section>

<?php
get_template_part('partials/scripts');
get_template_part('partials/schema-org');
?>

</body>
</html>
