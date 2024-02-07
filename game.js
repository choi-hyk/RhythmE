$(document).ready(function() {
    // 캐릭터 선택
    var character = $('.rhythme');

    var characterImages = [ "characters_img/rhythme1.png",
    "characters_img/rhythme2.png",
    "characters_img/rhythme3.png",
    "characters_img/rhythme4.png"];

    var currentCharacterIndex = 0;

    $('#image').css('animation-play-state', 'paused');
    


    //bgm 시작
    var bgm = new Audio('sound_pack/Beautiful_Days.wav');
    bgm.pause();

    //key 눌렀을떄 게임시작
    document.addEventListener("keydown", function(event){
        startGame();
    });
    
    function startGame(){
        bgm.play();
        setInterval(function() {
            currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
            character.attr('src', characterImages[currentCharacterIndex]);
        }, 100); 
        $('#image').css('animation-play-state', 'running');
    };
});




