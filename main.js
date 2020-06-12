function moveAllBirds() {
    $(".allBirds").animate({
        left: '-100%'
    }, 500, function () {
        $(".allBirds").css('left', '150%');
        $(".allBirds").animate({
            left: '0%'
        }, 500);
    });
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// Ik haal alle elementen op die in het <g> element zitten en ben op zoek naar alle <path> elementen zodat daaraan een transform/transition kan toekennen
function moveOneBird(bird) {

    switch (bird) {
        case 1:
            document.getElementById('bird1').style.animation = 'rotation 2s ease-out';
            break;
        case 2:
            document.getElementById('bird2').style.animation = 'rotation 2s ease-out';
            break;
        case 3:
            document.getElementById('bird3').style.animation = 'rotation 2s ease-out';
            break;
        case 4:
            document.getElementById('bird4').style.animation = 'rotation 2s ease-out';
            break;
        case 5:
            document.getElementById('bird5').style.animation = 'rotation 2s ease-out';
            break;
        case 6:
            document.getElementById('bird6').style.animation = 'rotation 2s ease-out';
            break;
        case 7:
            document.getElementById('bird7').style.animation = 'rotation 2s ease-out';
            break;
        case 8:
            document.getElementById('bird8').style.animation = 'rotation 2s ease-out';
            break;
    }


}

$(document).keydown(function (e) {
    switch (e.which) {
        case 32:    //Hele vogel vliegt weg wanneer op spacebar wordt geklikt
            moveAllBirds();
            break;
    }
});

