/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: { hash: '' }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line

exports.window = win;
exports.document = doc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

// Import dependencies


// Import style


var _lazysizes = __webpack_require__(2);

var _lazysizes2 = _interopRequireDefault(_lazysizes);

var _swiper = __webpack_require__(4);

var _swiper2 = _interopRequireDefault(_swiper);

var _marquee = __webpack_require__(6);

var _mobileDetect = __webpack_require__(7);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _mailchimp = __webpack_require__(9);

var _mailchimp2 = _interopRequireDefault(_mailchimp);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Site = function () {
  function Site() {
    _classCallCheck(this, Site);

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

  _createClass(Site, [{
    key: 'onResize',
    value: function onResize() {
      this.windowWidth = $(window).width();
      this.windowHeight = $(window).height();
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      _lazysizes2.default.init();
      this.initSwiper();
      //this.initCarousel();
      this.bindShareLinks();
      this.fixWidows();
      this.detectMobile();
      this.initMarquee();
      this.bindLoadMore();
    }
  }, {
    key: 'detectMobile',
    value: function detectMobile() {
      var md = new _mobileDetect2.default(window.navigator.userAgent);
      if (md.mobile()) {
        $('body').addClass('is-mobile');
      } else {
        $('body').addClass('not-mobile');
      }
    }
  }, {
    key: 'initMarquee',
    value: function initMarquee() {
      var $marquee = document.getElementById('notice-holder');
      if (WP.notice !== false && WP.notice !== '' && $marquee) {
        var notice = WP.notice + ' . . .';
        var marquee = new _marquee.Marquee($marquee, { rate: -100 });
        var control = (0, _marquee.loop)(marquee, [function () {
          return notice;
        }]);
      }
    }
  }, {
    key: 'initCarousel',
    value: function initCarousel() {
      var $carousel = $('.wp-block-gallery');
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
          autoplaySpeed: 4000
        });

        $carousel.on('init', this.setSlideHeight);
      }
    }
  }, {
    key: 'initSwiper',
    value: function initSwiper() {
      if ($('.wp-block-gallery').length) {
        $('.wp-block-gallery').addClass('swiper-wrapper').removeClass('wp-block-gallery').wrap('<div class="swiper-container"></div>');
        $('.blocks-gallery-item').addClass('swiper-slide').removeClass('blocks-gallery-item');
        $('.swiper-slide .figcaption').addClass('margin-top-small');

        var mySwiper = new _swiper2.default('.swiper-container', {
          loop: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loopedSlides: 5,
          slideToClickedSlide: true
        });
      }
    }
  }, {
    key: 'bindShareLinks',
    value: function bindShareLinks() {
      $('.js-share-trigger').on('hover', function () {
        $(this).toggleClass('active');
      });

      if (navigator.share !== 'undefined' && navigator.share instanceof Function) {
        $('.js-trigger-share').on('click', this.handleNativeShare);
      } else {
        $('.js-trigger-share').hover(this.toggleShareOptions);
      }

      $('.js-social-share').on('click', this.handleShareOption);
    }
  }, {
    key: 'handleShareMouseenter',
    value: function handleShareMouseenter() {
      $('.js-trigger-share').off('click');
      this.toggleDesktopShare();
    }
  }, {
    key: 'handleNativeShare',
    value: function handleNativeShare(e) {
      e.preventDefault();

      var url = window.location.href;
      var title = document.title;

      navigator.share({ title: title, url: url }).then(function () {
        console.log("Share success!");
      }).catch(this.showDesktopShare);
    }
  }, {
    key: 'toggleShareOptions',
    value: function toggleShareOptions() {
      $('.share-holder').toggleClass('show');
    }
  }, {
    key: 'handleShareOption',
    value: function handleShareOption(e) {
      e.preventDefault();

      if ($(e.target).hasClass('js-copy-permalink')) {
        var url = $(e.target).attr('data-permalink');
        this.copyToClipboard(url);
      } else {
        this.openSharePopup(e.target);
      }

      return false;
    }
  }, {
    key: 'copyToClipboard',
    value: function copyToClipboard(str) {
      var textarea = document.createElement('textarea');
      textarea.value = str;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }, {
    key: 'openSharePopup',
    value: function openSharePopup(target) {
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

      window.open(url, 'share-dialog', 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top);
    }
  }, {
    key: 'bindLoadMore',
    value: function bindLoadMore() {
      this.$postHolder = $('.js-post-holder');
      this.offset = this.$postHolder.attr('data-offset');
      this.perPage = 20;
      $('#see-more').on('click', this.loadMore);
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      if (!$('#see-more').hasClass('loading')) {
        $('#see-more').addClass('loading');
        var postType = this.$postHolder.attr('data-type') ? this.$postHolder.attr('data-type') : 'posts';
        var url = WP.restLoadMore + postType + '?offset=' + this.offset + '&lang=es' + '?per_page=' + this.perPage;
        return $.getJSON(url, this.handleResult);
      }
    }
  }, {
    key: 'handleResult',
    value: function handleResult(data, status, xhr) {
      $('#see-more').removeClass('loading');
      if (status === 'success') {
        if (data.length > 0) {
          console.log(data);
          var templateId = this.$postHolder.attr('data-template') ? this.$postHolder.attr('data-template') : 'post-item';
          this.template = wp.template(templateId);
          data.forEach(this.renderItem);
          this.offset = this.offset + this.perPage;
          if (data.length < this.perPage) {
            $('#see-more').remove();
          }
        }
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item, template) {
      this.$postHolder.append(this.template(item));
    }
  }, {
    key: 'fixWidows',
    value: function fixWidows() {
      // utility class mainly for use on headines to avoid widows [single words on a new line]
      $('.js-fix-widows').each(function () {
        var string = $(this).html();
        var numWords = string.trim().split(/\s+/).length;
        if (numWords > 2) {
          string = string.replace(/ ([^ ]*)$/, '&nbsp;$1');
          $(this).html(string);
        }
      });
    }
  }]);

  return Site;
}();

