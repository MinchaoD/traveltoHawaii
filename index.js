$(document).ready(function(){
    
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

});

    const date = new Date(); 
    const year = date.getFullYear();
    
    document.getElementById("year").innerHTML= "copyright © " + year;

    document.getElementById("searchBtn").addEventListener('mouseenter', makeBlack);
    document.getElementById("searchBtn").addEventListener('mouseout', makegray);
  
    function makeBlack() {
        document.getElementById("searchBtn").style.background = 'black';
    }

    function makegray() {
        document.getElementById("searchBtn").style.background = "gray";
    }
