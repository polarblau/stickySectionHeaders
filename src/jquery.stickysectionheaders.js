/*!
 * Sticky Section Headers
 *
 * Copyright (c) 2013 Florian Plank (http://www.polarblau.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * USAGE:
 *
 * $('#container').stickySectionHeaders({
 *   stickyClass      : 'sticky',
 *   headlineSelector : 'strong'
 * });
 *
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
  } else {
      // Browser globals
      factory(jQuery);
  }
}(function ($) {

  $.fn.stickySectionHeaders = function(options) {

    var settings = $.extend({
      stickyClass     : 'sticky',
      headlineSelector: 'strong'
    }, options);

    return $(this).each(function() {
      var $this     = $(this),
          $list     = $(this).find('ul,ol').first(),
          $children = $list.find('> li');

      $children.each(function() {
        $(this).data( "width", $(this).outerWidth() );
        $(this).data( "pad", $(this).cssSum("paddingLeft", "paddingRight") );
      });

      $list.on('scroll.sticky', function(e) {
        var listTop = $list.scrollTop();

        $children.each(function() {
          var $this      = $(this),
              top        = $this.position().top,
              height     = $this.outerHeight(),
              $head      = $this.find(settings.headlineSelector),
              headHeight = $head.outerHeight();

          if (top < 0) {
            $this.addClass(settings.stickyClass).css('paddingTop', headHeight);
            $head.css({
              'top'  : (height + top < headHeight) ? (headHeight - (top + height)) * -1 : '',
              'width': $this.data("width") - $this.data("pad")
            });
          } else {
            $this.removeClass(settings.stickyClass).css('paddingTop', '');
          }
        });
      });
    });
  };

  /* A little helper to calculate the sum of different
   * CSS properties
   *
   * EXAMPLE:
   * $('#my-div').cssSum('paddingLeft', 'paddingRight');
   */
  $.fn.cssSum = function() {
    var $self = $(this), sum = 0;
    $(arguments).each(function(i, e) {
      sum += parseInt($self.css(e) || 0, 10);
    });
    return sum;
  };

})
);
