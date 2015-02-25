courseRoster.controller("courseCtrl", function CoursesCtrl($scope, CourseFactory){
  $scope.courses = CourseFactory.courses;
  $scope.CoursesFactory = CourseFactory;
});
