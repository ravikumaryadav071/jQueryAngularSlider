app.controller('sliderCtrl', ['$scope', function($scope){

  $scope.data = {
    range: {
      min: 0,
      max: 50
    },
    value: {
      min: 0,
      max: 100000
    }
  };
]);
