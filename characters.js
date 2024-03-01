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

var hatColor = 'pink';

var clothesColor = 'pink';



var instructionInterval;

$(document).ready(function() {    
    var hatIndex = 1;

    var clothesIndex = 1;
    
    var index = 0;

    var instruction = $('.press');
var instructionImages = [
    "setting_game_img/press1.png",
    "setting_game_img/press2.png"
];

    instructionInterval = setInterval(function() {
    instruction.attr('src', instructionImages[index]);
    index = (index + 1) % instructionImages.length;
    }, 500);

    function setHatImages(hatIndex) {

        switch (hatIndex) {
            case 1:
                $('#hat img').attr("src", "clothes/pink_hat1.png");
                hat.attr("src", "clothes/pink_hat" + (currentHatIndex + 2) + ".png");
                console.log(currentHatIndex);
                hatColor = 'pink';
                break;
            case 2:
                $('#hat img').attr("src", "clothes/green_hat1.png");
                hat.attr("src", "clothes/green_hat" + (currentHatIndex + 2) + ".png");
                hatColor = 'green';
                break;
            case 3:
                $('#hat img').attr("src", "clothes/yellow_hat1.png");
                hat.attr("src", "clothes/yellow_hat" + (currentHatIndex + 2) + ".png");
                hatColor = 'yellow';
                break;
            case 4:
                $('#hat img').attr("src", "clothes/blue_hat1.png");
                hat.attr("src", "clothes/blue_hat" + (currentHatIndex + 2) + ".png");
                hatColor = 'blue';
                break;
            default:
                break;
        }
    }

    function setClothesImages(clothesIndex) {
        switch (clothesIndex) {
            case 1:
                $('#clothes img').attr("src", "clothes/pink1.png");
                clothes.attr("src", "clothes/pink" + (currentClothesIndex + 2) + ".png");
                clothesColor = 'pink';
                break;
            case 2:
                $('#clothes img').attr("src", "clothes/green1.png");
                clothes.attr("src", "clothes/green" + (currentClothesIndex + 2) + ".png");
                clothesColor = 'green';
                break;
            case 3:
                $('#clothes img').attr("src", "clothes/yellow1.png");
                clothes.attr("src", "clothes/yellow" + (currentClothesIndex + 2) + ".png");
                clothesColor = 'yellow';
                break;
            case 4:
                $('#clothes img').attr("src", "clothes/blue1.png");
                clothes.attr("src", "clothes/blue" + (currentClothesIndex + 2) +  ".png");
                clothesColor = 'blue';
                break;
            default:
                break;
        }
    }

    var resetHat = true;
    $('.wearing_hat').hide();
    var resetClothes = true;
    $('.wearing_clothes').hide();

    $('#reset_hat img').hover(function(){
        if(resetHat){
            $(this).attr("src", "setting_game_img/X1.png");
        }
        else{
            $(this).attr("src", "setting_game_img/X2.png");
        }
        $(this).css('width','5vw');
    }, function() {
        if(resetHat){
            $(this).attr("src", "setting_game_img/X2.png");
        }
        else{
            $(this).attr("src", "setting_game_img/X1.png");
        }
    });

    $('#reset_hat').click(()=>{

        if(!resetHat){
            resetHat = true;
            $('.wearing_hat').hide();
        } else {
            resetHat = false;
            $('.wearing_hat').show();
        }
    });

    $('#reset_clothes img').hover(function(){
        if(resetClothes){
            $(this).attr("src", "setting_game_img/X1.png");
        }
        else{
            $(this).attr("src", "setting_game_img/X2.png");
        }
        $(this).css('width','5vw');
    }, function() {
        if(resetClothes){
            $(this).attr("src", "setting_game_img/X2.png");
        }
        else{
            $(this).attr("src", "setting_game_img/X1.png");
        }
    });

    $('#reset_clothes').click(()=>{

        if(!resetClothes){
            resetClothes = true;
            $('.wearing_clothes').hide();
        } else {
            resetClothes = false;
            $('.wearing_clothes').show();
        }
        
    });

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
        console.log("Current hat: " + hatColor);
        
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
        console.log("Current hat: " + hatColor);
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
        console.log("Current Difficulty: " + clothesColor);
        
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
        console.log("Current Difficulty: " + clothesColor);
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
        var url = "index.html?";
        location.href=url;
    });

});
/////////////////////////////////////////////////////////

    var jumping = false;
    var character = $('.rhythme');
    var shadow = $('.shadow');
    var hat = $('.wearing_hat');
    var clothes = $('.wearing_clothes');

    var currentCharacterIndex = 0;
    var currentHatIndex = 0;
    var currentClothesIndex = 0;
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
        hat.attr('src',"clothes/" + hatColor + "_hat2.png");
        clothes.attr('src',"clothes/" + clothesColor + "2.png");

        hat.animate({ top: '39.1%' }, 190, 'linear')
        .animate({ top: '43.1%' }, 150, 'linear', function() {
            hat.attr('src',"clothes/" + hatColor + "_hat2.png");
            jumping = false;
        });

        clothes.animate({ top: '38.8%' }, 190, 'linear')
        .animate({ top: '42.8%' }, 150, 'linear', function() {
            clothes.attr('src',"clothes/" + clothesColor + "2.png");
            jumping = false;
        });

        character.animate({ top: '39%' }, 190, 'linear')
            .animate({ top: '43%' }, 150, 'linear', function() {
                character.attr('src', characterImages[0]);
                shadow.attr('src',shadowImages[0]);
                jumping = false;
                imageInterval = setInterval(function() {
                    currentClothesIndex = (currentClothesIndex + 1) % 4;
                    clothes.attr('src',"clothes/" + clothesColor + (currentClothesIndex + 2) + ".png");  
                    currentHatIndex = (currentHatIndex + 1) % 4;
                    hat.attr('src',"clothes/" + hatColor + "_hat" + (currentHatIndex + 2) + ".png");
                    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                    currentShadowIndex = (currentShadowIndex + 1) % (shadowImages.length-1);
                    character.attr('src', characterImages[currentCharacterIndex]);
                    shadow.attr('src',shadowImages[currentShadowIndex]);
                }, 100);
            });
    }

});