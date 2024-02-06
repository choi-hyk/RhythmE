$(document).ready(function() {
    // 캐릭터 선택
    var character = $('.rhythme');

    var characterImages = [ "characters_img/rhythme1.png",
    "characters_img/rhythme2.png",
    "characters_img/rhythme3.png",
    "characters_img/rhythme4.png"];

    var currentCharacterIndex = 0;

    setInterval(function() {
        currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
        character.attr('src', characterImages[currentCharacterIndex]);
    }, 100); 
    
});