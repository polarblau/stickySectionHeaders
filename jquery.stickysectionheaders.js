/*!
 * jQuery UI 1.8.2
 *
 * Copyright (c) 2010 Florian Plank (http://www.polarblau.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * USAGE:
 * 
 * 
 * $('#container').stickySectionHeaders({
 *   stickyClass      : 'sticky',
 *   headlineSelector : 'strong'
 * });
 */

(function($){
  $.fn.stickySectionHeaders = function(options) {
	
  	var settings = $.extend({
  		stickyClass: 'sticky',
  		headlineSelector: 'strong'
  	}, options);

  	return $(this).each(function() {
  		var $this = $(this);
  		$this.find('ul:first').scroll(function(e) {
  			$this.find('ul:first > li').each(function() {
  				var t = $(this).position().top;
  				var h = $(this).outerHeight();
  				var $s = $(this).find(settings.headlineSelector);
  				var sh = $s.outerHeight();
  				if (t < 0) {
  					$(this).addClass(settings.stickyClass).css('paddingTop', sh);
  					$s.css({
  						'width': $(this).outerWidth() - $s.cssSum('paddingLeft', 'paddingRight'),
  						'top': (h + t < sh) ? (sh - (t + h)) * -1 : ''
  					});
  				} else $(this).removeClass(settings.stickyClass).css('paddingTop', '');
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
  		sum += parseInt($self.css(e), 10);
  	});
  	return sum;
  };
})(jQuery);