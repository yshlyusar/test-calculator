app.directive('changeCalcBtn', function() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         $(element).click(function() {
                $(this).blur();
            })
      }
   };
});