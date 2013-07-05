##Backgrid-ResponsiveGrid

current vesion: v0.1

An extension for [Backgrid.js](http://backgridjs.com/) to provide a better small-screen-friendly expereince.  
The extention was inspiered by [Zurb's Responsive Tables](http://zurb.com/playground/responsive-tables).


##Dependencies
None

##Usage
Step 1 - add responsiveBackgrid.js to your page  
Step 2 - add responsiveBackgrid.css to your page  
Step 3 - use the same way as you would Backgrid.Grid, but use Backgrind.Extenssion.ResponsiveGrid during the instantiation:  
```javascript
var myFlexGrid = new Backgrid.Extension.ResponsiveGrid({
     columns: columns,
     collection: territories
});
```

##Configurations
The following properties can be passed in as part of the options object when instantiating the grid:
  - ```columnsToPin```: the number of columns to be pinned (defaults to 1)
  - ```minScreenSize```: the screen width at which the columns should become pinned (defaults to 767)  
    **pro tip**: if you want to always have pinned columns regardless of the screen size, set this to a large value (such as 4000)

##Styling
Use these CSS classes to customize the appearance of the pinned columns:
  - ```.grid-pinned```: the wrapper around the pinned columns.   
    **careful** not to change the ```positionn```, ```top``` or ```left``` properties else the pinned columns won't be so pinned anymore
  - ```.grid-scrollable```: when columns are pinned, the wrapper around the scrollable portion of the table has this wrapper class.
  - ```.grid-responsive-wrapper```: wraps both of the above-mentioned classes. It's basically what keeps the pinned columns in their place

##Limitations  
Pinned columns can not be edited in-line  
~~Clicking on the header of a pinned column does not trigger a sort~~


##License
Copyright (c) 2013 Maurice Williams  
Licensed under [MIT License](LICENSE-MIT)