new Site();
new _mailchimp2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('Event');

		if (!detail) {
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			if (full && full.src && !el[_getAttribute]('srcset')) {
				el.setAttribute('srcset', full.src);
			}
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function run() {
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while (runFns.length) {
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function rafBatch(fn, queue) {
			if (running && !queue) {
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });

			if (rICTimeout !== lazySizesConfig.ricTimeout) {
				rICTimeout = lazySizesConfig.ricTimeout;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;

			if (isPriority = isPriority === true) {
				rICTimeout = 33;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	var loader = function () {
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isVisible = function isVisible(elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden';
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				defaultExpand = !lazySizesConfig.expand || lazySizesConfig.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesConfig.expand;

				lazysizes._defEx = defaultExpand;

				preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				hFac = lazySizesConfig.hFac;
				isBodyHidden = null;

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesConfig.loadedClass);
			removeClass(elem, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				addClass(elem, lazySizesConfig.loadingClass);

				if (firesLoad) {
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (isImg && (srcset || isPicture)) {
					updatePolyfill(elem, { src: src });
				}
			}

			if (elem._lazyRace) {
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function () {
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if (!firesLoad || isLoaded) {
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function () {
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
			}, true);
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if (lazysizes.elements.length) {
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};

	return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Swiper 4.5.0
                                                                                                                                                                                                                                                                               * Most modern mobile touch slider and framework with hardware accelerated transitions
                                                                                                                                                                                                                                                                               * http://www.idangero.us/swiper/
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Copyright 2014-2019 Vladimir Kharlampidi
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Released under the MIT License
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Released on: February 22, 2019
                                                                                                                                                                                                                                                                               */

var _dom = __webpack_require__(5);

var _ssrWindow = __webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Methods = {
  addClass: _dom.addClass,
  removeClass: _dom.removeClass,
  hasClass: _dom.hasClass,
  toggleClass: _dom.toggleClass,
  attr: _dom.attr,
  removeAttr: _dom.removeAttr,
  data: _dom.data,
  transform: _dom.transform,
  transition: _dom.transition,
  on: _dom.on,
  off: _dom.off,
  trigger: _dom.trigger,
  transitionEnd: _dom.transitionEnd,
  outerWidth: _dom.outerWidth,
  outerHeight: _dom.outerHeight,
  offset: _dom.offset,
  css: _dom.css,
  each: _dom.each,
  html: _dom.html,
  text: _dom.text,
  is: _dom.is,
  index: _dom.index,
  eq: _dom.eq,
  append: _dom.append,
  prepend: _dom.prepend,
  next: _dom.next,
  nextAll: _dom.nextAll,
  prev: _dom.prev,
  prevAll: _dom.prevAll,
  parent: _dom.parent,
  parents: _dom.parents,
  closest: _dom.closest,
  find: _dom.find,
  children: _dom.children,
  remove: _dom.remove,
  add: _dom.add,
  styles: _dom.styles
};

Object.keys(Methods).forEach(function (methodName) {
  _dom.$.fn[methodName] = Methods[methodName];
});

var Utils = {
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return setTimeout(callback, delay);
  },
  now: function now() {
    return Date.now();
  },
  getTranslate: function getTranslate(el) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';

    var matrix = void 0;
    var curTransform = void 0;
    var transformMatrix = void 0;

    var curStyle = _ssrWindow.window.getComputedStyle(el, null);

    if (_ssrWindow.window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new _ssrWindow.window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (_ssrWindow.window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (_ssrWindow.window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || _ssrWindow.window.location.href;
    var i = void 0;
    var params = void 0;
    var param = void 0;
    var length = void 0;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        return paramsPart !== '';
      });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject: function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = arguments.length <= i ? undefined : arguments[i];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
};

var Support = function Support() {
  var testDiv = _ssrWindow.document.createElement('div');
  return {
    touch: _ssrWindow.window.Modernizr && _ssrWindow.window.Modernizr.touch === true || function checkTouch() {
      return !!(_ssrWindow.window.navigator.maxTouchPoints > 0 || 'ontouchstart' in _ssrWindow.window || _ssrWindow.window.DocumentTouch && _ssrWindow.document instanceof _ssrWindow.window.DocumentTouch);
    }(),

    pointerEvents: !!(_ssrWindow.window.navigator.pointerEnabled || _ssrWindow.window.PointerEvent || 'maxTouchPoints' in _ssrWindow.window.navigator && _ssrWindow.window.navigator.maxTouchPoints > 0),
    prefixedPointerEvents: !!_ssrWindow.window.navigator.msPointerEnabled,

    transition: function checkTransition() {
      var style = testDiv.style;
      return 'transition' in style || 'webkitTransition' in style || 'MozTransition' in style;
    }(),
    transforms3d: _ssrWindow.window.Modernizr && _ssrWindow.window.Modernizr.csstransforms3d === true || function checkTransforms3d() {
      var style = testDiv.style;
      return 'webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style;
    }(),

    flexbox: function checkFlexbox() {
      var style = testDiv.style;
      var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');
      for (var i = 0; i < styles.length; i += 1) {
        if (styles[i] in style) return true;
      }
      return false;
    }(),

    observer: function checkObserver() {
      return 'MutationObserver' in _ssrWindow.window || 'WebkitMutationObserver' in _ssrWindow.window;
    }(),

    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        _ssrWindow.window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }(),

    gestures: function checkGestures() {
      return 'ongesturestart' in _ssrWindow.window;
    }()
  };
}();

var Browser = function Browser() {
  function isSafari() {
    var ua = _ssrWindow.window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  return {
    isIE: !!_ssrWindow.window.navigator.userAgent.match(/Trident/g) || !!_ssrWindow.window.navigator.userAgent.match(/MSIE/g),
    isEdge: !!_ssrWindow.window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(_ssrWindow.window.navigator.userAgent)
  };
}();

var SwiperClass = function () {
  function SwiperClass() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SwiperClass);

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  _createClass(SwiperClass, [{
    key: 'on',
    value: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    }
  }, {
    key: 'once',
    value: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
        self.off(events, onceHandler);
        if (onceHandler.f7proxy) {
          delete onceHandler.f7proxy;
        }
      }
      onceHandler.f7proxy = handler;
      return self.on(events, onceHandler, priority);
    }
  }, {
    key: 'off',
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    }
  }, {
    key: 'emit',
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events = void 0;
      var data = void 0;
      var context = void 0;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  }, {
    key: 'useModulesParams',
    value: function useModulesParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        // Extend params
        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    }
  }, {
    key: 'useModules',
    value: function useModules() {
      var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {};
        // Extend instance methods and props
        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];
            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        }
        // Add event listeners
        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }

        // Module create callback
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  }], [{
    key: 'installModule',
    value: function installModule(module) {
      var Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      var name = module.name || Object.keys(Class.prototype.modules).length + '_' + Utils.now();
      Class.prototype.modules[name] = module;
      // Prototype
      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      }
      // Class
      if (module.static) {
        Object.keys(module.static).forEach(function (key) {
          Class[key] = module.static[key];
        });
      }
      // Callback
      if (module.install) {
        for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        module.install.apply(Class, params);
      }
      return Class;
    }
  }, {
    key: 'use',
    value: function use(module) {
      var Class = this;
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Class.installModule(m);
        });
        return Class;
      }

      for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }

      return Class.installModule.apply(Class, [module].concat(params));
    }
  }, {
    key: 'components',
    set: function set(components) {
      var Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  }]);

  return SwiperClass;
}();

function updateSize() {
  var swiper = this;
  var width = void 0;
  var height = void 0;
  var $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  var swiper = this;
  var params = swiper.params;

  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;

  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children('.' + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  var offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;

  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({ marginLeft: '', marginTop: '' });else slides.css({ marginRight: '', marginBottom: '' });

  var slidesNumberEvenToRows = void 0;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  var slideSize = void 0;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var _slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;
      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;
        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        _slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      _slide.css('margin-' + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + 'px').attr('data-swiper-column', column).attr('data-swiper-row', row);
    }
    if (_slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = _ssrWindow.window.getComputedStyle(_slide[0], null);
      var currentTransform = _slide[0].style.transform;
      var currentWebKitTransform = _slide[0].style.webkitTransform;
      if (currentTransform) {
        _slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          var width = parseFloat(slideStyles.getPropertyValue('width'));
          var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
          var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
          var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
          var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
          var boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          var height = parseFloat(slideStyles.getPropertyValue('height'));
          var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
          var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
          var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
          var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
          var _boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (_boxSizing && _boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }
      if (currentTransform) {
        _slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = slideSize + 'px';
        } else {
          slides[i].style.height = slideSize + 'px';
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid = void 0;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });
  }
  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });else $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + 'px' });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });else $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + 'px' });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({ marginLeft: spaceBetween + 'px' });else slides.css({ marginRight: spaceBetween + 'px' });
    } else slides.css({ marginBottom: spaceBetween + 'px' });
  }

  if (params.centerInsufficientSlides) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i = void 0;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      var _index = swiper.activeIndex + i;
      if (_index > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(_index)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', newHeight + 'px');
}

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;
  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;

  var swiper = this;
  var params = swiper.params;

  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;


  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var _slide2 = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility) {
      var slideBefore = -(offsetCenter - _slide2.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size || slideAfter > 0 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(_slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    _slide2.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = (0, _dom.$)(swiper.visibleSlides);
}

function updateProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;

  var swiper = this;
  var params = swiper.params;

  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;

  var wasBeginning = isBeginning;
  var wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  var swiper = this;

  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;

  var isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(params.slideActiveClass + ' ' + params.slideNextClass + ' ' + params.slidePrevClass + ' ' + params.slideDuplicateActiveClass + ' ' + params.slideDuplicateNextClass + ' ' + params.slideDuplicatePrevClass);

  var activeSlide = void 0;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find('.' + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  var nextSlide = activeSlide.nextAll('.' + params.slideClass).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  var prevSlide = activeSlide.prevAll('.' + params.slideClass).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;

  var activeIndex = newActiveIndex;
  var snapIndex = void 0;
  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  swiper.emit('slideChange');
}

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0, _dom.$)(e.target).closest('.' + params.slideClass)[0];
  var slideFound = false;
  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0, _dom.$)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = (0, _dom.$)(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getTranslate() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';

  var swiper = this;

  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;


  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;

  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      progress = swiper.progress;

  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else $wrapperEl.transform('translate(' + x + 'px, ' + y + 'px)');
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  var newProgress = void 0;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

var translate = {
  getTranslate: getTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate
};

function setTransition(duration, byController) {
  var swiper = this;

  swiper.$wrapperEl.transition(duration);

  swiper.emit('setTransition', duration, byController);
}

function transitionStart() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments[1];

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments[1];

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;

  swiper.animating = false;
  swiper.setTransition(0);

  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd
};

