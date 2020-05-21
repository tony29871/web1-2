
var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color',color); // jquery 사용
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
function nightDayHandler(value) {
    var target = document.querySelector('body')
    var garr = document.querySelectorAll('.skyblue')
    for (var i = 0; i < garr.length; i++) {
        garr[i].classList.toggle("lightgreen");
    }
    if (value == 'day') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        value = 'night';
    }
    else if (value == 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        value = 'day';
    }
    return value;
}
// $('a').css('color',color)