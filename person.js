class Person {
    constructor(firstname, lastname, dob, gender, age, phoneNo,) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.gender = gender;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    details() {
         console.log(`First Name : ${this.firstname}
Last Name : ${this.lastname}
Date of Birth : ${this.dob}
Gender : ${this.gender}
Age ; ${this.age}
PhoneNo : ${this.phoneNo}
`);
    }
}

let personDetails1 = new Person("Santhosh", "Naresh", "05/06/1998", "Male", "25", "6369292461")
console.log('First Person Details : ');
personDetails1.details()
console.log();
let personDetails2 = new Person("Nisha", "Santhosh", "29/10/2002", "Female", "21", "6342567546")
console.log('Second Person Details : ');
personDetails2.details()