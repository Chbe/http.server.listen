myApp.controller('androidController', ['$scope', 'Socket', function($scope, Socket){
    Socket.connect();
    $scope.users = [];
    $scope.messages = [];
    
    
    
    
    Socket.emit('request-users', {});
    
    Socket.on('users', function(data){
        $scope.users = data.users;
    });
    
    Socket.on('message', function(data){
        $scope.messages.push(data);
    });
    
    Socket.on('add-user', function(data){
        $scope.users.push(data.username);
        $scope.messages.push({username: data.username, message: 'has entered the channel'});
    });
    
    Socket.on('remove-user', function(data){
        $scope.users.splice($scope.users.indexOf(data.username), 1);
        $scope.messages.push({username: data.username, message: 'has left the channel'});
    });
    
    Socket.on('prompt-username', function(data){
        promptUsername(data.message);
    })
    
    $scope.$on('$locationChangeStart', function(event){
        Socket.disconnect(true);
    })
}])