describe('stickysectionheaders', function () {
  
  // Helpers
  
  function hasNamesSpacedEvent(el, event, namespace) {
    var events = $(el).data("events");
    return events[event] !== undefined && events[event][0].namespace === namespace; 
  };
  
  function makeFixture() {
    var fixture = [];
    fixture.push('<div id="sticky-list" class="sticky-list">');
    fixture.push('<ul class="sections">');
    var sectionsCount = Math.ceil(Math.random() * 5) + 5;
    for (var i = 0; i < sectionsCount; i++) {
      fixture.push('<li><strong>Headline</strong><ul>');
      var listItemsCount = Math.ceil(Math.random() * 5) + 5;
      for (var j = 0; j < listItemsCount; j++) {
        fixture.push('<li>Content line</li>');
      }
      fixture.push('</ul></li>');
    }
    fixture.push('</ul>');
    fixture.push('</div>');
    return $(fixture.join(''));
  }
  
  // Custom matchers
  
  var isListStickified = function(input) {
    var isStickified = hasNamesSpacedEvent($(input).find("> ul"), "scroll", "sticky");
    return isStickified ? isStickified : null;
  };

  beforeEach(function () {
    this.addMatchers({
      toBeStickified: function() {
        return isListStickified(this.actual);
      },
      toBeNotStickified: function() {
        return !isListStickified(this.actual);
      }
    });
  });
  
  // Build and remove fixtures in setup and teardown
  
  beforeEach(function () {
    makeFixture().appendTo('body');
  });

  afterEach(function () {
    $("#sticky-list").remove();
  });

  //
  
  // TEST: Settings
  
  it('should use the default "sticky" for stickyClass', function() {
    var $list = $(".sticky-list").stickySectionHeaders();
    $list.find("ul").scrollTop(10);
    expect($list.find("> ul > li:first").hasClass("sticky")).toBeTruthy();
  });
  
  it('should allow setting the "stickyClass" property', function() {
    var $list = $(".sticky-list").stickySectionHeaders({ 'stickyClass' : 'foo' });
    $list.find("ul").scrollTop(10);
    expect($list.find("> ul > li:first").hasClass("foo")).toBeTruthy();
  });
  
  // TEST: CSS & Attrbutes 
  
  it('should assign the "stickyClass" to the top most list element when scrolled', function() {
    var $list = $(".sticky-list").stickySectionHeaders();
    $list.find("ul").scrollTop(10);
    expect($list.find("> ul > li:first").hasClass("sticky")).toBeTruthy();
  });
  
  it('should not assign the "stickyClass" to the top most list element when not scrolled', function() {
    var $list = $(".sticky-list").stickySectionHeaders();
    expect($list.find("> ul > li:first").hasClass("sticky")).toBeFalsy();
  });
  
  it('should "stick" the top most element to the top when scrolled', function() {
    var $list = $(".sticky-list").stickySectionHeaders();
    $list.find("ul").scrollTop(20);
    expect($list.find("> ul > li:first strong").css("top")).toEqual("0px");
  });
  
  
  // TEST: General jQuery plugin functionality 

  it('should be applicable to multiple elements', function() {
    var $list_1 = $("#sticky-list");
    var $list_2 = makeFixture().appendTo('body');
    $(".sticky-list").stickySectionHeaders();
    expect($list_1).toBeStickified();
    expect($list_2).toBeStickified();
    $list_2.remove();
  });
  
  it('should be chainable', function() {
    var $list = $("#sticky-list");
    $list.stickySectionHeaders().addClass('foo');
    expect($list.hasClass('foo')).toBeTruthy();
  });
  

  // TEST: Helper: cssShortForAllSides
  
  describe('cssSum', function(){
    
    var $div;
    
    beforeEach(function(){
      $div = $("<div/>");
    });
    
    afterEach(function(){
      $div.remove();
    });
    
    it('should return the sum of all properties', function() {
      $div.attr("style", "padding-left: 5px");
      expect($div.cssSum('paddingLeft', 'paddingRight')).toEqual(5);
    });
    
    it('should return the sum of all properties', function() {
      $div.attr("style", "padding-left: 5px; padding-right: 10px;");
      expect($div.cssSum('paddingLeft', 'paddingRight')).toEqual(15);
    });
    
  });

});