function slideTo() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments[3];

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;

  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction = void 0;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments[3];

  var swiper = this;
  var newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments[2];

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments[2];

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;


  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  var translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var normalizedSlidesGrid = slidesGrid.map(function (val) {
    return normalize(val);
  });

  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  var prevIndex = void 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments[2];

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments[2];

  var swiper = this;
  var index = swiper.activeIndex;
  var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    var _translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (_translate - currentSnap > (nextSnap - currentSnap) / 2) {
      index = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;


  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex = void 0;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0, _dom.$)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();

      Utils.nextTick(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  // Remove duplicated slides

  $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass).remove();

  var slides = $wrapperEl.children('.' + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0, _dom.$)(_ssrWindow.document.createElement('div')).addClass(params.slideClass + ' ' + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children('.' + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (index, el) {
    var slide = (0, _dom.$)(el);
    if (index < swiper.loopedSlides) appendSlides.push(el);
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index);
  });
  for (var _i3 = 0; _i3 < appendSlides.length; _i3 += 1) {
    $wrapperEl.append((0, _dom.$)(appendSlides[_i3].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (var _i4 = prependSlides.length - 1; _i4 >= 0; _i4 -= 1) {
    $wrapperEl.prepend((0, _dom.$)(prependSlides[_i4].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  var swiper = this;
  var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;

  var newIndex = void 0;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;

  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate();

  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2 || activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;

  $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + ',.' + params.slideClass + '.' + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(moving) {
  var swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  var swiper = this;
  if (Support.touch || swiper.params.watchOverflow && swiper.isLocked) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }
  if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;


  if (params.loop) {
    swiper.loopDestroy();
  }
  var newActiveIndex = activeIndex + 1;
  if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;

  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children('.' + params.slideClass);
  }
  var baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

  var slidesBuffer = [];
  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && 'length' in slides) {
    for (var _i5 = 0; _i5 < slides.length; _i5 += 1) {
      if (slides[_i5]) $wrapperEl.append(slides[_i5]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i6 = 0; _i6 < slidesBuffer.length; _i6 += 1) {
    $wrapperEl.append(slidesBuffer[_i6]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;


  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children('.' + params.slideClass);
  }
  var newActiveIndex = activeIndexBuffer;
  var indexToRemove = void 0;

  if ((typeof slidesIndexes === 'undefined' ? 'undefined' : _typeof(slidesIndexes)) === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  var swiper = this;

  var slidesIndexes = [];
  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

var Device = function Device() {
  var ua = _ssrWindow.window.navigator.userAgent;

  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: _ssrWindow.window.cordova || _ssrWindow.window.phonegap,
    phonegap: _ssrWindow.window.cordova || _ssrWindow.window.phonegap
  };

  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = _ssrWindow.document.querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Pixel Ratio
  device.pixelRatio = _ssrWindow.window.devicePixelRatio || 1;

  // Export object
  return device;
}();

function onTouchStart(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  if (params.noSwiping && (0, _dom.$)(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : '.' + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!(0, _dom.$)(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= _ssrWindow.window.screen.width - edgeSwipeThreshold)) {
    return;
  }

  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ((0, _dom.$)(e.target).is(data.formElements)) preventDefault = false;
    if (_ssrWindow.document.activeElement && (0, _dom.$)(_ssrWindow.document.activeElement).is(data.formElements) && _ssrWindow.document.activeElement !== e.target) {
      _ssrWindow.document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type === 'mousemove') return;
  var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && _ssrWindow.document.activeElement) {
    if (e.target === _ssrWindow.document.activeElement && (0, _dom.$)(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;

  touches.currentX = pageX;
  touches.currentY = pageY;

  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle = void 0;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  e.preventDefault();
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;

  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) diff = -diff;

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;

  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now()
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;

  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  var touchEndTime = Utils.now();
  var timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime > 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      data.clickTimeout = Utils.nextTick(function () {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data.lastClickTime = Utils.now();
  Utils.nextTick(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;

  var currentPos = void 0;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();

        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;

      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;

      var doBounce = false;
      var afterBouncePosition = void 0;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix = void 0;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide = void 0;
        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');

          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];
  for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }
    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  var swiper = this;

  var params = swiper.params,
      el = swiper.el;


  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid;

  // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  var swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;


  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      _ssrWindow.document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      _ssrWindow.document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        _ssrWindow.document.addEventListener('mousemove', swiper.onTouchMove, capture);
        _ssrWindow.document.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
}

function detachEvents() {
  var swiper = this;

  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;


  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      _ssrWindow.document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      _ssrWindow.document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        _ssrWindow.document.removeEventListener('mousemove', swiper.onTouchMove, capture);
        _ssrWindow.document.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === undefined ? 0 : _swiper$loopedSlides,
      params = swiper.params;

  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Set breakpoint for window width and update parameters
  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Utils.extend(swiper.params, breakpointParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint(breakpoints) {
  var swiper = this;
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = [];
  Object.keys(breakpoints).forEach(function (point) {
    points.push(point);
  });
  points.sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  });
  for (var i = 0; i < points.length; i += 1) {
    var point = points[i];
    if (swiper.params.breakpointsInverse) {
      if (point <= _ssrWindow.window.innerWidth) {
        breakpoint = point;
      }
    } else if (point >= _ssrWindow.window.innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el;

  var suffixes = [];

  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  // WP8 Touch Events Fix
  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push('wp8-' + params.direction);
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
}

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;


  $el.removeClass(classNames.join(' '));
}

var classes = { addClasses: addClasses, removeClasses: removeClasses };

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var image = void 0;
  function onReady() {
    if (callback) callback();
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new _ssrWindow.window.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var swiper = this;
  var wasLocked = swiper.isLocked;

  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = { checkOverflow: checkOverflow };

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,

  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true
};

/* eslint no-param-reassign: "off" */

var prototypes = {
  update: update,
  translate: translate,
  transition: transition,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
};

var extendedDefaults = {};

var Swiper = function (_SwiperClass) {
  _inherits(Swiper, _SwiperClass);

  function Swiper() {
    var _ret3;

    _classCallCheck(this, Swiper);

    var el = void 0;
    var params = void 0;

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }
    if (!params) params = {};

    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;

    var _this = _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, params));

    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    var swiper = _this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];
      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if ((typeof moduleParams === 'undefined' ? 'undefined' : _typeof(moduleParams)) !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
      }
    });

    // Extend defaults with modules params
    var swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = _dom.$;

    // Find el
    var $el = (0, _dom.$)(swiper.params.el);
    el = $el[0];

    if (!el) {
      var _ret;

      return _ret = undefined, _possibleConstructorReturn(_this, _ret);
    }

    if ($el.length > 1) {
      var _ret2;

      var swipers = [];
      $el.each(function (index, containerEl) {
        var newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return _ret2 = swipers, _possibleConstructorReturn(_this, _ret2);
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    var $wrapperEl = $el.children('.' + swiper.params.wrapperClass);

    // Extend Swiper
    Utils.extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: (0, _dom.$)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return _ret3 = swiper, _possibleConstructorReturn(_this, _ret3);
  }

  _createClass(Swiper, [{
    key: 'slidesPerViewDynamic',
    value: function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;

      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop = void 0;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (var _i7 = activeIndex - 1; _i7 >= 0; _i7 -= 1) {
          if (slides[_i7] && !breakLoop) {
            slideSize += slides[_i7].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i8 = activeIndex + 1; _i8 < slides.length; _i8 += 1) {
          if (slidesGrid[_i8] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    }
  }, {
    key: 'update',
    value: function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params;
      // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated = void 0;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(newDirection) {
      var needUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }

      if (currentDirection === 'vertical') {
        swiper.$el.removeClass(swiper.params.containerModifierClass + 'vertical wp8-vertical').addClass('' + swiper.params.containerModifierClass + newDirection);

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(swiper.params.containerModifierClass + 'wp8-' + newDirection);
        }
      }
      if (currentDirection === 'horizontal') {
        swiper.$el.removeClass(swiper.params.containerModifierClass + 'horizontal wp8-horizontal').addClass('' + swiper.params.containerModifierClass + newDirection);

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(swiper.params.containerModifierClass + 'wp8-' + newDirection);
        }
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();

      return swiper;
    }
  }, {
    key: 'init',
    value: function init() {
      var swiper = this;
      if (swiper.initialized) return;

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;


      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    }
  }], [{
    key: 'extendDefaults',
    value: function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    }
  }, {
    key: 'extendedDefaults',
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: 'defaults',
    get: function get() {
      return defaults;
    }
  }, {
    key: 'Class',
    get: function get() {
      return SwiperClass;
    }
  }, {
    key: '$',
    get: function get() {
      return _dom.$;
    }
  }]);

  return Swiper;
}(SwiperClass);

var Device$1 = {
  name: 'device',
  proto: {
    device: Device
  },
  static: {
    device: Device
  }
};

var Support$1 = {
  name: 'support',
  proto: {
    support: Support
  },
  static: {
    support: Support
  }
};

var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser
  },
  static: {
    browser: Browser
  }
};

var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      // Emit resize
      _ssrWindow.window.addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      _ssrWindow.window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy() {
      var swiper = this;
      _ssrWindow.window.removeEventListener('resize', swiper.resize.resizeHandler);
      _ssrWindow.window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};

var Observer = {
  func: _ssrWindow.window.MutationObserver || _ssrWindow.window.WebkitMutationObserver,
  attach: function attach(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var swiper = this;

    var ObserverFunc = Observer.func;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (_ssrWindow.window.requestAnimationFrame) {
        _ssrWindow.window.requestAnimationFrame(observerUpdate);
      } else {
        _ssrWindow.window.setTimeout(observerUpdate, 0);
      }
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });

    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();
      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: []
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      swiper.observer.init();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.destroy();
    }
  }
};

var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;

    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;

    var offsetProp = void 0;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

    var slidesAfter = void 0;
    var slidesBefore = void 0;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + 'px');
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];
          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      onRendered();
      return;
    }
    var prependIndexes = [];
    var appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find('.' + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + i + '"]').remove();
        }
      }
    }
    for (var _i9 = 0; _i9 < slides.length; _i9 += 1) {
      if (_i9 >= from && _i9 <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i9);
        } else {
          if (_i9 > previousTo) appendIndexes.push(_i9);
          if (_i9 < previousFrom) prependIndexes.push(_i9);
        }
      }
    }
    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + 'px');
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    var $slideEl = params.renderSlide ? (0, _dom.$)(params.renderSlide.call(swiper, slide, index)) : (0, _dom.$)('<div class="' + swiper.params.slideClass + '" data-swiper-slide-index="' + index + '">' + slide + '</div>');
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;
    if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        removeSlide: Virtual.removeSlide.bind(swiper),
        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {}
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + 'virtual');
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};

