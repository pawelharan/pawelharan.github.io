var main = function() {

    $(".item").click(function(){
      window.location=$(this).find("a").attr("href"); return false;
    });
       
}; 
    
 
$(document).ready(main);
    
    

/*
  $(".caption").mouseover(function() {
        $(this).toggleClass("overlay");
    });
       
*/