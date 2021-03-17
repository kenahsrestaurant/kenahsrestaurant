/* Responsive menu function */
function Condense() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* On-scroll functions */
window.onscroll = function() {
    menuAppearance()
};

/*
function menuAppearance() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("myTopnav").className = "topnav";
    }
}
*/

/* W3 Menu */
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();

  /* Angular JS Reservations */
  var app = angular.module("myShoppingList", []); 
  app.controller("myCtrl", function($scope) {
      $scope.products = ["Milk", "Bread", "Cheese"];
      $scope.addItem = function () {
          $scope.errortext = "";
          if (!$scope.addMe) {return;}        
          if ($scope.products.indexOf($scope.addMe) == -1) {
              $scope.products.push($scope.addMe);
          } else {
              $scope.errortext = "The item is already in your shopping list.";
          }
      }
      $scope.removeItem = function (x) {
          $scope.errortext = "";    
          $scope.products.splice(x, 1);
      }
  });