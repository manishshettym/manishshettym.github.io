function collapse(e) {
    e.classList.toggle("active");
    var content = e.parentElement.nextElementSibling
    // var content = this.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// TODO: Collapse a publications info
$(".pub-collapse-button").click(function () {
    if ($(this).html() == "-") {
        $(this).css("transform", "rotateY(180deg)");
        $(this).css("background-color", "#3f51b5");
        $(this).html("+");
    }
    else {
        $(this).css("transform", "rotate(0deg)");
        $(this).css("background-color", "#a31d1d");
        $(this).html("-");
    }

    $(this).nextAll(".pub-abstract").slideToggle();

    if ($(this).parent().parent().nextAll(".pub-img-div").hasClass("human-toggled")) {
        $(this).parent().parent().nextAll(".pub-img-div").slideToggle();
        $(this).parent().parent().nextAll(".pub-img-div").removeClass("human-toggled");
    }

    else if ($(this).parent().parent().nextAll(".pub-img-div").css("display") != "none") {
        $(this).parent().parent().nextAll(".pub-img-div").slideToggle();
        $(this).parent().parent().nextAll(".pub-img-div").addClass("human-toggled");
    }

});
