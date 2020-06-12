function moveAllBirds() {
    $(".allBirds").click(function () {
        $(".allBirds").animate({
            left: '-100%'
        }, 500, function () {
            $(".allBirds").css('left', '150%');
            $(".allBirds").animate({
                left: '0%'
            }, 500);
        });
    });
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

// Ik haal alle elementen op die in het <g> element zitten en ben op zoek naar alle <path> elementen zodat daaraan een transform/transition kan toekennen
function moveFirstBird() {
    var listOfChildren = document.getElementById('bird1').childNodes;

    for (var child in listOfChildren) {
        if (listOfChildren[child].outerHTML && typeof listOfChildren[child] == 'object') {
            console.log("DIT IS EEN PATH" + listOfChildren[child]);
            // setAttributes(listOfChildren[child], {'transform': 'translate(-183.83 -56.32)', 'transition': 'all 1.5s ease'});
            listOfChildren[child].setAttribute('transform', 'translate(-183.83 -56.32)');
            listOfChildren[child].animate({
                transform: 'translate(-483.83 -56.32)'
            }, 500);
        }
    }
}

$(document).keydown(function (e) {
    switch (e.which) {
        case 32:    //Hele vogel vliegt weg wanneer op spacebar wordt geklikt
            $(".allBirds").animate({
                left: '-100%'
            }, 500, function () {
                $(".allBirds").css('left', '150%');
                $(".allBirds").animate({
                    left: '0%'
                }, 500);
            });
            break;
    }
});

