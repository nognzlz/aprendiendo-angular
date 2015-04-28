app.controller = ('mainController', ['$scope', function($scope) {
	$scope.title = 'Top Sellers in Booccccks';
	$scope.promo = "REVIEW15";
	$scope.products =
	[
  	  { 
	    name: 'The Book of Trees', 
	    price: 19, 
	    pubdate: new Date('2014', '03', '08'), 
	    cover: 'img/the-book-of-trees.jpg',
	    likes: 0
	  }, 
	  { 
	    name: 'Program or be Programmed', 
	    price: 8, 
	    pubdate: new Date('2013', '08', '01'), 
	    cover: 'img/program-or-be-programmed.jpg',
		likes: 0
	  },
	  {
		name: 'El lechero',
	    price: 69,
	    pubdate: new Date('1991', '06', '26'),
	    cover: 'img/the-book-of-trees.jpg',
	    likes: 0
	  },
	  {
	    name: 'El mega sopeda',
	  	price: 69,
	  	pubdate: new Date('1991', '06', '26'),
	  	cover: 'img/the-book-of-trees.jpg',
	  	likes: 0
	  }
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);