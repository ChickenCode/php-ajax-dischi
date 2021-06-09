<?php
    
    

include "server.php";

 function printAlbum($disco) {
     foreach ($disco as $album) {
         $poster = $album["poster"];
         $title = $album["title"];
         $author = $album["author"];
         $genre = $album["genre"];
         $year = $album["year"];
         echo "<div class='flex flex-column album'>";
         echo "<img src='$poster'>";
         echo "<h2>$title</h2>";
         echo "<p>$author</p>";
         echo "<p>$genre</p>";
         echo "<p>$year</p>";
         echo "</div>";
     }
   }

       
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
         <div class="container flex">
            
                 <?php
                     printAlbum($discs)
                 ?>
            
         </div>
    
 </body>
 </html> 