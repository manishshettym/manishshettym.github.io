// Collapsible button
var coll = document.getElementsByClassName("collapsible");
console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.parentElement.nextElementSibling
        // var content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Load website sections
$(function(){
    $(".news").load("sections/news.html");
    $(".experience").load("sections/experience.html"); 
    $(".publications").load("sections/publications.html");  
});


// TODO: Collapse a publications info
$(".pub-collapse-button").click(function(){
    if($(this).html() == "-"){
        $(this).css("transform", "rotateY(180deg)");
        $(this).css("background-color", "#3f51b5");   
        $(this).html("+");
    }
    else{
        $(this).css("transform", "rotate(0deg)");
        $(this).css("background-color", "#a31d1d");
        $(this).html("-");
    }

    $(this).nextAll(".pub-abstract").slideToggle();

    if($(this).parent().parent().nextAll(".pub-img-div").hasClass("human-toggled")){
        $(this).parent().parent().nextAll(".pub-img-div").slideToggle();
        $(this).parent().parent().nextAll(".pub-img-div").removeClass("human-toggled");                
    }

    else if($(this).parent().parent().nextAll(".pub-img-div").css("display") != "none"){
        $(this).parent().parent().nextAll(".pub-img-div").slideToggle();
        $(this).parent().parent().nextAll(".pub-img-div").addClass("human-toggled");
    }            
    
});
