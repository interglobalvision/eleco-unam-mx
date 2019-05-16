/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import lazySizes from 'lazysizes';
import Swiper from 'swiper';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.handleDesktopShare = this.handleDesktopShare.bind(this);

    this.windowWidth = $(window).width();
    this.windowHeight = $(window).height();
  }

  onResize() {
    this.windowWidth = $(window).width();
    this.windowHeight = $(window).height();
  }

  onReady() {
    lazySizes.init();
    this.initSwiper();
    this.bindShareLinks();
  }

  initSwiper() {
    if ($('.wp-block-gallery').length) {
      $('.wp-block-gallery')
        .addClass('swiper-wrapper')
        .removeClass('wp-block-gallery')
        .wrap('<div class="swiper-container"></div>');
      $('.blocks-gallery-item')
        .addClass('swiper-slide')
        .removeClass('blocks-gallery-item');

      var mySwiper = new Swiper ('.swiper-container', {
        loop: true
      });
    }
  }

  bindShareLinks() {
    $('.js-share-trigger').on('hover', function(){
      $(this).toggleClass('active');
    });

    $('.js-trigger-share').on('click', this.handleShare);
    $('.js-social-share').on('click', this.handleDesktopShare);
  }

  handleShare(e) {
    e.preventDefault();
    console.log(navigator);

    if (navigator.share !== 'undefined') {
      var url = window.location.href;
      var title = document.title;

      navigator.share({ title: title, url: url })
        .then(function() { console.log("Share success!"); })
        .catch(this.showDesktopShare);
    } else {
      this.showDesktopShare();
    }
  }

  showDesktopShare() {
    //show
  }

  handleDesktopShare(target) {
    e.preventDefault();
    
    if ($(e.target).hasClass('.js-copy-permalink')) {
      this.copyPermalink(e.target);
    } else {
      this.openSharePopup(e.target);
    }
  }

  copyPermalink(target) {

  }

  openSharePopup(target) {
    var left = this.windowWidth / 2 - 300,
      top = this.windowHeight / 2 - 175,
      width = 600,
      height = 350,
      loc = window.location.href,
      title = document.title,
      url;
    if ($(target).attr('data-social') === 'facebook') {
      url = 'https://facebook.com/sharer/sharer.php?u=' + loc;
    } else if ($(target).attr('data-social') === 'twitter') {
      url = 'https://twitter.com/intent/tweet?url=' + loc + '&text=' + title;
    } else {
      return;
    }

    window.open(url, 'share-dialog', 'height=' + height +',width=' + width +',left=' + left +',top=' + top);
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }
}

new Site();
