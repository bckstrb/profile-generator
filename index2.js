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
const questionData = [
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
    ];

    //create function to prompt inquirer
    // async function questionPrompt(questionData) {
    //     let questionDataAnswers = await inquirer.prompt(questionData);
    //     return questionDataAnswers;
    //   };
      

