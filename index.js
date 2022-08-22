const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
let path = require("path")
let fileName = "index.html";
let createFooter = require("./utils/footer_html.js")
let generateEngineerHtml = require("./utils/engineer_html.js")

let managerQuestions = [{
    type: "input",
    name: "managerName", 
    message: "Please enter the manager's name",
},
{
    type: "input",
    name: "managerID",
    message: "Please enter manager ID",
},
{
    type: "input",
    name: "emailAddress",
    message: "Please enter your email address",
},
{
    type: "input",
    name: "officeNumber",
    message: "Please enter your office number",
}];

let engineerQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter your name",
},
{
    type: "input",
    name: "engineerID",
    message: "Please enter your office ID",
},
{
    type: "input",
    name: "engineerEmail",
    message: "Please enter your email address",
},
{
    type: "input",
    name: "github",
    message: "Please enter your Github URL",
}];

let internQuestions = [{
    type: "input",
    name: "internName",
    message: "Please enter your name",
},
{
    type: "input",
    name: "internID",
    message: "Please enter your office ID",
},
{
    type: "input",
    name: "internEmail",
    message: "Please enter your email address",
},
{
    type: "input",
    name: "school",
    message: "Please enter the name of your school",
}];

async function managerQuestionPrompt(managerQuestions) {
    let managerAnswers = await inquirer.prompt(managerQuestions)
    return managerAnswers
};

let employeeOptions = [{
    type: "list",
    name: "employeeOption",
    message: "Do you want to add an intern, engineer, or finish?",
    choices: ["Intern", "Engineer", "Build Team"],
}];

async function addEngineerOrIntern(employeeOptions) {
    let employeeChoice = await inquirer.prompt(employeeOptions)
    return employeeChoice
};

function engineerOrIntern(data) {
    console.log(data);
    if (data.employeeOption === "Engineer") {
        inquirer.prompt(engineerQuestions).then(engineerData => {
            let engineerObj = new Engineer(engineerData.name, engineerData.engineerID, engineerData.engineerEmail, engineerData.github)
            console.log(engineerObj)
            createOrAppendFile(fileName, generateEngineerHtml(engineerObj))
            engineerOrIntern(addEngineerOrIntern(employeeOptions)) 
        })
    }else if (data.employeeOption === "Intern") {
        inquirer.prompt(internQuestions).then(internData => {
            let internObj = new Intern(internData.internName, internData.internID, internData.internEmail, internData.school)
            createOrAppendFile("intern.html", internObj)
            engineerOrIntern(addEngineerOrIntern(employeeOptions))
        })
    }else if (data.employeeOption === "Build Team") {
        createOrAppendFile(fileName, createFooter())
        exit();
    }
}

function startQuestions() {
    managerQuestionPrompt(managerQuestions).then(data => {
        console.log(data)
        const newManager = new Manager(data.managerName, data.managerID, data.emailAddress, data.officeNumber)
        createOrAppendFile("manager.html", newManager)
    }) 
    addEngineerOrIntern(employeeOptions).then(options => {
        engineerOrIntern(options)
    })
};



function createOrAppendFile(fileName, data) {
    fs.appendFileSync(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err; 
        console.log("dataSavedSuccessfully")
    })
}

startQuestions();

