##Backgrind-ResponsiveGrid## v0.1

An extension for [Backgrid.js](http://backgridjs.com/) to provide a better small-screen-friendly expereince.
The extention was inspiered by (Zurb's Responsive Tables)[http://zurb.com/playground/responsive-tables].

##Usage##
Use it the same way you would use Backgrid.Grid, but when creating an instance extend from Backgrind.Extenssion.ResponsiveGrid.

```javascript
var myFlexGrid = new Backgrid.Extension.ResponsiveGrid({
     columns: columns,
     collection: territories
});
```

##License##
Copyright (c) 2013 Maurice Williams
Licensed under [MIT License](http://opensource.org/licenses/MIT)