var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;

    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    var kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (_ssrWindow.document.activeElement && _ssrWindow.document.activeElement.nodeName && (_ssrWindow.document.activeElement.nodeName.toLowerCase() === 'input' || _ssrWindow.document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      var inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents('.' + swiper.params.slideClass).length > 0 && swiper.$el.parents('.' + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }
      var windowWidth = _ssrWindow.window.innerWidth;
      var windowHeight = _ssrWindow.window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (kc === 39 && !rtl || kc === 37 && rtl) swiper.slideNext();
      if (kc === 37 && !rtl || kc === 39 && rtl) swiper.slidePrev();
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (kc === 40) swiper.slideNext();
      if (kc === 38) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    if (swiper.keyboard.enabled) return;
    (0, _dom.$)(_ssrWindow.document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    if (!swiper.keyboard.enabled) return;
    (0, _dom.$)(_ssrWindow.document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper)
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};

function isEventSupported() {
  var eventName = 'onwheel';
  var isSupported = eventName in _ssrWindow.document;

  if (!isSupported) {
    var element = _ssrWindow.document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && _ssrWindow.document.implementation && _ssrWindow.document.implementation.hasFeature
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  && _ssrWindow.document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = _ssrWindow.document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
var Mousewheel = {
  lastScrollTime: Utils.now(),
  event: function getEvent() {
    if (_ssrWindow.window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }(),
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;

    var sX = 0;
    var sY = 0; // spinX, spinY
    var pX = 0;
    var pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;

    if (e.originalEvent) e = e.originalEvent; // jquery fix
    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;

    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;

    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }
      swiper.mousewheel.lastScrollTime = new _ssrWindow.window.Date().getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }
      var position = swiper.getTranslate() + delta * params.sensitivity;
      var wasBeginning = swiper.isBeginning;
      var wasEnd = swiper.isEnd;

      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(function () {
          swiper.slideToClosest();
        }, 300);
      }
      // Emit event
      swiper.emit('scroll', e);

      // Stop autoplay
      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
      // Return page scroll on edge positions
      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  enable: function enable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = (0, _dom.$)(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = (0, _dom.$)(swiper.params.mousewheel.eventsTarged);
    }
    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now()
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};

var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;

    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;


    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;

    var $nextEl = void 0;
    var $prevEl = void 0;
    if (params.nextEl) {
      $nextEl = (0, _dom.$)(params.nextEl);
      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = (0, _dom.$)(params.prevEl);
      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper)
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.navigation.destroy();
    },
    click: function click(e) {
      var swiper = this;
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !(0, _dom.$)(e.target).is($prevEl) && !(0, _dom.$)(e.target).is($nextEl)) {
        var isHidden = void 0;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow', swiper);
        } else {
          swiper.emit('navigationHide', swiper);
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
};

var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    // Current/Total
    var current = void 0;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex = void 0;
      var lastIndex = void 0;
      var midIndex = void 0;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + 'px');
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(params.bulletActiveClass + ' ' + params.bulletActiveClass + '-next ' + params.bulletActiveClass + '-next-next ' + params.bulletActiveClass + '-prev ' + params.bulletActiveClass + '-prev-prev ' + params.bulletActiveClass + '-main');
      if ($el.length > 1) {
        bullets.each(function (index, bullet) {
          var $bullet = (0, _dom.$)(bullet);
          var bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + '-main');
            }
            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + '-prev').prev().addClass(params.bulletActiveClass + '-prev-prev');
            }
            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + '-next').next().addClass(params.bulletActiveClass + '-next-next');
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);
          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + '-main');
          }
          $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + '-prev').prev().addClass(params.bulletActiveClass + '-prev-prev');
          $lastDisplayedBullet.next().addClass(params.bulletActiveClass + '-next').next().addClass(params.bulletActiveClass + '-next-next');
        }
      }
      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + 'px');
      }
    }
    if (params.type === 'fraction') {
      $el.find('.' + params.currentClass).text(params.formatFractionCurrent(current + 1));
      $el.find('.' + params.totalClass).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      var progressbarDirection = void 0;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find('.' + params.progressbarFillClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    var $el = swiper.pagination.$el;
    var paginationHTML = '';
    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += '<' + params.bulletElement + ' class="' + params.bulletClass + '"></' + params.bulletElement + '>';
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find('.' + params.bulletClass);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = '<span class="' + params.currentClass + '"></span>' + ' / ' + ('<span class="' + params.totalClass + '"></span>');
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = '<span class="' + params.progressbarFillClass + '"></span>';
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;

    var $el = (0, _dom.$)(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass('' + params.modifierClass + params.type + '-dynamic');
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', '.' + params.bulletClass, function onClick(e) {
        e.preventDefault();
        var index = (0, _dom.$)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Utils.extend(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', '.' + params.bulletClass);
    }
  }
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable', // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange() {
      var swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange() {
      var swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange() {
      var swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange() {
      var swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.pagination.destroy();
    },
    click: function click(e) {
      var swiper = this;
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0, _dom.$)(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow', swiper);
        } else {
          swiper.emit('paginationHide', swiper);
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};

var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;

    var params = swiper.params.scrollbar;

    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform('translate3d(' + newPos + 'px, 0, 0)');
      } else {
        $dragEl.transform('translateX(' + newPos + 'px)');
      }
      $dragEl[0].style.width = newSize + 'px';
    } else {
      if (Support.transforms3d) {
        $dragEl.transform('translate3d(0px, ' + newPos + 'px, 0)');
      } else {
        $dragEl.transform('translateY(' + newPos + 'px)');
      }
      $dragEl[0].style.height = newSize + 'px';
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;


    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize = void 0;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + 'px';
    } else {
      $dragEl[0].style.height = dragSize + 'px';
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize;


    var pointerPosition = void 0;
    if (swiper.isHorizontal()) {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX;
    } else {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
    }
    var positionRatio = void 0;
    positionRatio = (pointerPosition - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - dragSize / 2) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;

    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;


    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;

    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;


    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;

    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      _ssrWindow.document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      _ssrWindow.document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;

    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      _ssrWindow.document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      _ssrWindow.document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;

    var params = swiper.params.scrollbar;

    var $el = (0, _dom.$)(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find('.' + swiper.params.scrollbar.dragClass);
    if ($dragEl.length === 0) {
      $dragEl = (0, _dom.$)('<div class="' + swiper.params.scrollbar.dragClass + '"></div>');
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize: function resize() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.destroy();
    }
  }
};

var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;


    var $el = (0, _dom.$)(el);
    var rtlFactor = rtl ? -1 : 1;

    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + '%';
    } else {
      x = x * progress * rtlFactor + 'px';
    }
    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + '%';
    } else {
      y = y * progress + 'px';
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform('translate3d(' + x + ', ' + y + ', 0px)');
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform('translate3d(' + x + ', ' + y + ', 0px) scale(' + currentScale + ')');
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;

    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideIndex, slideEl) {
      var slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0, _dom.$)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;

    var swiper = this;
    var $el = swiper.$el;

    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index, parallaxEl) {
      var $parallaxEl = (0, _dom.$)(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
};

var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  },

  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0, _dom.$)(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.$imageEl.transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');

      zoom.scale = 1;
      zoom.currentScale = 1;

      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },

  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;

    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;


    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? (0, _dom.$)(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    gesture.$slideEl.addClass('' + params.zoomedSlideClass);

    var touchX = void 0;
    var touchY = void 0;
    var offsetX = void 0;
    var offsetY = void 0;
    var diffX = void 0;
    var diffY = void 0;
    var translateX = void 0;
    var translateY = void 0;
    var imageWidth = void 0;
    var imageHeight = void 0;
    var scaledWidth = void 0;
    var scaledHeight = void 0;
    var translateMinX = void 0;
    var translateMinY = void 0;
    var translateMaxX = void 0;
    var translateMaxY = void 0;
    var slideWidth = void 0;
    var slideHeight = void 0;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
  },
  out: function out() {
    var swiper = this;

    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;


    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? (0, _dom.$)(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass('' + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },

  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;

    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, '.' + swiper.params.zoom.containerClass, zoom.onTouchMove);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;

    swiper.zoom.enabled = false;

    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, '.' + swiper.params.zoom.containerClass, zoom.onTouchMove);
  }
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    var zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      }
    };

    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom: zoom
    });

    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.zoom.disable();
    },
    touchStart: function touchStart(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(e) {
      var swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};

var Lazy = {
  loadInSlide: function loadInSlide(index) {
    var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    var $slideEl = isVirtual ? swiper.$wrapperEl.children('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + index + '"]') : swiper.slides.eq(index);

    var $images = $slideEl.find('.' + params.elementClass + ':not(.' + params.loadedClass + '):not(.' + params.loadingClass + ')');
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;

    $images.each(function (imageIndex, imageEl) {
      var $imageEl = (0, _dom.$)(imageEl);
      $imageEl.addClass(params.loadingClass);

      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', 'url("' + background + '")');
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find('.' + params.preloaderClass).remove();
        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + swiper.params.slideDuplicateClass + ')');
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children('.' + swiper.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;

    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;

    var slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children('.' + swiperParams.slideClass + '[data-swiper-slide-index="' + index + '"]').length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0, _dom.$)(slideEl).attr('data-swiper-slide-index');
      }
      return (0, _dom.$)(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children('.' + swiperParams.slideVisibleClass).each(function (elIndex, slideEl) {
        var index = isVirtual ? (0, _dom.$)(slideEl).attr('data-swiper-slide-index') : (0, _dom.$)(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (var _i10 = activeIndex + slidesPerView; _i10 < maxIndex; _i10 += 1) {
          if (slideExist(_i10)) swiper.lazy.loadInSlide(_i10);
        }
        // Prev Slides
        for (var _i11 = minIndex; _i11 < activeIndex; _i11 += 1) {
          if (slideExist(_i11)) swiper.lazy.loadInSlide(_i11);
        }
      } else {
        var nextSlide = $wrapperEl.children('.' + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

        var prevSlide = $wrapperEl.children('.' + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init() {
      var swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll() {
      var swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    }
  }
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex = void 0;
      var minIndex = void 0;
      var guess = void 0;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    var i1 = void 0;
    var i3 = void 0;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier = void 0;
    var controlledTranslate = void 0;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var i = void 0;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(function () {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper)
      }
    });
  },

  on: {
    update: function update() {
      var swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(translate, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};

var a11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = (0, _dom.$)(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is('.' + swiper.params.pagination.bulletClass)) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;

    if (swiper.params.loop) return;
    var _swiper$navigation4 = swiper.navigation,
        $nextEl = _swiper$navigation4.$nextEl,
        $prevEl = _swiper$navigation4.$prevEl;


    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
        var $bulletEl = (0, _dom.$)(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init: function init() {
    var swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    var params = swiper.params.a11y;
    var $nextEl = void 0;
    var $prevEl = void 0;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', '.' + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

    var $nextEl = void 0;
    var $prevEl = void 0;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', '.' + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  }
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: (0, _dom.$)('<span class="' + swiper.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
      }
    });
    Object.keys(a11y).forEach(function (methodName) {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};

var History = {
  init: function init() {
    var swiper = this;
    if (!swiper.params.history) return;
    if (!_ssrWindow.window.history || !_ssrWindow.window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      _ssrWindow.window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (!swiper.params.history.replaceState) {
      _ssrWindow.window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues() {
    var pathArray = _ssrWindow.window.location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return { key: key, value: value };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));
    if (!_ssrWindow.window.location.pathname.includes(key)) {
      value = key + '/' + value;
    }
    var currentState = _ssrWindow.window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      _ssrWindow.window.history.replaceState({ value: value }, null, value);
    } else {
      _ssrWindow.window.history.pushState({ value: value }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;
    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide3 = swiper.slides.eq(i);
        var slideHistory = History.slugify(_slide3.attr('data-history'));
        if (slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)) {
          var _index2 = _slide3.index();
          swiper.slideTo(_index2, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper)
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};

var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var newHash = _ssrWindow.document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children('.' + swiper.params.slideClass + '[data-hash="' + newHash + '"]').index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && _ssrWindow.window.history && _ssrWindow.window.history.replaceState) {
      _ssrWindow.window.history.replaceState(null, null, '#' + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
    } else {
      var _slide4 = swiper.slides.eq(swiper.activeIndex);
      var hash = _slide4.attr('data-hash') || _slide4.attr('data-history');
      _ssrWindow.document.location.hash = hash || '';
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = _ssrWindow.document.location.hash.replace('#', '');
    if (hash) {
      var speed = 0;
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide5 = swiper.slides.eq(i);
        var slideHash = _slide5.attr('data-hash') || _slide5.attr('data-history');
        if (slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)) {
          var _index3 = _slide5.index();
          swiper.slideTo(_index3, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.$)(_ssrWindow.window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.$)(_ssrWindow.window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper)
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};

/* eslint no-underscore-dangle: "off" */

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    swiper.autoplay.timeout = Utils.nextTick(function () {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  }
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd: function onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        }
      }
    });
  },

  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(speed, internal) {
      var swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove() {
      var swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    }
  }
};

var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var _offset = $slideEl[0].swiperSlideOffset;
      var tx = -_offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;

    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + 'fade');
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};

var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size;

    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl = void 0;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.$)('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: swiperWidth + 'px' });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.$)('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var _transform = 'rotateX(' + (isHorizontal ? 0 : -slideAngle) + 'deg) rotateY(' + (isHorizontal ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      $slideEl.transform(_transform);
      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.$)('<div class="swiper-slide-shadow-' + (isHorizontal ? 'left' : 'top') + '"></div>');
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.$)('<div class="swiper-slide-shadow-' + (isHorizontal ? 'right' : 'bottom') + '"></div>');
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
      '-moz-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
      '-ms-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
      'transform-origin': '50% 50% -' + swiperSize / 2 + 'px'
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform('translate3d(0px, ' + (swiperWidth / 2 + params.shadowOffset) + 'px, ' + -swiperWidth / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + params.shadowScale + ')');
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var _offset2 = params.shadowOffset;
        $cubeShadowEl.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (swiperHeight / 2 + _offset2) + 'px, ' + -swiperHeight / 2 / scale2 + 'px) rotateX(-90deg)');
      }
    }
    var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (swiper.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (swiper.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;

    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + 'cube');
      swiper.classNames.push(swiper.params.containerModifierClass + '3d');
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};

var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      var _offset3 = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -_offset3;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.$)('<div class="swiper-slide-shadow-' + (swiper.isHorizontal() ? 'left' : 'top') + '"></div>');
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.$)('<div class="swiper-slide-shadow-' + (swiper.isHorizontal() ? 'right' : 'bottom') + '"></div>');
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;

    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + 'flip');
      swiper.classNames.push(swiper.params.containerModifierClass + '3d');
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};

