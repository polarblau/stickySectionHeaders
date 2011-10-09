# Usage

Basic options
  
```javascript
$('#container').stickySectionHeaders();
```

Check out the [demo here](http://polarblau.github.com/stickySectionHeaders/).
  
Settings and defaults

```javascript
$('#container').stickySectionHeaders({
  stickyClass      : 'sticky',
  headlineSelector : 'strong'
});
```

Requires basic HTML structure

```html
<div id="container">
  <ul class="sections">
    <li>
      <strong>Section Headline 1</strong>
      <ul>
        <li id="id-1">Content line</li>
        <li id="id-2">Content line</li>
        <li id="id-3">Content line</li>
        <li id="id-4">Content line</li>
      </ul>
    </li>
    <li>
      <strong>Section Headline 2</strong>
      <ul>
        <li id="id-5">Content line</li>
        <li id="id-6">Content line</li>
      </ul>
    </li>
    <li>
      <strong>Section Headline 4</strong>
      <ul>
        <li id="id-14">Content line</li>
        <li id="id-15">Content line</li>
        <li id="id-16">Content line</li>
        <li id="id-17">Content line</li>
      </ul>
    </li>
  </ul>          
</div>
```

And some simple CSS to 

```css
/* Reset some list defaults for all lists */        
ul { 
  list-style: none; 
  margin: 0;
  padding: 0;
}

/* The main container */
#sticky-list  {
  height: 100px;
  overflow: hidden;
  position: relative;
}

/* The main list */
#sticky-list > ul {
  height: 100%;
  overflow: auto;
}

/* Section headers, defined through "headlineSelector" */
#sticky-list > ul > li strong {
  display: block;
}

/* Section headers when "sticky", defined through "stickyClass" */
#sticky-list > ul > li.sticky strong {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
```