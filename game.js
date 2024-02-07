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

    var jumping = false;

    $(document).keydown(function(event) {

        if(!jumping){

        if (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K') { 
            JumpAction();

        }
    }
    });

    function JumpAction(){
        character.attr('src', characterImages[0]);

        character.animate({top: '60%'}, 250 , 'linear')
                 .animate({top: '75%'}, 250, 'linear', function() {
                    character.attr('src', characterImages[currentCharacterIndex]);
                 });
    }   

    var imageInterval = setInterval(function() {
        currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
        character.attr('src', characterImages[currentCharacterIndex]);
    }, 100); 

    function JumpAction(){

        jumping = true;

        clearInterval(imageInterval);

        character.attr('src', characterImages[0]);

        character.animate({top: '60%'}, 250 , 'linear')
                 .animate({top: '75%'}, 250, 'linear', function() {
                    character.attr('src', characterImages[currentCharacterIndex]);
                    imageInterval = setInterval(function() {
                        currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                        character.attr('src', characterImages[currentCharacterIndex]);
                    }, 100);
                    jumping = false;
                 });
    }   
});
