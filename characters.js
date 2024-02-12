$(document).ready(function() {

$('#back img').hover(function(){



    $(this).attr("src", "setting_game_img/back_btn1.png");
    $(this).css('width','7vw');
}, function() {
    $(this).attr("src", "setting_game_img/back_btn2.png");
});
$('#back').click(()=>{
    history.back();
});
});