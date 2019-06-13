<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Signin Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

<link href="bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="signin.css" rel="stylesheet">
  </head>

  <body class="text-center">
    <form class="form-signin" method="POST" action="/MyProject/support" > 
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputName" class="sr-only">Name</label>
      <input type="text" id="inputName" class="form-control" name="Name" placeholder="Name" required autofocus>
      
    </br>
    
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" name="email" placeholder="Email address" required autofocus>
    </br>
    
      <label for="inputProblem" class="sr-only">Problem</label>
      <input type="text" id="inputProblem" class="form-control" name="problem" placeholder="Problem" required autofocus>
    </br>
    
      <label for="inputDescription" class="sr-only">Description</label>
      <textarea id="inputDescription" class="form-control" name="description" placeholder="Description"  rows="7" cols="80">
    </textarea>
      </div>
      </br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </body>
</html>
