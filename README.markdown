## Usage

### Basic options
  
```javascript
$('#sticky-list').stickySectionHeaders();
```

Check out the [demo here](http://polarblau.github.com/stickySectionHeaders/).
  
### Settings and defaults

```javascript
$('#sticky-list').stickySectionHeaders({
  stickyClass      : 'sticky',
  headlineSelector : 'strong'
});
```

### HTML

```html
<div id="sticky-list">
  <ul>
    <li>
      <strong>Section Headline 1</strong>
      <ul>
        <li>Content line</li>
        <li>Content line</li>
        <li>Content line</li>
        <li>Content line</li>
      </ul>
    </li>
    <li>
      <strong>Section Headline 2</strong>
      <ul>
        <li>Content line</li>
        <li>Content line</li>
      </ul>
    </li>
    <li>
      <strong>Section Headline 4</strong>
      <ul>
        <li>Content line</li>
        <li>Content line</li>
        <li>Content line</li>
        <li>Content line</li>
      </ul>
    </li>
  </ul>          
</div>
```

### CSS

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
}
```