var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;

    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth;
    // Each slide offset from center
    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;

      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      var translateZ = -translate * Math.abs(offsetMultiplier);

      var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
      var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;

      var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0, _dom.$)('<div class="swiper-slide-shadow-' + (isHorizontal ? 'left' : 'top') + '"></div>');
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0, _dom.$)('<div class="swiper-slide-shadow-' + (isHorizontal ? 'right' : 'bottom') + '"></div>');
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      var ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = center + 'px 50%';
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;

      swiper.classNames.push(swiper.params.containerModifierClass + 'coverflow');
      swiper.classNames.push(swiper.params.containerModifierClass + '3d');

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};

var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;

    var SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0, _dom.$)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex = void 0;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0, _dom.$)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      var prevIndex = swiper.slides.eq(currentIndex).prevAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex = void 0;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }
      if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children('[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]').addClass(thumbActiveClass);
      }
    } else {
      for (var _i12 = 0; _i12 < thumbsToActivate; _i12 += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i12).addClass(thumbActiveClass);
      }
    }
  }
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper)
      }
    });
  },

  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      var thumbs = swiper.params.thumbs;

      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
};

// Swiper Class

var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

exports.default = Swiper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scroll = exports.resize = exports.touchmove = exports.touchend = exports.touchstart = exports.mouseover = exports.mouseout = exports.mouseleave = exports.mouseenter = exports.mouseup = exports.mousemove = exports.mousedown = exports.change = exports.submit = exports.keypress = exports.keydown = exports.keyup = exports.focusout = exports.focusin = exports.focus = exports.blur = exports.click = exports.stop = exports.animate = exports.scrollLeft = exports.scrollTop = exports.scrollTo = exports.empty = exports.add = exports.detach = exports.remove = exports.children = exports.find = exports.closest = exports.parents = exports.parent = exports.siblings = exports.prevAll = exports.prev = exports.nextAll = exports.next = exports.insertAfter = exports.insertBefore = exports.prependTo = exports.prepend = exports.appendTo = exports.append = exports.eq = exports.index = exports.indexOf = exports.is = exports.text = exports.html = exports.map = exports.filter = exports.forEach = exports.each = exports.toArray = exports.css = exports.styles = exports.show = exports.hide = exports.offset = exports.outerHeight = exports.height = exports.outerWidth = exports.width = exports.animationEnd = exports.transitionEnd = exports.trigger = exports.once = exports.off = exports.on = exports.transition = exports.transform = exports.val = exports.dataset = exports.removeData = exports.data = exports.prop = exports.removeAttr = exports.attr = exports.toggleClass = exports.hasClass = exports.removeClass = exports.addClass = exports.$ = undefined;

var _ssrWindow = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Dom7 2.1.3
                                                                                                                                                           * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
                                                                                                                                                           * http://framework7.io/docs/dom.html
                                                                                                                                                           *
                                                                                                                                                           * Copyright 2019, Vladimir Kharlampidi
                                                                                                                                                           * The iDangero.us
                                                                                                                                                           * http://www.idangero.us/
                                                                                                                                                           *
                                                                                                                                                           * Licensed under MIT
                                                                                                                                                           *
                                                                                                                                                           * Released on: February 11, 2019
                                                                                                                                                           */


var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this;
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }
  self.length = arr.length;
  // Return collection with methods
  return this;
};

