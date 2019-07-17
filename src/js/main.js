/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

// Import dependencies
import lazySizes from 'lazysizes';
import Swiper from 'swiper';
import { Marquee, loop } from 'marquee';
import MobileDetect from 'mobile-detect';
import Mailchimp from './mailchimp';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;
    this.archivePage = 1;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.handleNativeShare = this.handleNativeShare.bind(this);
    this.handleShareOption = this.handleShareOption.bind(this);
    this.toggleShareOptions = this.toggleShareOptions.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.renderItem = this.renderItem.bind(this);

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
    //this.initCarousel();
    this.bindShareLinks();
    this.fixWidows();
    this.detectMobile();
    this.initMarquee();
    this.bindLoadMore();
  }

  detectMobile() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      $('body').addClass('is-mobile');
    } else {
      $('body').addClass('not-mobile');
    }
  }

  initMarquee() {
    if (WP.notice !== false) {
      var notice = WP.notice + ' . . .';
      var $marquee = document.getElementById('notice-holder');
      var marquee = new Marquee($marquee, { rate: -100 });
      var control = loop(marquee, [() => notice]);
    }
  }

  initCarousel() {
    const $carousel = $('.wp-block-gallery')
    if ($carousel.length) {
      var autoPlay = $('body').hasClass('home') ? true : false;

      $carousel.slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: false,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        rows: 0,
        autoplay: autoPlay,
        autoplaySpeed: 4000,
      });

      $carousel.on('init', this.setSlideHeight);
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
      $('.swiper-slide .figcaption').addClass('margin-top-small');

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

  bindLoadMore() {
    this.$postHolder = $('.js-post-holder');
    this.offset = this.$postHolder.attr('data-offset');
    this.perPage = 20;
    $('#see-more').on('click', this.loadMore);
  }

  loadMore() {
    if (!$('#see-more').hasClass('loading')) {
      $('#see-more').addClass('loading');
      var url = WP.restLoadMore + 'posts?offset=' + this.offset + '&lang=es' + '?per_page=' + this.perPage;
      return $.getJSON( url, this.handleResult);
    }
  }

  handleResult(data, status, xhr) {
    $('#see-more').removeClass('loading');
    if (status === 'success') {
      if (data.length > 0) {
        console.log(data);
        this.template = wp.template( 'post-item' );
        data.forEach(this.renderItem);
        this.offset = this.offset + this.perPage;
        if (data.length < this.perPage) {
          $('#see-more').remove();
        }
      }
    }
  }

  renderItem(item, template) {
    this.$postHolder.append( this.template( item ) );
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function() {
      var string = $(this).html();
      var numWords = string.trim().split(/\s+/).length;
      if (numWords > 2) {
        string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
        $(this).html(string);
      }
    });
  }
}

new Site();
new Mailchimp();
