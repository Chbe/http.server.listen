myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [{
        image: "img/Androidpic.png",
        link: "https://developer.android.com"
    },
    {
        image: "img/nodejs.png",
        link: "https://nodejs.org"
    }]
    
}]);