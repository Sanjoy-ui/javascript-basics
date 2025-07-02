const course ={
    coursename : "javascript basics",
    fee : "free",
    courseInstructor : "chai aur code"
}

console.log(course.courseInstructor);

const {courseInstructor} = course ;  // const {key er name} = object er name dole directly console a direct key name lekle oi print hoiya jai
console.log(courseInstructor);  

const {courseInstructor : teacher} = course;   //const {key er name : new nam} = object jodi kori object er key new nam diya print korle o print hoiya jaibo
console.log(teacher);