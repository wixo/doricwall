/*jshint laxcomma:true, smarttabs:true, forin:true, noarg:true, noempty:true, eqeqeq:true,
 laxbreak:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true,
  indent:4, maxerr:50 */
 
var doricModule = angular.module( 'me.wxo.doricwall', [] );

doricModule.directive( 'doricwall', function ( $rootScope, $parse, $timeout ) {

	"use strict";

	var compile
	  , link
	  , doric
	  , controller
	  ;

	// controller = function ( $scope ) {
	// 	console.log( $scope );
	// }

	doric = function ( givens ) {
		var elements  = givens.elements || elements
		  , columns   = []
		  , colCount  = givens.colCount
		  , cc        = givens.colCount
		  , parent    = givens.parent
		  , i         = 0
		  , container = $( document.createDocumentFragment() )
		  ;
		// console.log( $(parent) );
		// parent = $(parent);
		parent.empty();

		while ( colCount-- ) {
			var id = colCount;
			columns.push( $( document.createElement('div') )
			               .attr('class','dorios-column dorios-column-' + id)
			               .attr('data-dorios-id', id )
			               .appendTo( container ) );
		}

		elements.forEach( function ( item ) {
			$( item ).appendTo( columns[ i ] );
			i = i<cc-1 ? i + 1 : 0;
		} );

		container.prependTo( parent );
	};

	compile = function ( tElement, tAttrs, transclude ) {
		var rpt    = document.createAttribute('ng-repeat')
		  , holder = $(tElement)
		  , scope  = $rootScope.$new()
		  , items
		  ;

		rpt.nodeValue = tAttrs.element;
		tElement[0].children[0].attributes.setNamedItem(rpt);

		transclude( scope, function ( clone ) {
			console.log( clone[0].innerHTML );
		} )

		return function ( scope, element, attr ) {
			var rhs     = attr.element.split(' in ')[1];

			items = scope.items = $parse(rhs)(scope);
			console.log(scope.items);
		}

	}

	return { restrict   : 'E'
	       // , link       : link
	       // , controller : controller
	       , transclude : 'element'
	       , replace    : true
	       , scope      : true
	       , template   : '<div class="doricwall"><article class="doric-brick" ng-transclude></article></div>'
	       , compile    : compile
	       }
} );