// Code goes here

var app = angular.module("app", []);

app.controller("watcher", function($scope){
  $scope.name = "Rishi";
  $scope.counter = 0;
  $scope.$watch('name',function(newval , oldval){
    $scope.counter = $scope.counter +1;
  });
});

app.controller("digester", function($scope){
  $scope.obj = {value : 1};
  $('#digest').click(function() {
    console.log("Digest Triggered");
    console.log($scope.obj.value++);
    $scope.$digest();
  });
});


app.controller("applyer", function($scope){
  $scope.datetime = new Date();
  $scope.updateTime = function(){
    $scope.datetime = new Date();
  }
  
  document.getElementById("updateTimeButton").addEventListener('click',
  function(){
    $scope.$apply(function(){
      console.log("update time clicked");
      $scope.datetime = new Date();
      console.log($scope.datetime);
    });
  });
});