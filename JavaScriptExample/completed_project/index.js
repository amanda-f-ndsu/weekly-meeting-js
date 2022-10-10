import {Student} from "./student.js";
import {Course} from "./course.js";

// student object
const student = {
    firtName : "John",
    lastName: "Doe",
    major: "CSCI", 
    gpa: 3.0
}
console.log(student.firtName + " " + student.lastName + " -- " + student.major 
+ " -- " + student.gpa.toFixed(2));

student.major = "ENGL";

console.log(student.firtName + " " + student.lastName + " -- " + student.major 
+ " -- " + student.gpa.toFixed(2));

// instance of student and course class
let s1 = new Student("John","Doe","CSCI",3.0);
let s2 = new Student("Mary","Sue","ENGR",4.0);
let s3 = new Student("Adam","Rock","GEOL",3.5);
let csci161 = new Course("CSCI 161","Latimer",10,[s1,s2,s3]);

console.log("Best grade in this class " + csci161.getBestGrade().toFixed(2));
console.log(csci161.showPassing());
console.log(csci161.theCoolKids());

csci161.whoScoredBetter(s1,s2);
csci161.whoScoredBetter(s2,s3);

console.log("best grade is " + csci161.getBestGrade().toFixed(2));
