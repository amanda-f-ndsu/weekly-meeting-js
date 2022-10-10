export class Course{
    constructor(name,instructor,capacity,students){
        this.name = name;
        this.instructor = instructor;
        this.capacity = capacity;
        this.students = students;
    }

    get Name() {
        return this.name;
    }

    set Name(n) {
        this.name = n;
    }

    get Instructor() {
        return this.instructor;
    }

    set Instructor(i) {
        this.instructor = i;
    }

    get Capacity() {
        return this.capacity;
    }

    set Capacity(cap) {
        this.capacity = cap;
    }

    get Students() {
        return this.students;
    }

    set Students(st) {
        if(st.lenth <= this.capacity){
            this.students = st;
        }  
    }

    showPassing() {
        return this.students.filter(student => {
            return student.gpa >= 2.0;
        });
    }


    whoScoredBetter(student1,student2) {
      betterScore = Math.max(student1.gpa,student2.gpa)
      if(student1.gpa == betterScore && student2.gpa == betterScore){
         console.log("You guys both did good, I guess.");
      }
      else if(student1.gpa == betterScore){
        console.log(student1.name + " did better, get dunked on " + student2.name);
      }
      else{
        console.log(student2.name + " did better, get dunked on " + student1.name);
      }
    }

    getBestGrade() {
        let maxGrade = this.students[0].gpa;
        for(let i=1; i<this.students.length-1; i++){
            if(this.students[i].gpa > maxGrade){
                maxGrade = this.students[i].gpa;
            }
        }
            return maxGrade;
    }

    theCoolKids() {
        return this.students.filter(student => {
            return student.major.includes('CSCI');
        });
    }
}
