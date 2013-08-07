//
// Responsivar.js 0.0.1
// Store variables in your media queries
// http://github.com/wixo/responsivar.js
//

(function(e,g,f){f=function(){var c={cssTest:{},mQListeners:[],identifier:"",stylesheet:null,findMatch:function(a){var b=c.stylesheet,d;if(a.matches)for(b=b.sheet.cssRules,d=b.length;d--;)if(-1!==b[d].cssText.indexOf(a.media)){b=b[d].cssRules[0].selectorText.substring(1);c.identifier=b;a.cb(b);break}},init:function(a){var b=a.mediaQueries,d=b.length,f=a.change;c.stylesheet=g.getElementById(a.stylesheetName||"responsivar");if(e.matchMedia||e.msMatchMedia)for(;d--;)if(a=b[d].substr(7),a=e.matchMedia(a)||
e.msMatchMedia(a))a.cb=f,a.addListener(c.findMatch),c.findMatch(a),c.mQListeners.push(a)}};return{init:c.init}}();e.responsivar=f.init})(window,window.document);