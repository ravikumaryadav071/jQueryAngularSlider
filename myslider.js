app.directive('mySlider', function(){
  return {
      scope: { range: '', value: ''},
      link: function (scope, el, attr) {
          $(el).slider({
              range: true,
              min: scope.range.min,
              max: scope.range.max,
              values: [scope.value.min, scope.value.max],
              slide: function (event, ui) {
                scope.$apply(function () {
                  scope.value.min = ui.values[0];
                  scope.value.max = ui.values[1];
                });
              }
          });
      }
  };
});
