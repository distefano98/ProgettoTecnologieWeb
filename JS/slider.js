
/* Argomenti funzione: 
       n -> il numero totale di foto
       t1 -> il tempo in millisecondi di transizione
       t2 -> il tempo in millisecondi di intervallo
*/
    function slideshow(n,t1,t2){
     /* inizializzo le variabili e gli elementi */
     var x = 0;
     var txt = 0;
     var stato = 1;
    
     $("#slide2").animate({"left":"100%"},0);
      
     $("#slide1").attr("src",fotografie(x,n));
     $("#slide p").html(scritte(txt,n));
     x++;
     $("#slide2").attr("src",fotografie(x,n));
     
     /* eseguo l'intervallo dello slide */
     var intervallo = setInterval(function(){
       x++;txt++;
       if(x>n-1){x=0;}
       if(txt>n-1){txt=0;}
       stato = cambiaSlide(x,n,stato,t1,txt);
     },t2);
    }

/* Argomenti funzione: 
       x -> la foto che si sta visualizzando 
       n -> il numero totale di foto
       stato -> la posizione dello slide
       t -> il tempo in millisecondi di transizione
       txt -> il testo che si sta visualizzando
*/ 
    function cambiaSlide(x,n,stato,t,txt){
      if(stato===1){
      var elemento1 = "#slide1";
      var elemento2 = "#slide2";
     }else{
      var elemento1 = "#slide2";
      var elemento2 = "#slide1";
     }
     $(elemento2).animate({"left":"0px"},t);
     $(elemento1).animate({"left":"-100%"},t,function(){
      $("#slide p").html(scritte(txt,n));
    
      $(elemento1).animate({"left":"100%"},0);
      
     });
     
     if(stato===1){stato=0;}else{stato=1;}
     return stato;
    }
    
    
    /*
     Argomenti funzione:
       x -> la foto che si sta visualizzando
       n -> il numero totale di foto
*/
    function fotografie(x,n){
     var foto = new Array(n);
     /* scrivere il path ed il nome delle foto che volere usare */
     foto[0] = "../UTILS/prova1.jpg";
     foto[1] = "../UTILS/prova2.jpg";
     foto[2] = "../UTILS/contenuto_background.jpg";
     foto[3] = "../UTILS/logo.png";
     
     
     return foto[x];
    }
    
/*
     Argomenti funzione:
       x -> la foto che si sta visualizzando
       n -> il numero totale di foto
*/
    function scritte(x,n){
     var testi = new Array(n);
     /* scrivere il testo che vuoi far apparire sulle foto */
     testi[0] = "testo1";
     testi[1] = "testo2";
     testi[2] = "testo3";
     testi[3] = "testo4";

     
     return testi[x];
    }