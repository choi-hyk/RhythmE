$(document).ready(function(){

    $('#play img').hover(function(){
        $(this).attr("src", "start_img/start_start_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_start_btn.png");
    });
    
    $('#characters img').hover(function(){
        $(this).attr("src", "start_img/start_characters_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_characters_btn.png");
    });
    
    $('#exit img').hover(function(){
        $(this).attr("src", "start_img/start_exit_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_exit_btn.png");
    });


    $('#play').click(()=>{
        var url = "game.html?";
        location.href=url;
    });
    $('#characters').click(()=>{
        var url = "characters.html?";
        location.href=url;
    });
});