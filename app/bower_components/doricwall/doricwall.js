/*jshint laxcomma:true, smarttabs:true, forin:true, noarg:true, noempty:true, eqeqeq:true,
 laxbreak:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true,
  indent:4, maxerr:50 */

var doricModule = angular.module( 'me.wxo.doricwall', [] );

doricModule.directive( 'doricwall', [ '$timeout', function ( $timeout ) {
	"use strict";
	var link
	  , elements = []
	  , parent
	  , doric
	  , doricThis
	  ;

	doricThis = function ( doricVar ) {
		doric( { elements : elements
		       , colCount : +doricVar.replace(/col-/,'')
		       } );
	};

	doric = function ( givens ) {
		var elements  = givens.elements || elements
		  , columns   = []
		  , colCount  = givens.colCount
		  , cc        = givens.colCount
		  , i         = 0
		  , container = $( document.createDocumentFragment() )
		  ;

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

	link = function ( scope, element ) {
		elements.push( element );

		if (scope.$last === true) {

			$timeout(function () {
				parent = elements[0].parent().hasClass('doricwall') ? elements[0].parent() : elements[0].parent().parent() ;
				responsivar( { stylesheetName : 'responsivar'
				             , mediaQueries   : [ '@media screen and (min-width: 980px)'
				                                , '@media screen and (min-width: 768px) and (max-width: 979px)'
				                                , '@media screen and (min-width: 481px) and (max-width: 767px)'
				                                , '@media screen and (max-width: 480px)'
				                                ]
				             , change         : doricThis
				             } );

			});

		}
	};

	return { restrict   : 'A'
	       , link       : link
	       };

} ] );