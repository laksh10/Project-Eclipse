
var app=angular.module("eclipseModule", []);

app.controller("clearCtrl", function($scope, $http){
 $http.get("json/clearance.json")
    .then(function(response) {
      console.log(response);

        $scope.names = response.data.clearData;
    });



 var total=0;
$scope.add = function(index,cost,textbox){
  total=total+cost*textbox;
  $scope.total=total;
  $scope.laxmi1=false;
  $scope.laxmi2=true;
  $scope.hiddenbtn(index);
};
 
 $scope.minus=function(index, cost, textbox){

total=total-cost*textbox;
    $scope.total=total;
$scope.hiddenbtn(index);
 };
 $scope.hiddenbtn = function (index) {
 
        //alert("inside sub function      " + index +"------------"+ $scope.hiddenbtn[index]);
        if (angular.isUndefined($scope.hiddenbtn[index])) {
            $scope.hiddenbtn[index] = true;
        }
        else if (angular.equals($scope.hiddenbtn[index], false)) {
            $scope.hiddenbtn[index] = true;
            //$scope.items[i].itemval[index] = 1;
            //$scope.itemval[index] = 1;
        }
        else if (angular.equals($scope.hiddenbtn[index], true)) {
            $scope.hiddenbtn[index] = false;
        }
        else {
            $scope.hiddenbtn[index] = false;
        }
          //alert("outside sub function      " + index + "------------" + $scope.hiddenbtn[index]);
    };
});
