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

(function($){
  $.fn.stickySectionHeaders = function(options) {

    var settings = $.extend({
      stickyClass     : 'sticky',
      headlineSelector: 'strong'
    }, options);

    return $(this).each(function() {
      var $this = $(this);
      $(this).find('ul:first').bind('scroll.sticky', function(e) {
        $(this).find('> li').each(function() {
          var $this      = $(this),
              top        = $this.position().top,
              height     = $this.outerHeight(),
              $head      = $this.find(settings.headlineSelector),
              headHeight = $head.outerHeight();

          if (top < 0) {
            $this.addClass(settings.stickyClass).css('paddingTop', headHeight);
            $head.css({
              'top'  : (height + top < headHeight) ? (headHeight - (top + height)) * -1 : '',
              'width': $this.outerWidth() - $head.cssSum('paddingLeft', 'paddingRight')
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

})(jQuery);
