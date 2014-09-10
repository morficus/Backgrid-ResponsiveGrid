/**
 * ResponsiveGrid is an enhancement to the base Backgrid.Grid class which improves its usability on small-screens
 * such as phones or portrait-mode tablets.
 *
 * @class Backgrid.Extension.ResponsiveGrid
 * @extends Backgrid.Grid
 */
(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    // AMD (+ global for extensions)
    define(["jquery", "underscore", "backbone", "backgrid"], function ($, _, Backbone, Backgrid) {
      return (root.Backgrid.Extension.ResponsiveGrid = factory($, _, Backbone, Backgrid));
    });
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("jquery"), require("underscore"), require("backbone"), require("backgrid"));
  } else {
    // Browser
    root.Backgrid.Extension.ResponsiveGrid = factory(root.$, root._, root.Backbone, root.Backgrid);
  }}(this, function ($, _, Backbone, Backgrid) {

  var ResponsiveGrid = Backgrid.Grid.extend({

    /** @property {boolean} is the table in a state that calls for pinned columns? */
    isPinnable : false,

    /** @property {boolean} are the columns already pinned? */
    isPinned : false,

    /** @property {Number} screen size at which 'isPinnable' will flip to true */
    minScreenSize : 797,

    /** @property {Number} number of columns to ping */
    columnsToPin : 1,

    /**
     * Initializer.
     *
     * @param  {Object} options
     * @param {Number} options.minScreenSize custom screen size at which 'isPinnable' will flip to true
     */
    initialize : function( options )
    {
      Backgrid.Grid.prototype.initialize.call(this, options);

      this.minScreenSize = options.minScreenSize || this.minScreenSize;
      this.columnsToPin = options.columnsToPin || this.columnsToPin;

      this.body.collection.on('backgrid:refresh', this.pinColumns, this);
      this.header.collection.on('backgrid:sort', this.pinColumns, this);

      $(window).on('resize', {'grid' : this}, this.setSwitchable);

      this.setSwitchable({});
    },

    /**
     * Modifies the table to freeze the first column of the grid.
     *
     * @return {boolean} indicating if the column(s) was successfully pinned or not
     */
    pinColumns : function( )
    {
      //deep-lone the entire table - this will later turn into the pinned columns
      var  $originalTable = this.$el,
          $tableCopy = $originalTable.clone(true);

      //check if the table needs to be made into "small-screen-mode" AND if the grid is already present on the screen, if not then do nothing
      if( !this.isPinnable || !$originalTable.is(':visible'))
      {
        return false;
      }

      //only wrap the element if the grid is not already in "small-screen-mode"
      if( !this.isPinned )
      {
        //wrap the original table with some special classes to enable the y-scrolling behavior
        $originalTable.wrap('<div class="grid-responsive-wrapper" />');
        $originalTable.wrap('<div class="grid-scrollable" />');
      }

      //skip the columns that we want to pin, and hide all the others
      var totalColumns = $tableCopy.find('th').length;
      //we need to do "+1" because using ":nth-child" starts with a zero-based index
      for(var i = this.columnsToPin + 1; i <= totalColumns; i++)
      {
        //$tableCopy.find('th:nth-child(' + i + '),td:nth-child(' + i + ')').hide();
        $tableCopy.find('th:nth-child(' + i + '),td:nth-child(' + i + ')').hide();
      }


      //remove all previous instances of pinned columns
      this.$el.parents('.grid-responsive-wrapper').find('.grid-pinned').remove();

      //append the cloned table to the wrapper
      this.$el.parents('.grid-responsive-wrapper').append($tableCopy);

      //wrap the clone in a div to make it behave as pinned columns
      $tableCopy.wrap('<div class="grid-pinned" />');

      this.isPinned = true;

      return true;

    },

    /**
     * Returns the table to its original unpinned state.
     * It's the opposite of pinColumns.
     *
     * @return {boolean} indicates if the column(s) was successfully unpinned or not
     */
    unpinColumns : function( )
    {
      var $originalTable = this.$el,
          $gridWrapper = this.$el.parents('.grid-responsive-wrapper');

      $originalTable.unwrap();
      $gridWrapper.find('.grid-pinned').remove();
      $originalTable.unwrap();

      this.isPinned = false;

      return true;
    },

    /**
     * Based on the screen size, sets the property to indicate if there is a need to pin the column(s) or not
     *
     * @param  {Object} event object The window resize event (optional)
     */
    setSwitchable : function( event )
    {
      var grid;

      if( _.isUndefined(event.data))
      {
        grid = this;
      }else{
        grid = event.data.grid;
      }

      if( $(window).width() < grid.minScreenSize )
      {
        grid.isPinnable = true;
        grid.pinColumns( );
      }else{
        grid.isPinnable = false;
        grid.unpinColumns( );
      }

    }
  });
  return ResponsiveGrid;
}));
