const fs = require("fs");

//empty array that the cards will be pushed to 
let htmlArray = []

//create a function to create cards based on employee option 
function sort (employeeData) {
  for(let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].getRole() === "Manager") {
      htmlArray.push(`
      <div class="col-lg-3">
        <div class="card">
          <div class="card-body bg-dark">
            <h3 class="card-title text-center text-white">Manager <i class="fa-solid fa-address-book"></i></h3>
            <p class="card-text text-center text-white">${employeeData[i].name}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeData[i].id}</li>
                <li class="list-group-item">Email Address: ${employeeData[i].email}</li>
                <li class="list-group-item">Office Number: ${employeeData[i].officeNumber}</li>
              </ul>
          </div>
        </div>
      </div>`)
    }else if (employeeData[i].getRole() === "Engineer") {
        htmlArray.push(`
        <div class="col-lg-3">
        <div class="card">
          <div class="card-body bg-dark">
            <h3 class="card-title text-center text-white">Engineer <i class="fa-solid fa-robot"></i></h3>
            <p class="card-text text-center text-white">${employeeData[i].name}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeData[i].id}</li>
                <li class="list-group-item">Email Address: ${employeeData[i].email}</li>
                <li class="list-group-item">Github URL: ${employeeData[i].github}</li>
              </ul>
          </div>
        </div>
      </div>`)
    }else {
      htmlArray.push(`
      <div class="col-lg-3">
        <div class="card">
          <div class="card-body bg-dark">
            <h3 class="card-title text-center text-white">Intern <i class="fa-solid fa-computer"></i></h3>
            <p class="card-text text-center text-white">${employeeData[i].name}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeData[i].id}</li>
                <li class="list-group-item">Email Address: ${employeeData[i].email}</li>
                <li class="list-group-item">School: ${employeeData[i].school}</li>
              </ul>
          </div>
        </div>
      </div>`)
    }
  }
  fs.writeFileSync("./index.html", generateHtml())
}

//function to generate an HTML file 
function generateHtml () {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/18df1bb9a5.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    <body>
    
    <div class="jumbotron bg-secondary">
        <h1 class="display-3 text-center text-white">My Team</h1>
    </div>
    
    <div class="row">
    ${htmlArray}
      
      
    </div>
    
    <script src="index.js"></script>
    </body>
    </html>
    `
}

module.exports = sort;