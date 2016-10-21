myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [{
        image: "img/socketio.png",
        link: "http://socket.io/"
    },
    {
        image: "img/nodejs.png",
        link: "https://nodejs.org"
    },
    {
        image: "img/Androidpic.png",
        link: "https://developer.android.com"
    }]
    
}]);