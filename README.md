##Backgrind-ResponsiveGrid##

An extension for [Backgrid.js](http://backgridjs.com/) to provide a better small-screen-friendly expereince.
The extention was inspiered by (Zurb's Responsive Tables)[http://zurb.com/playground/responsive-tables].

current vesion: v0.1

##Usage##
Step 1 - add responsiveBackgrid.js to your page
Step 2 - add responsiveBackgrid.css to your page
Step 3 - use the same way as you would Backgrid.Grid, but use Backgrind.Extenssion.ResponsiveGrid during the instantiation like so:

```javascript
var myFlexGrid = new Backgrid.Extension.ResponsiveGrid({
     columns: columns,
     collection: territories
});
```

##License##
Copyright (c) 2013 Maurice Williams
Licensed under [MIT License](http://opensource.org/licenses/MIT)