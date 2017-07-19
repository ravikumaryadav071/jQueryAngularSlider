app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "=",
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                //specify types here
                var valid_formats = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
                var file_type = changeEvent.target.files[0].type;
                reader.onload = function (loadEvent) {
                  if((file_type == valid_formats[0])||(file_type == valid_formats[1])||(file_type == valid_formats[2])||(file_type == valid_formats[3])){
                    scope.$apply(function () {
                      scope.fileread = {
                        doc: loadEvent.target.result,
                        name: changeEvent.target.files[0].name
                      };
                    });
                  }else{
                    scope.$apply(function () {
                      scope.fileread = false;
                    });
                  }
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);
