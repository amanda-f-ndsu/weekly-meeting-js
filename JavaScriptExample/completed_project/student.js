
export class Student {
    constructor(firstname,lastname,major,gpa){
        this.firstname = firstname;
        this.lastname = lastname;
        this.major = major;
        this.gpa = gpa;
    }

    get FirstName() {
        return this.firstname;
    }

    set FirstName(fn) {
        this.firstname = fn;
    }

    get LastName() {
        return this.lastname;
    }

    set LastName(lm) {
        this.lastname = lm;
    }

    get Major() {
        return this.major;
    }

    set Major(m) {
        this.major = m;
    }

    get GPA() {
        return this.gpa;
    }

    set GPA(g) {
        this.gpa = g;
    }


}