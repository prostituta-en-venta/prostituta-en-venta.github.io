<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Recibiendo datos</title>
  
  <style type="text/css">
    html {
      width: 100%;
      height: 100%;
    }
    body {
      width: 100%;
      min-height: 100%;
      padding: 0;
      margin: 0;
      background-color: #FFFFFF;
      font-family: sans-serif;
      
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>
<?php
$name = $_POST['name'];
$age = $_POST['age'];
echo $name;
echo $age;
?>
</body>
</html>
