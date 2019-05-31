/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import lazySizes from 'lazysizes';
import Swiper from 'swiper';
import MobileDetect from 'mobile-detect';
import Mailchimp from './mailchimp';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.handleNativeShare = this.handleNativeShare.bind(this);
    this.handleShareOption = this.handleShareOption.bind(this);
    this.toggleShareOptions = this.toggleShareOptions.bind(this);

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
    this.fixWidows();
    this.detectMobile();
  }

  detectMobile() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      $('body').addClass('is-mobile');
    } else {
      $('body').addClass('not-mobile');
    }
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
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loopedSlides: 5,
        slideToClickedSlide: true
      });
    }
  }

  bindShareLinks() {
    $('.js-share-trigger').on('hover', function(){
      $(this).toggleClass('active');
    });

    if (navigator.share !== 'undefined' && navigator.share instanceof Function) {
      $('.js-trigger-share').on('click', this.handleNativeShare);
    } else {
      $('.js-trigger-share').hover(this.toggleShareOptions);
    }

    $('.js-social-share').on('click', this.handleShareOption);
  }

  handleShareMouseenter() {
    $('.js-trigger-share').off('click');
    this.toggleDesktopShare();
  }

  handleNativeShare(e) {
    e.preventDefault();

    var url = window.location.href;
    var title = document.title;

    navigator.share({ title: title, url: url })
      .then(function() { console.log("Share success!"); })
      .catch(this.showDesktopShare);
  }

  toggleShareOptions() {
    $('.share-holder').toggleClass('show');
  }

  handleShareOption(e) {
    e.preventDefault();

    if ($(e.target).hasClass('js-copy-permalink')) {
      var url = $(e.target).attr('data-permalink');
      this.copyToClipboard(url);
    } else {
      this.openSharePopup(e.target);
    }

    return false;
  }

  copyToClipboard(str) {
    var textarea = document.createElement('textarea');
    textarea.value = str;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  openSharePopup(target) {
    var left = this.windowWidth / 2 - 300,
      top = this.windowHeight / 2 - 175,
      width = 600,
      height = 350,
      loc = $(target).attr('data-permalink'),
      title = encodeURIComponent($(target).attr('data-title')),
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
new Mailchimp();
