 angular.module('myApp.controllers')
    .controller('InputController', ['$scope', function($scope) {
      
      $scope.asuntos = [
       {id: 1, name: 'Problema'},
       {id: 2, name: 'Queja'},
       {id: 3, name: 'Sugerencia'}
      ];

      $scope.servicios = [
       {id: 1, name: 'Residencial'},
       {id: 2, name: 'Business'},
       {id: 3, name: 'Metro Mesh'},
       {id: 4, name: 'Dedicated'}
      ];

      $scope.problemas = [
       {id: 1, name: 'Desconexion'},
       {id: 2, name: 'Lentitud'},
       {id: 3, name: 'Otro'},
      ];


      $scope.saveTickets = function(textarea){
        Parse.initialize("6MOaLqbspioqwFGiWa7Zn7OXgfh7wa1lMYcji8mz", "5vY2KiRA8sW0FEKuaDvzDIeikDVX8lAKqAgiZwg1");
        var Ticket = Parse.Object.extend("Ticket");
        var ticket = new Ticket();
        var desc = textarea;
                
        console.log($scope.seleccionServicio.name);
        ticket.set("nombre", $scope.name);
        ticket.set("apellido", $scope.apellido);
        ticket.set("email", $scope.email);
        ticket.set("celular", $scope.celular);
        ticket.set("asunto", $scope.seleccionAsuntos.name);
        ticket.set("servicio", $scope.seleccionServicio.name);
        ticket.set("problema", $scope.seleccionProblema.name);
        ticket.set("texto", desc);

   
        ticket.save(null, {
        success: function(ticket) {
        // Execute any logic that should take place after the object is saved.
        // alert('New object created with objectId: ' + ticket.id);
        },
        error: function(ticket, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and description.
        alert('Failed to create new object, with error code: ' + error.message);
        }
        });
      }
}]);