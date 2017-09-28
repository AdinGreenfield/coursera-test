// (function () {
// 'use strict';
//
//   angular.module('LunchChecker',[])
//   .controller('LunchCheckerController', LunchCheckerController)
//
//     LunchCheckerController.$inject=['$scope'];
//
//     function LunchCheckerController($scope) {
//
//       $scope.lunchMenu = "";
//       $scope.foods = "Please enter data first.";
//
//       $scope.getNumber = function () {
//         var list = [];
//         var string = $scope.lunchMenu;
//         list = string.split(',');
//         var count = 0;
//         for (var i = 0; i < list.length; i++) {
//           if(angular.equals(list[i], "") || angular.equals(list[i], " ")){
//             continue;
//           }
//           count++;
//         }
//         if(count == 0){
//             $scope.foods = "Please enter data first.";
//         }
//         else if (count <= 3) {
//             $scope.foods = "Enjoy";
//         }
//         else {
//             $scope.foods = "Too much!";
//         }
//       }
//     }
// }) ();
!function(){"use strict";function e(e){e.lunchMenu="",e.foods="Please enter data first.",e.getNumber=function(){var n=[],o=e.lunchMenu;n=o.split(",");for(var r=0,u=0;u<n.length;u++)angular.equals(n[u],"")||angular.equals(n[u]," ")||r++;0==r?e.foods="Please enter data first.":3>=r?e.foods="Enjoy":e.foods="Too much!"}}angular.module("LunchChecker",[]).controller("LunchCheckerController",e),e.$inject=["$scope"]}();
