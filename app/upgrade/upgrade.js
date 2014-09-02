angular.module('myApp.controllers')
    .controller('UpgradeController', ['$scope', function($scope) {
<<<<<<< HEAD

      function getAllTickets(){
=======
     
      $scope.allTickets = [];
      // $scope.getAllTickets =function(){
>>>>>>> upgrade
      Parse.initialize("6MOaLqbspioqwFGiWa7Zn7OXgfh7wa1lMYcji8mz", "5vY2KiRA8sW0FEKuaDvzDIeikDVX8lAKqAgiZwg1");

      var Ticket = Parse.Object.extend("Ticket");
      var query = new Parse.Query(Ticket);
<<<<<<< HEAD
      query.find({
      success: function(results) {
      // results is an array of Parse.Object.
      alert("Successfully retrieved " + results.length + " scores."); 
      $scope.allTickets = [];
        for(var i=0; i<results.length; i++)
        {
          $scope.allTickets.push(results[i].attributes);
        }
        
      },

      error: function(error) {
      // error is an instance of Parse.Error.
    }
});
  }

  getAllTickets();
  console.log($scope);
=======
      query.find().then(function(results){
      //   for(var i=0; i<results.length; i++)
      //   {
      //     $scope.allTickets.push(results[i].attributes);

      //   }
      $scope.allTickets = results;
      $scope.$apply();

      });
  // }


  
  // $scope.getAllTickets();
  console.log($scope);
  console.log($scope.allTickets);
>>>>>>> upgrade


}]);