// var bird5 = document.querySelector('.bird5');
// console.log(bird5);

// bird5.addEventListener('click', toggle)

// function toggle() {
//     console.log(event.keyCode); 
//     bird5.classList.add('click');
// }

$('.bird5').click(function() {
    $(this).animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).animate({
        left: '50%'
    }, 500);
    });
});