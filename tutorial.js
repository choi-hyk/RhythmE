$(document).ready(function() {

    var queryParams = new URLSearchParams(window.location.search);
    
    console.log("tutorial 진입\n"+queryParams.toString());

    $('#back img').hover(function(){
        $(this).attr("src", "setting_game_img/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/back_btn2.png");
    });
    $('#back').click(()=>{
        var url = "setting_game.html?" + queryParams.toString();
        location.href=url;
    });


});