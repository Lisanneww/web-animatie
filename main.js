$(".allBirds").click(function() {
    $(".allBirds").animate({
        left: '-100%'
    }, 500, function() {
        $(".allBirds").css('left', '150%');
        $(".allBirds").animate({
        left: '0%'
    }, 500);
    });
});



