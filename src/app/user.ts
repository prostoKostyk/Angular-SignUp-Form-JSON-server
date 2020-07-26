export class User {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    email: string;
    password: string;

    constructor(firstName: string, lastName: string, gender: string, age: number, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}
