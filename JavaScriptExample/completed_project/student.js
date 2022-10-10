
export class Student {
    constructor(firstname,lastname,major,gpa){
        this.firstname = firstname;
        this.lastname = lastname;
        this.major = major;
        this.gpa = gpa;
    }

    get firstName() {
        return this.firstname;
    }

    set firstName(fn) {
        this.firstname = fn;
    }

    get lastName() {
        return this.lastname;
    }

    set lastName(lm) {
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