$(document).ready(function() {
    // 캐릭터 선택
    var character = $('.rhythme');

    var characterImages = [
        "characters_img/rhythme1.png",
        "characters_img/rhythme2.png",
        "characters_img/rhythme3.png",
        "characters_img/rhythme4.png"
    ];

    var currentCharacterIndex = 0;
    
  //bgm 시작
    var bgm = new Audio('sound_pack/Beautiful_Days.wav');
    var start_check;
    init();
    
     //key 눌렀을떄 게임시작
    document.addEventListener("keydown", function(event){
        if(!start_check){
            if (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K') { 
                startGame();

            }       
        }
    });

    var jumping = false;
    
    $(document).keydown(function(event) {

        if(!jumping){

        if (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K') { 
            JumpAction();

        }
    }
    });
  

    var imageInterval;

    //초기 점프 구현
    function JumpAction(){

        jumping = true;

        clearInterval(imageInterval);

        character.attr('src', characterImages[0]);
        imageInterval = setInterval(function() {
            currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
            character.attr('src', characterImages[currentCharacterIndex]);
        }, 100); 
        character.animate({top: '60%'}, 250 , 'linear')
                 .animate({top: '75%'}, 250, 'linear', function() {
                    character.attr('src', characterImages[currentCharacterIndex]);
                      
                    jumping = false;
                 });
    } 

    //게임시작
    function startGame(){
        start_check = true;
        bgm.play();     
        $('#image').css('animation-play-state', 'running');
        
    };
    //초기화 화면
    function init() {
        start_check = false;
        bgm.pause();
        $('#image').css('animation-play-state', 'paused');
        jumping = false;
        clearInterval(imageInterval);
        character.attr('src','game_img/start_character.png');
    }
});