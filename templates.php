<script type="text/template" id="tmpl-post-item">
  <article <?php post_class('grid-item item-s-12 item-m-6 item-l-4 item-xl-3 item-xxl-3 text-align-center padding-top-mid'); ?> id="post-{{data.id}}">
    <a href="{{data.link}}">
      <div class="detail-thumb-holder grid-column">
        <div class="font-size-tiny margin-bottom-micro">
          <span class="block-category">{{{data.cat_name}}}</span>
          <span class="post-item-authors">{{{data.post_author}}}</span>
        </div>
        <div class="flex-grow post-item-thumb" style="background-image: url('{{{data.post_thumb_url}}}')"></div>
      </div>
      <h2 class="font-serif margin-top-micro font-size-item-title">{{{data.title.rendered}}}</h2>
      <div class="font-size-tiny margin-top-micro">{{{data.excerpt.rendered}}}</div>
    </a>
  </article>
</script>
<script type="text/template" id="tmpl-evento-item">
  <article <?php post_class('grid-item item-s-12 no-gutter border-bottom'); ?> id="post-{{data.id}}">
    <a href="{{data.link}}" class="grid-row padding-top-small padding-bottom-small">
      <div class="grid-item item-s-12 item-m-9 item-l-10 no-gutter grid-column justify-center">
        <div class="grid-item no-gutter grid-row font-size-tiny margin-bottom-tiny">
          <div class="grid-item"><span class="block-category">{{{data.cat_name}}}</span></div>
          <div><span>{{data.evento_datetime}}</span></div>
        </div>
        <div class="grid-item font-serif font-size-mid"><h3>{{{data.title.rendered}}}</h3></div>
      </div>
      <div class="grid-item item-s-12 item-m-3 item-l-2 font-size-zero archive-event-past-image-holder">
        {{{data.evento_thumb}}}
      </div>
    </a>
  </article>
</script>
