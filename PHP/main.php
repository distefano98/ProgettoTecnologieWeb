<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->


<html lang="it">
    <head>


        <title> WLCC Technology </title>


        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../CSS/style.css" type="text/css" rel="stylesheet">  
        <link href="../JS/slider.js"  type="text/javascript" >
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
   
    
    <body>
        
        <header class="header ">
            <a href="main.php" class="header__logo" > <img width="250" src="../UTILS/logo.png">  </a>
            
            <ul class="header__menu">
                <li class="header__menu__item"> <a href="main.php"> HOME </a></li>
                <li class="header__menu__item"> <a href=""> CATALOGO </a></li>
                <li class="header__menu__item"> <a href="contatti.php"> CONTATTI </a></li>
                <li class="header__menu__item"> <a href=""> ACCEDI </a></li>
            </ul>
            
        </header>
        
        <div class="cover">
            
            <div class="cover_slider" id="slide">
               
                <img class="cover_slider_item" id="slide1" src="" alt="" />
                <img class="cover_slider_item" id="slide2" src="" alt="" /> 
               
                <p></p>
            </div>
            <script src="../JS/slider.js"> </script>
            <script>$(document).ready(function()
                {     
               slideshow(5,1000,4000);});

            </script>
          
            
        </div>
        
        
        <footer class="footer ">
            <ul class="footer__menu">
                <li class="footer__menu__item"> <a href="main.php"> Home </a></li>
                <li class="footer__menu__item"> <a href=""> Chi siamo</a></li>
                <li class="footer__menu__item"> <a href=""> Dove Siamo </a></li>
                <li class="footer__menu__item"> <a href=""> Contattaci </a></li>
                <li class="footer__menu__item"> <a href=""> account </a></li>
            </ul>
            
        </footer>
    </body>
</html>
