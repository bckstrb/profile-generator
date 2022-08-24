function generateHtml (data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/18df1bb9a5.js" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
    
    <div class="jumbotron bg-secondary">
        <h1 class="display-3 text-center text-white">My Team</h1>
    </div>
    
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body bg-dark">
            
            <h3 class="card-title text-center text-white"></i>Manager</h3>
            <p class="card-text text-center text-white">Name</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email Address</li>
                <li class="list-group-item">Office Number</li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body bg-dark">
            <h3 class="card-title text-center text-white">Engineer</h3>
            <p class="card-text text-center text-white">Name</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email Address</li>
                <li class="list-group-item">Github URL</li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body bg-dark">
            <h3 class="card-title text-center text-white">Intern</h3>
            <p class="card-text text-center text-white">Name</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email Address</li>
                <li class="list-group-item">School</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    
        
    </body>
    </html>
    `
}

module.exports = generateHtml;