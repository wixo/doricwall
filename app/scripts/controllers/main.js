'use strict';

app.mainCtrl = app.controller( 'MainCtrl', function ( $scope ) {
	var currentId = 7;
	$scope.articles = [ { title   : '1'
	                    , content : 'some content1'
	                    }
	                  , { title   : '2'
	                    , content : 'some content2'
	                    }
	                  , { title   : '3'
	                    , content : 'some content3'
	                    }
	                  , { title   : '4'
	                    , content : 'some content4'
	                    }
	                  , { title   : '5'
	                    , content : 'some content5'
	                    }
	                  , { title   : '6'
	                    , content : 'some content6'
	                    }
	                  ]

	$scope.add = function () {
		$scope.articles.push( { title: currentId+'', content: $scope.articlesText || 'some content' } );
		currentId++;
	}
	$scope.remove = function () {
		$scope.articles.shift();
	}

} );