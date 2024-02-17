$(document).ready(function() {

    var hatIndex = 1;

    var clothesIndex = 1;

    function setHatImages(hatIndex) {

        switch (hatIndex) {
            case 1:
                $('#hat img').attr("src", "clothes/pink_hat1.png");
                break;
            case 2:
                $('#hat img').attr("src", "clothes/green_hat1.png");
                break;
            case 3:
                $('#hat img').attr("src", "clothes/yellow_hat1.png");
                break;
            case 4:
                $('#hat img').attr("src", "clothes/blue_hat1.png");
                break;
            default:
                break;
        }
    }

    function setClothesImages(clothesIndex) {
        switch (clothesIndex) {
            case 1:
                $('#clothes img').attr("src", "clothes/pink1.png");
                break;
            case 2:
                $('#clothes img').attr("src", "clothes/green1.png");
                break;
            case 3:
                $('#clothes img').attr("src", "clothes/yellow1.png");
                break;
            case 4:
                $('#clothes img').attr("src", "clothes/blue1.png");
                break;
            default:
                break;
        }
    }

    $('#lower_arrow1 img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_lefthover.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_left.png");
    });

    $('#lower_arrow1').click(()=>{
        if (hatIndex > 1) {
            hatIndex -= 1;
        }
        setHatImages(hatIndex);
        console.log("Current hat: " + hatIndex);
        
    });

    $('#raise_arrow1 img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_righthover.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_right.png");
    });

    $('#raise_arrow1').click(()=>{
        if (hatIndex < 4) {
            hatIndex += 1;
        }
        setHatImages(hatIndex);
        console.log("Current hat: " + hatIndex);
    });

    ///////////////////////////////

    $('#lower_arrow2 img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_lefthover.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_left.png");
    });

    $('#lower_arrow2').click(()=>{
        if (clothesIndex > 1) {
            clothesIndex -= 1;
        }
        setClothesImages(clothesIndex);
        console.log("Current Difficulty: " + clothesIndex);
        
    });

    $('#raise_arrow2 img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_righthover.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_right.png");
    });

    $('#raise_arrow2').click(()=>{
        if (clothesIndex < 4) {
            clothesIndex += 1;
        }
        setClothesImages(clothesIndex);
        console.log("Current Difficulty: " + clothesIndex);
    });
    

$('#back img').hover(function(){

    $(this).attr("src", "setting_game_img/back_btn1.png");
    $(this).css('width','7vw');
}, function() {
    $(this).attr("src", "setting_game_img/back_btn2.png");
});
$('#back').click(()=>{
    var url = "start.html?";
    location.href=url;
});
});