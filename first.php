<?php
  $servername="localhost";
  $username="root";
  $password="alkanagpal";

  $conn=new mysqli($servername,$username,$password)
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
   <script src="./js/script.js"></script>
   <title>Create Time-Table</title>
</head>
<body>
   <h1>Customize your Time-Table</h1>
   
      <input type="text" placeholder="Type Row Name" id="nrow">
      <button type="submit" id="row">Add Row</button>
      <input type="text" placeholder="Type Row Name" id="ncol">
      <button name="col" id='col'>Add Column</button>
   
   <table id="table">
   </table>


<button id='done'>Done</button>
<button id=''>Download PDF</button>

</body>
</html>