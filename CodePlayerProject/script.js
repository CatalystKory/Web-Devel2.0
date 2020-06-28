
// Mouseover
$(".toggleButton").hover(function() {
    $(this).addClass("highlightedButton")
}, function(){
    $(this).removeClass("highlightedButton")
}
);

// Toggle Selected Windows
$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
});



// Set Panel Height/Width
$(".panel").height($(window).height() - $("#header").height()- 15);

$(".panel").width(($(window).width() / 2) - 10);

// Output window
$("#htmlPanel").on('change keyup paste', function(){
    $("iframe").contents().find("html").html($("#htmlPanel").val());
})



