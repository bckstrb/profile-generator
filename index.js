const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
// let path = require("path");
// let generateHtml = require("./utils/generateHtml.js");

//create an empty array for employee data
const employeeData = [];

//create an array of initial questions
const questionData = async () => {
    const data = await inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your employee email address",
        },
        {
            type: "list",
            name: "role",
            message: "What do you want to do next",
            choices: ["Add Engineer", "Add Intern", "Build Team"]
        }
    ]);
}

if (data.role === "Manager") {
    const managerData = await inquirer
    .prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number"
        }
    ]);

    const newManager = new Manager (
        data.name,
        data.id,
        data.email,
        data.officeNumber
    );

    employeeData.push(newManager);

}else if (data.role === "Engineer") {
    const engineerData = await inquirer
    .prompt([
        {
            type: "input",
            name: "github",
            message: "Please enter your github URL"
        }
    ]);

    const newEngineer = new Engineer (
        data.name,
        data.id,
        data.email,
        data.github
    );

    employeeData.push(newEngineer);

}else if (data.role === "Intern") {
    const internData = await inquirer
    .prompt([
        {
            type: "input",
            name: "school",
            message: "Please enter the name of your school"
        }
    ]);

    const newIntern = new Intern (
        data.name,
        data.id,
        data.email,
        data.school
    );

    employeeData.push(newIntern);

}else 


      