function $(selector, context) {
  var arr = [];
  var i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els = void 0;
      var tempParent = void 0;
      var _html = selector.trim();
      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = _ssrWindow.document.createElement(toCreate);
        tempParent.innerHTML = _html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [_ssrWindow.document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || _ssrWindow.document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === _ssrWindow.window || selector === _ssrWindow.document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (_ssrWindow.window.requestAnimationFrame) return _ssrWindow.window.requestAnimationFrame(callback);else if (_ssrWindow.window.webkitRequestAnimationFrame) return _ssrWindow.window.webkitRequestAnimationFrame(callback);
  return _ssrWindow.window.setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (_ssrWindow.window.cancelAnimationFrame) return _ssrWindow.window.cancelAnimationFrame(id);else if (_ssrWindow.window.webkitCancelAnimationFrame) return _ssrWindow.window.webkitCancelAnimationFrame(id);
  return _ssrWindow.window.clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  var el = void 0;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute('data-' + key);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];
      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  var dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];
        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (var _i = 0; _i < dom.length; _i += 1) {
    var el = dom[_i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = duration + 'ms'; // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line
      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j = void 0;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  function onceHandler() {
    for (var _len4 = arguments.length, eventArgs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = void 0;
      try {
        evt = new _ssrWindow.window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = _ssrWindow.document.createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = _ssrWindow.document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var _scrollTop = el === _ssrWindow.window ? _ssrWindow.window.scrollY : el.scrollTop;
    var _scrollLeft = el === _ssrWindow.window ? _ssrWindow.window.scrollX : el.scrollLeft;
    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}
function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (_ssrWindow.window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var i = void 0;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  var arr = [];
  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  var matchedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  var modifiedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var el = this[0];
  var compareWith = void 0;
  var i = void 0;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === _ssrWindow.document) return el === _ssrWindow.document;else if (selector === _ssrWindow.window) return el === _ssrWindow.window;

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  var child = this[0];
  var i = void 0;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex = void 0;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append() {
  var newChild = void 0;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = arguments.length <= k ? undefined : arguments[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = _ssrWindow.document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  var i = void 0;
  var j = void 0;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = _ssrWindow.document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  var before = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  var after = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);
    el = _next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);
    el = _prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line
    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  var closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  var children = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add() {
  var dom = this;
  var i = void 0;
  var j = void 0;

  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    var el = this;
    var currentTop = void 0;
    var currentLeft = void 0;
    var maxTop = void 0;
    var maxLeft = void 0;
    var newTop = void 0;
    var newLeft = void 0;
    var scrollTop = void 0; // eslint-disable-line
    var scrollLeft = void 0; // eslint-disable-line
    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done = void 0;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop() {
  for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
  for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      var elements = [];

      // Define & Cache Initials & Units
      a.elements.each(function (index, el) {
        var initialFullValue = void 0;
        var initialValue = void 0;
        var unit = void 0;
        var finalValue = void 0;
        var finalFullValue = void 0;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = _ssrWindow.window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });

      var startTime = null;
      var time = void 0;
      var elementsDone = 0;
      var propsDone = 0;
      var done = void 0;
      var began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress = void 0;
        var easeProgress = void 0;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;

            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance = void 0;
  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;
  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');
function eventShortcut(name) {
  for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(undefined, ['click'].concat(args));
}
function blur() {
  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(undefined, ['blur'].concat(args));
}
function focus() {
  for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(undefined, ['focus'].concat(args));
}
function focusin() {
  for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusin'].concat(args));
}
function focusout() {
  for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusout'].concat(args));
}
function keyup() {
  for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(undefined, ['keyup'].concat(args));
}
function keydown() {
  for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(undefined, ['keydown'].concat(args));
}
function keypress() {
  for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(undefined, ['keypress'].concat(args));
}
function submit() {
  for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(undefined, ['submit'].concat(args));
}
function change() {
  for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(undefined, ['change'].concat(args));
}
function mousedown() {
  for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousedown'].concat(args));
}
function mousemove() {
  for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousemove'].concat(args));
}
function mouseup() {
  for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseup'].concat(args));
}
function mouseenter() {
  for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseenter'].concat(args));
}
function mouseleave() {
  for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseleave'].concat(args));
}
function mouseout() {
  for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseout'].concat(args));
}
function mouseover() {
  for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseover'].concat(args));
}
function touchstart() {
  for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchstart'].concat(args));
}
function touchend() {
  for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchend'].concat(args));
}
function touchmove() {
  for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchmove'].concat(args));
}
function resize() {
  for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(undefined, ['resize'].concat(args));
}
function scroll() {
  for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(undefined, ['scroll'].concat(args));
}

exports.$ = $;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.toggleClass = toggleClass;
exports.attr = attr;
exports.removeAttr = removeAttr;
exports.prop = prop;
exports.data = data;
exports.removeData = removeData;
exports.dataset = dataset;
exports.val = val;
exports.transform = transform;
exports.transition = transition;
exports.on = on;
exports.off = off;
exports.once = once;
exports.trigger = trigger;
exports.transitionEnd = transitionEnd;
exports.animationEnd = animationEnd;
exports.width = width;
exports.outerWidth = outerWidth;
exports.height = height;
exports.outerHeight = outerHeight;
exports.offset = offset;
exports.hide = hide;
exports.show = show;
exports.styles = styles;
exports.css = css;
exports.toArray = toArray;
exports.each = each;
exports.forEach = forEach;
exports.filter = filter;
exports.map = map;
exports.html = html;
exports.text = text;
exports.is = is;
exports.indexOf = indexOf;
exports.index = index;
exports.eq = eq;
exports.append = append;
exports.appendTo = appendTo;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.next = next;
exports.nextAll = nextAll;
exports.prev = prev;
exports.prevAll = prevAll;
exports.siblings = siblings;
exports.parent = parent;
exports.parents = parents;
exports.closest = closest;
exports.find = find;
exports.children = children;
exports.remove = remove;
exports.detach = detach;
exports.add = add;
exports.empty = empty;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollLeft = scrollLeft;
exports.animate = animate;
exports.stop = stop;
exports.click = click;
exports.blur = blur;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.keyup = keyup;
exports.keydown = keydown;
exports.keypress = keypress;
exports.submit = submit;
exports.change = change;
exports.mousedown = mousedown;
exports.mousemove = mousemove;
exports.mouseup = mouseup;
exports.mouseenter = mouseenter;
exports.mouseleave = mouseleave;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
exports.touchstart = touchstart;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.resize = resize;
exports.scroll = scroll;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = dynamicMarquee;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.3 2018-09-08*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
    define(function () {
        'use strict';

        var impl = {};

        impl.mobileDetectRules = {
            "phones": {
                "iPhone": "\\biPhone\\b|\\biPod\\b",
                "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
                "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
                "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                "Asus": "Asus.*Galaxy|PadFone.*Mobile",
                "NokiaLumia": "Lumia [0-9]{3,4}",
                "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                "Palm": "PalmSource|Palm",
                "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                "Alcatel": "Alcatel",
                "Nintendo": "Nintendo (3DS|Switch)",
                "Amoi": "Amoi",
                "INQ": "INQ",
                "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            "tablets": {
                "iPad": "iPad|iPad.*Mobile",
                "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
                "GoogleTablet": "Android.*Pixel C",
                "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
                "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
                "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                "BlackBerryTablet": "PlayBook|RIM Tablet",
                "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
                "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                "IRUTablet": "M702pro",
                "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                "NokiaLumiaTablet": "Lumia 2520",
                "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                "FlyTablet": "IQ310|Fly Vision",
                "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
                "NecTablet": "\\bN-06D|\\bN-08D",
                "PantechTablet": "Pantech.*P4100",
                "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
                "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
                "NabiTablet": "Android.*\\bNabi",
                "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                "PlaystationTablet": "Playstation.*(Portable|Vita)",
                "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
                "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
                "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                "DPSTablet": "DPS Dream 9|DPS Dual 7",
                "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
                "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
                "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
                "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                "iMobileTablet": "i-mobile i-note",
                "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
                "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                "AMPETablet": "Android.* A78 ",
                "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                "TecnoTablet": "TECNO P9|TECNO DP8D",
                "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                "FX2Tablet": "FX2 PAD7|FX2 PAD10",
                "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                "CaptivaTablet": "CAPTIVA PAD",
                "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                "JaytechTablet": "TPC-PA762",
                "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
                "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
                "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                "UbislateTablet": "UbiSlate[\\s]?7C",
                "PocketBookTablet": "Pocketbook",
                "KocasoTablet": "\\b(TB-1207)\\b",
                "HisenseTablet": "\\b(F5281|E2371)\\b",
                "Hudl": "Hudl HT7S3|Hudl 2",
                "TelstraTablet": "T-Hub2",
                "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
            },
            "oss": {
                "AndroidOS": "Android",
                "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
                "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                "MeeGoOS": "MeeGo",
                "MaemoOS": "Maemo",
                "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
                "webOS": "webOS|hpwOS",
                "badaOS": "\\bBada\\b",
                "BREWOS": "BREW"
            },
            "uas": {
                "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
                "Dolfin": "\\bDolfin\\b",
                "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
                "Skyfire": "Skyfire",
                "Edge": "Mobile Safari\/[.0-9]* Edge",
                "IE": "IEMobile|MSIEMobile",
                "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                "Bolt": "bolt",
                "TeaShark": "teashark",
                "Blazer": "Blazer",
                "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                "WeChat": "\\bMicroMessenger\\b",
                "UCBrowser": "UC.*Browser|UCWEB",
                "baiduboxapp": "baiduboxapp",
                "baidubrowser": "baidubrowser",
                "DiigoBrowser": "DiigoBrowser",
                "Puffin": "Puffin",
                "Mercury": "\\bMercury\\b",
                "ObigoBrowser": "Obigo",
                "NetFront": "NF-Browser",
                "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            "props": {
                "Mobile": "Mobile\/[VER]",
                "Build": "Build\/[VER]",
                "Version": "Version\/[VER]",
                "VendorID": "VendorID\/[VER]",
                "iPad": "iPad.*CPU[a-z ]+[VER]",
                "iPhone": "iPhone.*CPU[a-z ]+[VER]",
                "iPod": "iPod.*CPU[a-z ]+[VER]",
                "Kindle": "Kindle\/[VER]",
                "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
                "Coast": ["Coast\/[VER]"],
                "Dolfin": "Dolfin\/[VER]",
                "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
                "Fennec": "Fennec\/[VER]",
                "Edge": "Edge\/[VER]",
                "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
                "NetFront": "NetFront\/[VER]",
                "NokiaBrowser": "NokiaBrowser\/[VER]",
                "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
                "Opera Mini": "Opera Mini\/[VER]",
                "Opera Mobi": "Version\/[VER]",
                "UCBrowser": ["UCWEB[VER]", "UC.*Browser\/[VER]"],
                "MQQBrowser": "MQQBrowser\/[VER]",
                "MicroMessenger": "MicroMessenger\/[VER]",
                "baiduboxapp": "baiduboxapp\/[VER]",
                "baidubrowser": "baidubrowser\/[VER]",
                "SamsungBrowser": "SamsungBrowser\/[VER]",
                "Iron": "Iron\/[VER]",
                "Safari": ["Version\/[VER]", "Safari\/[VER]"],
                "Skyfire": "Skyfire\/[VER]",
                "Tizen": "Tizen\/[VER]",
                "Webkit": "webkit[ \/][VER]",
                "PaleMoon": "PaleMoon\/[VER]",
                "Gecko": "Gecko\/[VER]",
                "Trident": "Trident\/[VER]",
                "Presto": "Presto\/[VER]",
                "Goanna": "Goanna\/[VER]",
                "iOS": " \\bi?OS\\b [VER][ ;]{1}",
                "Android": "Android [VER]",
                "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
                "BREW": "BREW [VER]",
                "Java": "Java\/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE\/[VER]",
                "Windows NT": "Windows NT [VER]",
                "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
                "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
            },
            "utils": {
                "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
                "DesktopMode": "WPDesktop",
                "TV": "SonyDTV|HbbTV",
                "WebKit": "(webkit)[ \/]([\\w.]+)",
                "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                "Watch": "SM-V700"
            }
        };

        // following patterns come from http://detectmobilebrowsers.com/
        impl.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };

        var hasOwnProp = Object.prototype.hasOwnProperty,
            isArray;

        impl.FALLBACK_PHONE = 'UnknownPhone';
        impl.FALLBACK_TABLET = 'UnknownTablet';
        impl.FALLBACK_MOBILE = 'UnknownMobile';

        isArray = 'isArray' in Array ? Array.isArray : function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        };

        function equalIC(a, b) {
            return a != null && b != null && a.toLowerCase() === b.toLowerCase();
        }

        function containsIC(array, value) {
            var valueLC,
                i,
                len = array.length;
            if (!len || !value) {
                return false;
            }
            valueLC = value.toLowerCase();
            for (i = 0; i < len; ++i) {
                if (valueLC === array[i].toLowerCase()) {
                    return true;
                }
            }
            return false;
        }

        function convertPropsToRegExp(object) {
            for (var key in object) {
                if (hasOwnProp.call(object, key)) {
                    object[key] = new RegExp(object[key], 'i');
                }
            }
        }

        function prepareUserAgent(userAgent) {
            return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
        }

        (function init() {
            var key,
                values,
                value,
                i,
                len,
                verPos,
                mobileDetectRules = impl.mobileDetectRules;
            for (key in mobileDetectRules.props) {
                if (hasOwnProp.call(mobileDetectRules.props, key)) {
                    values = mobileDetectRules.props[key];
                    if (!isArray(values)) {
                        values = [values];
                    }
                    len = values.length;
                    for (i = 0; i < len; ++i) {
                        value = values[i];
                        verPos = value.indexOf('[VER]');
                        if (verPos >= 0) {
                            value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                        }
                        values[i] = new RegExp(value, 'i');
                    }
                    mobileDetectRules.props[key] = values;
                }
            }
            convertPropsToRegExp(mobileDetectRules.oss);
            convertPropsToRegExp(mobileDetectRules.phones);
            convertPropsToRegExp(mobileDetectRules.tablets);
            convertPropsToRegExp(mobileDetectRules.uas);
            convertPropsToRegExp(mobileDetectRules.utils);

            // copy some patterns to oss0 which are tested first (see issue#15)
            mobileDetectRules.oss0 = {
                WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
                WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
            };
        })();

        /**
         * Test userAgent string against a set of rules and find the first matched key.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
         * @private
         */
        impl.findMatch = function (rules, userAgent) {
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        return key;
                    }
                }
            }
            return null;
        };

        /**
         * Test userAgent string against a set of rules and return an array of matched keys.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
         * @private
         */
        impl.findMatches = function (rules, userAgent) {
            var result = [];
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        result.push(key);
                    }
                }
            }
            return result;
        };

        /**
         * Check the version of the given property in the User-Agent.
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {String} version or <tt>null</tt> if version not found
         * @private
         */
        impl.getVersionStr = function (propertyName, userAgent) {
            var props = impl.mobileDetectRules.props,
                patterns,
                i,
                len,
                match;
            if (hasOwnProp.call(props, propertyName)) {
                patterns = props[propertyName];
                len = patterns.length;
                for (i = 0; i < len; ++i) {
                    match = patterns[i].exec(userAgent);
                    if (match !== null) {
                        return match[1];
                    }
                }
            }
            return null;
        };

        /**
         * Check the version of the given property in the User-Agent.
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {Number} version or <tt>NaN</tt> if version not found
         * @private
         */
        impl.getVersion = function (propertyName, userAgent) {
            var version = impl.getVersionStr(propertyName, userAgent);
            return version ? impl.prepareVersionNo(version) : NaN;
        };

        /**
         * Prepare the version number.
         *
         * @param {String} version
         * @return {Number} the version number as a floating number
         * @private
         */
        impl.prepareVersionNo = function (version) {
            var numbers;

            numbers = version.split(/[a-z._ \/\-]/i);
            if (numbers.length === 1) {
                version = numbers[0];
            }
            if (numbers.length > 1) {
                version = numbers[0] + '.';
                numbers.shift();
                version += numbers.join('');
            }
            return Number(version);
        };

        impl.isMobileFallback = function (userAgent) {
            return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        };

        impl.isTabletFallback = function (userAgent) {
            return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        };

        impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
            if (cache.mobile !== undefined) {
                return;
            }
            var phone, tablet, phoneSized;

            // first check for stronger tablet rules, then phone (see issue#5)
            tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
            if (tablet) {
                cache.mobile = cache.tablet = tablet;
                cache.phone = null;
                return; // unambiguously identified as tablet
            }

            phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
            if (phone) {
                cache.mobile = cache.phone = phone;
                cache.tablet = null;
                return; // unambiguously identified as phone
            }

            // our rules haven't found a match -> try more general fallback rules
            if (impl.isMobileFallback(userAgent)) {
                phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
                if (phoneSized === undefined) {
                    cache.mobile = impl.FALLBACK_MOBILE;
                    cache.tablet = cache.phone = null;
                } else if (phoneSized) {
                    cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                    cache.tablet = null;
                } else {
                    cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                    cache.phone = null;
                }
            } else if (impl.isTabletFallback(userAgent)) {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            } else {
                // not mobile at all!
                cache.mobile = cache.tablet = cache.phone = null;
            }
        };

        // t is a reference to a MobileDetect instance
        impl.mobileGrade = function (t) {
            // impl note:
            // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
            // When changes are made in Mobile_Detect.php, copy this method and replace:
            //     $this-> / t.
            //     self::MOBILE_GRADE_(.) / '$1'
            //     , self::VERSION_TYPE_FLOAT / (nothing)
            //     isIOS() / os('iOS')
            //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
            var $isMobile = t.mobile() !== null;

            if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            t.version('Android') > 2.1 && t.is('Webkit') ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS') >= 7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            t.is('Firefox') && t.version('Firefox') >= 12 ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada') >= 2.0 ||

            // UC Browser - Tested on Android 2.3 device
            (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome') >= 11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari') >= 5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox') >= 4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE') >= 7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera') >= 10 && !$isMobile) {
                return 'A';
            }

            if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
                return 'B';
            }

            if (
            // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry') < 5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
                return 'C';
            }

            //All older smartphone platforms and featurephones - Any device that doesn't support media queries
            //will receive the basic, C grade experience.
            return 'C';
        };

        impl.detectOS = function (ua) {
            return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        };

        impl.getDeviceSmallerSide = function () {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        };

        /**
         * Constructor for MobileDetect object.
         * <br>
         * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
         * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
         *     <strong>Find information how to download and install:</strong>
         *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
         * </div>
         *
         * @example <pre>
         *     var md = new MobileDetect(window.navigator.userAgent);
         *     if (md.mobile()) {
         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
         *     }
         * </pre>
         *
         * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
         * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
         *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
         *        as phone.
         *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
         *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
         *        for Android</a>.<br>
         *        If you provide a value < 0, then this "fuzzy" check is disabled.
         * @constructor
         * @global
         */
        function MobileDetect(userAgent, maxPhoneWidth) {
            this.ua = prepareUserAgent(userAgent);
            this._cache = {};
            //600dp is typical 7" tablet minimum width
            this.maxPhoneWidth = maxPhoneWidth || 600;
        }

        MobileDetect.prototype = {
            constructor: MobileDetect,

            /**
             * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
             * <br>
             * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
             * <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
             * @function MobileDetect#mobile
             */
            mobile: function mobile() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.mobile;
            },

            /**
             * Returns the detected phone type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
             * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
             * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the phone family or producer, e.g. "iPhone"
             * @function MobileDetect#phone
             */
            phone: function phone() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.phone;
            },

            /**
             * Returns the detected tablet type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
             * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
             * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
             * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
             * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
             * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
             * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
             * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
             * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
             * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
             * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
             * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
             * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
             * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
             * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
             * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
             * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
             * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
             * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
             * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
             * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
             * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
             * GenericTablet</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
             * @function MobileDetect#tablet
             */
            tablet: function tablet() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.tablet;
            },

            /**
             * Returns the (first) detected user-agent string or <tt>null</tt>.
             * <br>
             * The returned user-agent is one of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin,
             * Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {String} the key for the detected user-agent or <tt>null</tt>
             * @function MobileDetect#userAgent
             */
            userAgent: function userAgent() {
                if (this._cache.userAgent === undefined) {
                    this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgent;
            },

            /**
             * Returns all detected user-agent strings.
             * <br>
             * The array is empty or contains one or more of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin,
             * Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
             * @function MobileDetect#userAgents
             */
            userAgents: function userAgents() {
                if (this._cache.userAgents === undefined) {
                    this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgents;
            },

            /**
             * Returns the detected operating system string or <tt>null</tt>.
             * <br>
             * The operating system is one of following keys:<br>
             * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
             * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
             *
             * @returns {String} the key for the detected operating system.
             * @function MobileDetect#os
             */
            os: function os() {
                if (this._cache.os === undefined) {
                    this._cache.os = impl.detectOS(this.ua);
                }
                return this._cache.os;
            },

            /**
             * Get the version (as Number) of the given property in the User-Agent.
             * <br>
             * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
             *          Be careful when comparing this value with '==' operator!
             * @function MobileDetect#version
             */
            version: function version(key) {
                return impl.getVersion(key, this.ua);
            },

            /**
             * Get the version (as String) of the given property in the User-Agent.
             * <br>
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
             *
             * @function MobileDetect#versionStr
             */
            versionStr: function versionStr(key) {
                return impl.getVersionStr(key, this.ua);
            },

            /**
             * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
             *
             * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
             *        tablet family.<br>
             *        For a complete list of possible values, see {@link MobileDetect#userAgent},
             *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
             *        Additionally you have following keys:<br>
             * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
             *
             * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
             *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
             * @function MobileDetect#is
             */
            is: function is(key) {
                return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
            },

            /**
             * Do a quick test against navigator::userAgent.
             *
             * @param {String|RegExp} pattern the pattern, either as String or RegExp
             *                        (a string will be converted to a case-insensitive RegExp).
             * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
             * @function MobileDetect#match
             */
            match: function match(pattern) {
                if (!(pattern instanceof RegExp)) {
                    pattern = new RegExp(pattern, 'i');
                }
                return pattern.test(this.ua);
            },

            /**
             * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
             * <br>
             * Obviously this method makes sense in browser environments only (not for Node.js)!
             * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
             *        The argument is optional and if not present or falsy, the value of the constructor is taken.
             * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
             *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
             *          Will always return <code>undefined</code> server-side.
             */
            isPhoneSized: function isPhoneSized(maxPhoneWidth) {
                return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
            },

            /**
             * Returns the mobile grade ('A', 'B', 'C').
             *
             * @returns {String} one of the mobile grades ('A', 'B', 'C').
             * @function MobileDetect#mobileGrade
             */
            mobileGrade: function mobileGrade() {
                if (this._cache.grade === undefined) {
                    this._cache.grade = impl.mobileGrade(this);
                }
                return this._cache.grade;
            }
        };

        // environment-dependent
        if (typeof window !== 'undefined' && window.screen) {
            MobileDetect.isPhoneSized = function (maxPhoneWidth) {
                return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
            };
        } else {
            MobileDetect.isPhoneSized = function () {};
        }

        // should not be replaced by a completely new object - just overwrite existing methods
        MobileDetect._impl = impl;

        MobileDetect.version = '1.4.3 2018-09-08';

        return MobileDetect;
    }); // end of call of define()
})(function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) {
            module.exports = factory();
        };
    } else if (true) {
        return __webpack_require__(8);
    } else if (typeof window !== 'undefined') {
        return function (factory) {
            window.MobileDetect = factory();
        };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
}());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

