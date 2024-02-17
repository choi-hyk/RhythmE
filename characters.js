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
]

$(document).ready(function() {

   

    var jumping = false;
    var character = $('.rhythme');
    var shadow = $('.shadow');

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

    // // 게임 시작 및 점프 이벤트 핸들러
    // document.addEventListener("keydown", function(event) {
        
    //     if (!jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {
    //         JumpAction();
    //     }
    // });


    var imageInterval;

    function JumpAction() {
        jumping = true;
        clearInterval(imageInterval);
        character.attr('src', characterImages[0]);
        shadow.attr('src', shadowImages[4]);
        character.animate({ top: '39%' }, 190, 'linear')
            .animate({ top: '41%' }, 150, 'linear', function() {
                character.attr('src', characterImages[3]);
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

    setInterval(() => {
        JumpAction();
        clearInterval(imageInterval);
    },500);
    

});