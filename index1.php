<?php
if(isset($_GET['string1']) && isset($_GET['string2'])){
  $string1 = $_GET['string1'];
  $string2 = $_GET['string2'];
  $text = file_get_contents("lcs.js");
  $orig_text = $text;
  $text = str_replace('YASHWANTH1', $string1, $text);
  $text = str_replace('YASHWANTH2', $string2, $text);
  if(isset($_GET['fstfwd'])){
  $text = str_replace('1997', '100', $text);
  }
  $id = uniqid();
  $file = fopen("lcs_".$id.".js","w");
  fwrite($file,$text);
  fclose($file);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Canvas Demo</title>
  <style type="text/css">
    canvas{
      border: 0px solid black;
    }
    body{
      margin: 0;
    }
    div {
      margin: 20px;
      float: left;
    }
  </style>
</head>
<body>
  <div>
    <form method=get action=./index1.php>
    String 1
    <input type="text" name="string1">
    String 2
    <input type="text" name="string2">
    Fast Forward
    <input type="checkbox" name="fstfwd" value="1">
    <input type="submit" id="submit_strings" value="Submit">
  </form>
  </div>
  <div><input type="button"; id = "get_lcs_btn"; value="GET LCS"></button></div>
  <canvas id="cvs2"; style="position:absolute; top:0px; left:50%";></canvas>
  <canvas id="cvs1"; style="position:absolute; top:5%; left:0px";></canvas>
  <!-- <script src="lcs.js"></script> -->
  <script src=<?php echo '"lcs_'.$id.'.js"' ?>></script>
</body>
</html>
