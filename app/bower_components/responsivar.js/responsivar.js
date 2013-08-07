//
// Responsivar.js 0.0.1
// Store variables in your media queries
// http://github.com/wixo/responsivar.js
//

/*jshint laxcomma:true, smarttabs:true, forin:true, noarg:true, noempty:true, eqeqeq:true, laxbreak:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, indent:4, maxerr:50 */
( function ( global, document, undefined ) {

	"use strict";

	var MQ = ( function () {

		var MQ = {}
		  , self = MQ
		  ;

		MQ.cssTest     = {};
		MQ.mQListeners = [];
		MQ.identifier  = '';
		MQ.stylesheet  = null;

		MQ.findMatch = function ( mql ) {
			var stylesheet = self.stylesheet
			  , rules
			  , rulesLength
			  , result
			  ;

			if ( mql.matches ) {
				rules = stylesheet.sheet.cssRules;
				rulesLength = rules.length;

				while ( rulesLength-- ) {
					if ( rules[rulesLength].cssText.indexOf( mql.media ) !== -1 ) {
						result = rules[rulesLength].cssRules[0].selectorText.substring(1);
						self.identifier = result;
						mql.cb( result );
						break;
					}
				}

			}

		};

		MQ.init = function ( givens ) {
			var mediaQueries = givens.mediaQueries
			  , mqLength     = mediaQueries.length
			  , callback     = givens.change
			  , fragment
			  , mql
			  ;

			self.stylesheet = document.getElementById( givens.stylesheetName || 'responsivar' );

			if ( global.matchMedia || global.msMatchMedia ) {

				while ( mqLength-- ) {
					fragment = mediaQueries[mqLength].substr(7);
					mql = global.matchMedia( fragment ) || global.msMatchMedia( fragment );

					if ( mql ) {
						mql.cb = callback;
						mql.addListener( self.findMatch );
						self.findMatch( mql );

						self.mQListeners.push( mql );
					}

				}

			}

		};

		return { init: self.init };

	} )();

	global.responsivar = MQ.init;
} )( window, window.document );