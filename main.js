$("#btn").click(function() {
    $("svg").animate({
        left: '-50%'
    }, 500, function() {
        $(".svg").css('left', '150%');
        $("/svg").animate({
        left: '50%'
    }, 500);
    });
});

// Er functioneert hier iets niet, maar ik weet niet wat


// var Fly = document.querySelector("#bird5");
// console.log(Fly);

// Fly.addEventListener("click", toggle);

// function toggle(){
//     Fly.classList.add("click");
// }