var Mailchimp = function () {
  function Mailchimp() {
    _classCallCheck(this, Mailchimp);

    this.mobileThreshold = 601;

    // Bind functions
    this.onReady = this.onReady.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.successMessage = this.successMessage.bind(this);

    $(window).on('ajaxSuccess', this.onReady); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    $(document).ready(this.onReady);
  }

  _createClass(Mailchimp, [{
    key: 'onReady',
    value: function onReady() {
      this.$form = $('#mailchimp-form');

      if (WP.mailchimp === null) {
        $('#mailchimp-form').remove();
        console.error('mailchimp action null');
      } else if (this.$form.length && WP.mailchimp !== null) {
        this.$email = $('#mailchimp-email');
        this.$reply = $('#mailchimp-response');

        // Bind form submit event
        this.$form.submit(this.submitForm);
      }
    }
  }, {
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();

      var data = {};

      // Get form data
      var dataArray = this.$form.serializeArray();

      // Create data object from form data
      $.each(dataArray, function (index, item) {
        data[item.name] = item.value;
      });

      this.handleMailchimpAjax(data, this.successMessage);

      // Prevent default submit functionality
      return false;
    }
  }, {
    key: 'handleMailchimpAjax',
    value: function handleMailchimpAjax(data, successCallback) {
      // Rewrite action URL for JSONP
      var url = WP.mailchimp.replace('/post?', '/post-json?').concat('&c=?');

      // Ajax post to Mailchimp API
      $.ajax({
        url: url,
        data: data,
        success: successCallback,
        dataType: 'jsonp',
        error: function error(resp, text) {
          console.log('mailchimp ajax submit error: ' + text);
        }
      });
    }

    /**
    * Handle response message
    */

  }, {
    key: 'successMessage',
    value: function successMessage(response) {
      var msg = '';
      var successMsg = WP.lang === 'en_US' ? 'You\'ve been successfully subscribed' : 'Has sido suscrito exitosamente';

      if (response.result === 'success') {

        // Success message
        msg = successMsg;

        // Set class .valid on form elements
        this.$reply.removeClass('error').addClass('valid');
        this.$email.removeClass('error').addClass('valid');

        this.$email.val('');
      } else {
        // Set class .error on form elements
        this.$email.removeClass('valid').addClass('error');
        this.$reply.removeClass('valid').addClass('error');

        // Make error message from API response
        var index = -1;

        try {
          var parts = response.msg.split(' - ', 2);

          if (parts[1] === undefined) {
            msg = response.msg;
          } else {
            var i = parseInt(parts[0], 10);

            if (i.toString() === parts[0]) {
              index = parts[0];
              msg = parts[1];
            } else {
              index = -1;
              msg = response.msg;
            }
          }
        } catch (e) {
          index = -1;
          msg = response.msg;
        }

        if (msg === 'An email address must contain a single @') {
          msg = WP.lang === 'en_US' ? 'Your email is missing the @' : 'A tu email le falta el @';
        } else if (msg === 'The domain portion of the email address is invalid (the portion after the @: )') {
          msg = WP.lang === 'en_US' ? 'Your email\'s domain doesn\'t look right' : 'El dominio de tu email no se ve correcto';
        } else if (msg === 'This email cannot be added to this list. Please enter a different email address.') {
          msg = WP.lang === 'en_US' ? 'Please use a different email' : 'Por favor use otro email';
        }
      }

      if (this.alreadySubscribed(msg)) {

        msg = successMsg;

        // Set class .valid on form elements
        this.$reply.removeClass('error').addClass('valid');
        this.$email.removeClass('error').addClass('valid');

        this.$email.val('');
      }

      // Show message
      this.$reply.html(msg);
    }
  }, {
    key: 'alreadySubscribed',
    value: function alreadySubscribed(msg) {
      var substring = "already subscribed";
      return msg.indexOf(substring) !== -1;
    }
  }]);

  return Mailchimp;
}();

exports.default = Mailchimp;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map