<script type="text/html" id="tmpl-post-item">
  <article <?php post_class('grid-item item-s-12 item-m-4 item-l-3 text-align-center padding-top-mid'); ?> id="post-{{data.id}}">
    <a href="{{data.link}}">
      <div class="font-size-tiny margin-bottom-micro">
        <span class="block-category">{{{data.cat_name}}}</span>
        <span class="post-item-authors">{{{data.post_author}}}</span>
      </div>
      {{{data.post_thumb}}}
      <h2 class="font-serif margin-top-micro font-size-item-title">{{{data.title.rendered}}}</h2>
      <div class="font-size-tiny margin-top-micro">{{{data.excerpt.rendered}}}</div>
    </a>
  </article>
</script>
