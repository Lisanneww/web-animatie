$("#Fly").click(function() {
    $("#bird5").animate({
        left: '-50%'
    }, 500, function() {
        $("#bird5").css('left', '150%');
        $("bird5").animate({
        left: '50%'
    }, 500);
    });
});

// Er functioneert hier iets niet, maar ik weet niet wat

