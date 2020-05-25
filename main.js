// $("#Fly").click(function() {
//     $(".svg").animate({
//         left: '-50%'
//     }, 500, function() {
//         $(".svg").css('left', '150%');
//         $("/svg").animate({
//         left: '50%'
//     }, 500);
//     });
// });

// Er functioneert hier iets niet, maar ik weet niet wat


// var Fly = document.querySelector("#bird5");
// console.log(Fly);

// Fly.addEventListener("click", toggle);

// function toggle(){
//     Fly.classList.add("click");
// }

var btn = document.getElementById('btn');
    btn.onclick = function () {
        var path = document.getElementById('bird5');
        var animate = document.createElementNS("http://www.w3.org/2000/svg","animate");
        animate.setAttribute('attributeName', 'd');
        animate.setAttribute('dur', 's');
        animate.setAttribute('fill', 'freeze');
        animate.setAttribute('values', 'M 10 10  L 40 20  20 40; M 30 10  L 10 40  40 30');
        path.appendChild(animate);
    }
