const characterImages = [
    "characters_img/rhythme1.png",
    "characters_img/rhythme2.png",
    "characters_img/rhythme3.png",
    "characters_img/rhythme4.png"
];

const shadowImages = [
    "game_img/shadow.png",
    "game_img/shadow2.png",
    "game_img/shadow3.png",
    "game_img/shadow4.png",
    "game_img/shadow5.png"
];

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
    
/////////////////////////////////////////////////////

$('#back img').hover(function(){

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

    var jumping = false;
    var character = $('.rhythme');
    var shadow = $('.shadow');
    var currentCharacterIndex = 0;
    var currentShadowIndex = 1;
    // 게임 시작 및 점프 이벤트 핸들러
    document.addEventListener("keydown", function(event) {
        
        if (!jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {
            JumpAction();
        }
    });


    var imageInterval;

    function JumpAction() {
        jumping = true;
        clearInterval(imageInterval);
        character.attr('src', characterImages[0]);
        shadow.attr('src', shadowImages[4]);
        character.animate({ top: '39%' }, 190, 'linear')
            .animate({ top: '43%' }, 150, 'linear', function() {
                character.attr('src', characterImages[0]);
                shadow.attr('src',shadowImages[0]);
                jumping = false;
                imageInterval = setInterval(function() {
                    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                    currentShadowIndex = (currentShadowIndex + 1) % (shadowImages.length-1);
                    character.attr('src', characterImages[currentCharacterIndex]);
                
                    shadow.attr('src',shadowImages[currentShadowIndex]);
                    
                }, 100);
            });
    }

    setTimeout(() => {
        JumpAction();
    },1000);


});