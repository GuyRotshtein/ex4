<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  <script src="./js/script.js"></script>
  <link rel="stylesheet" href="./css/style.css">
  <title>Thank you for shopping</title>
</head>
<body>
<div id="editBody">
  <div class="container">
    <div id="editContainer" class="row justify-content-center bg-light bg-opacity-75" id="contentArea">
      <div class="col-md-6 col-md-offset-3 text-center">
        <h1>Thank you for your order!</h1>
        <br><br>
        <h3>Here are your order details:</h3>
        <br><br><br>
        <div class="row justify-content-center">
          <h5>Shirt Size: </h5> <?php echo $_GET["size"]?>
        </div>
        <br>
        <div class = "row justify-content-center">
          <h5>Shirt Color: </h5><?php echo $_GET["color"]?>
        </div>
        <br>
        <div class = "row justify-content-center">
          <h5>Text: </h5><?php echo $_GET["shirtText"]?>
        </div>
        <br><br>
        <div class = "row justify-content-center"><h3>Status: </h3></div>
        <div class = "row justify-content-center">
          <p class="invalid-feedback">
          <?php
            if($_GET["size"] == "xxl")
                echo "ORDER CANCELED DUE TO SHORTAGES IN XXL SIZED SHIRTS";
            elseif($_GET["size"] == "l" && $_GET["color"] == "black")
                echo "ORDER CANCELED DUE TO SHORTAGES IN BLACK L SIZED SHIRTS";
            elseif($_GET["color"] == "blue")
                echo "ORDER CANCELED DUE TO SHORTAGES IN BLUE SHIRTS";
            else
                echo "ORDER BEING PREPARED";
          ?>
          </p>
        </div>
        <br><br><br>
        <div class = "row justify-content-center">
          <a id="goToEdit" href="./edit.html"> return to the shopping screen:</a>
        </div>
        <br>
      </div>
    </div>
  </div>
</div>
</body>
</html>