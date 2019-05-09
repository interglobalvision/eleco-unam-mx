  <footer id="footer">
    <div class="container">
      <div class="grid-row justify-between">
        <nav class="grid-item item-s-12 item-l-auto">
          <?php wp_nav_menu( array( 'menu' => 'footer' ) ); ?>
        </nav>
        <div class="grid-item item-s-12 item-l-auto">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/img/pleca_firma_UNAM.png" />
        </div>
      </div>
      <div class="grid-row justify-between">
        <div class="grid-item item-s-12 item-l-auto">
          Bien hecho en la CDMX por <a href="https://interglobal.vision" class="link-underline">Interglobal Vision</a>
        </div>
        <div class="grid-item item-s-12 item-l-auto">
          Todos los derechos reservados <?php echo date("Y"); ?>.
        </div>
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
