#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome....!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "whom would you like to interact with ?",
                choices: ["staff", "student", "exit"],
            },
        ]);
        if (ans.select == "staff") {
            console.log("you approach to staff Room. feel free to ask any question.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "enter the student's name you wish to engage with:",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello , i am ${name.name} nice to meet you...!`);
                console.log("new student added");
                console.log("current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`i am ${student.name}, nice to see you again...!`);
                console.log("Existing student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the Program...");
            process.exit();
        }
    } while (true);
};
programStart(Persons);
