$(document).ready(function(){

    var difficulty = 0;    //초기 난이도


    function setButtonImages(difficulty) {
        switch (difficulty) {
            case 0:
                $('#difficulty img').attr("src", "setting_game_img/easy_btn.png");
                break;
            case 1:
                $('#difficulty img').attr("src", "setting_game_img/normal_btn.png");
                break;
            case 2:
                $('#difficulty img').attr("src", "setting_game_img/hard_btn.png");
                break;
            default:
                break;
        }
    }
    $('#start img').hover(function(){
        $(this).attr("src", "setting_game_img/start_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "setting_game_img/start_btn.png");
    });

    $('#start').click(()=>{
        var url = "game.html?";
        location.href=url;
    });

    $('#lower_arrow img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_lefthover.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_left.png");
    });

    $('#lower_arrow').click(()=>{
        if (difficulty > 0) {
            difficulty -= 1;
        }
        console.log("Current Difficulty: " + difficulty);
        setButtonImages(difficulty);
        
    });

    $('#raise_arrow img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_righthover.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_right.png");
    });

    $('#raise_arrow').click(()=>{
        if (difficulty < 2) {
            difficulty += 1;
        }
        console.log("Current Difficulty: " + difficulty);
        setButtonImages(difficulty);
    });

    
});