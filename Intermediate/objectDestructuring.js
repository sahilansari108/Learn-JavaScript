// object Destructuring

const course = {
    courseId : 123,
    courseName : "Arts",
    courseInstructor  : " sahil"
}
console.log(course.courseInstructor);
const {courseInstructor} = course;
console.log(courseInstructor);
const{courseInstructor : instructor} = course; 
console.log(instructor);


// json format

// {
//     "name" : "sahil",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }