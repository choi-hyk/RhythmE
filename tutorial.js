$(document).ready(function() {

    var queryParams = new URLSearchParams(window.location.search);
    
    console.log("tutorial 진입\n"+queryParams.toString());

    $('#back img').hover(function(){
        $(this).attr("src", "buttons_img/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "buttons_img/back_btn2.png");
    });
    $('#back').click(()=>{
        var url = "setting_game.html?" + queryParams.toString();
        location.href=url;
    });

    var queryParams = new URLSearchParams(window.location.search);

    var hatParameter = false;
    var clothesParameter = false;

    console.log("tutorial 진입\n"+queryParams.toString());

    if (queryParams.has("difficulty")) {

    const difficulty = parseInt(queryParams.get("difficulty")); //difficulty : 난이도
    console.log("난이도: " + difficulty);
 
    } else {
        // "difficulty" 파라미터가 없는 경우의 처리
        console.log("난이도 파라미터가 없습니다.");
    }
    

    if(queryParams.has("resetHat")){
        
        hatParameter = true;
        var resetHat = JSON.parse(queryParams.get("resetHat")); //resetHat : 모자 미사용여부
        console.log("모자 미사용여부: "+ resetHat);

        //모자를 입고있는 경우우
        if(!resetHat){
            var hatColor = queryParams.get("hatColor"); //hatColor : 모자 색
            console.log("모자 색: "+ hatColor);
        }
    } else {
        console.log("모자 미사용여부 파라미터가 없습니다.");
    }

    if(queryParams.has("resetClothes")){
        
        clothesParameter = true;
        var resetClothes = JSON.parse(queryParams.get("resetClothes")); //resetClothes : 옷 미사용여부
        console.log("옷 미사용여부: "+ resetClothes);

        //옷을 입고있는 경우
        if(!resetClothes){
            var clothesColor = queryParams.get("clothesColor");   //clothesColor : 옷 색
            console.log("옷 색: "+ clothesColor);
        }
    } else {
        console.log("옷 미사용여부 파라미터가 없습니다.");
    }

    var character = $('.rhythme');
    var shadow = $('.shadow');
    var hatImg = $('.hat');
    var clothesImg = $('.clothes');

    var characterImages = [
        "characters_img/rhythme1.png",
        "characters_img/rhythme2.png",
        "characters_img/rhythme3.png",
        "characters_img/rhythme4.png"
    ];

    var sadCharacterImages = [
        "characters_img/sad_rhythme1.png",
        "characters_img/sad_rhythme2.png",
        "characters_img/sad_rhythme3.png",
        "characters_img/sad_rhythme4.png"
    ];

    var shadowImages = [
        "shadow_img/shadow1.png",
        "shadow_img/shadow2.png",
        "shadow_img/shadow3.png",
        "shadow_img/shadow4.png",
        "shadow_img/shadow5.png"
    ]

    var start_check;
    var currentCharacterIndex = 0;
    var currentShadowIndex = 1;

    const instructionImages = [
        "text_img/pressSorK_text1.png",
        "text_img/pressSorK_text2.png"
    ];
    
    var instruction = $('.instruction');

    var instructionInterval;  
    var moveInterval;
    var idx=0;
    function init() {

        start_check = false;

        jumping = false;

        var  index = 0;

        $('#image').css('animation-play-state', 'paused');


        clearInterval(imageInterval);

        character.attr('src', 'characters_img/rhythme0.png');

        if(resetHat||!hatParameter){
        
            hatImg.hide();
            
        }else{
            
            hatImg.attr("src", "clothes_img/" + hatColor + "_hat1.png");

        }

        if(resetClothes||!clothesParameter){

            clothesImg.hide();
            
        }else{
            
            clothesImg.attr("src", "clothes_img/" + clothesColor + "_clothes1.png")

        }
        
        instructionInterval = setInterval(function() {
            instruction.attr('src', instructionImages[index]);
            index = (index + 1) % instructionImages.length;
        }, 500);     
        console.log(1234);
        
    }

    init();

    function hideInstructionImage() {
        instruction.hide();
    }
    
    
    document.addEventListener("keydown", function(event) {

        if (!start_check && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {

            start_check = true;
            
            
            
            
            
            
            if(idx<=1){
                moveBlock(idx);
                hideInstructionImage();
                init();
            }
            if(idx==2){
                moveBlock(idx);
                hideInstructionImage();
            }
            idx++;
            
            
            
            
                
            

        $('#image').css('animation-play-state', 'running');

       
        }
        
        if (!jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {

            JumpAction();
            
        }
    });  

    var jumping = false;
    var imageInterval;
    var sadCheck = false;

    function JumpAction() {

        jumping = true;

        clearInterval(imageInterval);

        character.attr('src', characterImages[0]); 

        shadow.attr('src', shadowImages[4]);

        if(hatParameter){
            hatImg.attr('src',"clothes_img/" + hatColor + "_hat2.png");
            hatImg.animate({ top: '65%' }, 190, 'linear')
            .animate({ top: '75%' }, 150, 'linear', function() {
                hatImg.attr('src',"clothes_img/" + hatColor + "_hat2.png");
                jumping = false;
                
            });
            console.log(1);
        }
        
        if(clothesParameter){
            clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes2.png");
            clothesImg.animate({ top: '65%' }, 190, 'linear')
            .animate({ top: '75%' }, 150, 'linear', function() {
                clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes2.png");
                jumping = false;
            
            }); 
        }
        character.animate({ top: '65%' }, 190, 'linear')
            .animate({ top: '75%' }, 150, 'linear', function() {
                character.attr('src', characterImages[3]);
                shadow.attr('src',shadowImages[0]);

                if(hatParameter){
                    hatImg.attr('src',"clothes_img/" + hatColor + "_hat5.png");
                }
                if(clothesParameter){
                    clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes5.png");
                }
               
                         
                jumping = false;
                imageInterval = setInterval(function() {                 
                    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                    currentShadowIndex = (currentShadowIndex + 1) % (shadowImages.length-1);
                    if(clothesParameter){
                        clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes" +(currentCharacterIndex + 2) + ".png");  
                        clothesImg.css('top','75%');
                    }
                    if(hatParameter){
                        hatImg.attr('src',"clothes_img/" + hatColor + "_hat" + (currentCharacterIndex + 2) + ".png");
                        hatImg.css('top','75%');
                    }
                    if(!sadCheck){
                        character.attr('src', characterImages[currentCharacterIndex]);
                    }else{
                        character.attr('src',sadCharacterImages[currentCharacterIndex]);
                    }
                    shadow.attr('src',shadowImages[currentShadowIndex]);
                    
                }, 100);
            });
    }

    class Block {

        constructor(time, color, speed, movePx){
            this.color = color;
            this.time = time;
            this.speed = speed;
            this.movePx = movePx;
        }

    }

    const tutorialBlocks = [
        new Block(1000, 'yellow', 13, 5),
        new Block(2000, 'blue', 13, 5),
        new Block(3000, 'green', 13, 5)
    ];

    var currentTime;
    var blocks = [];

    async function moveBlock(i) {

        blocks = tutorialBlocks;
        var correct = null;  
        
            
        const block_img = document.createElement('img');
        block_img.classList.add('block');
        block_img.src = 'items_img/'+blocks[i].color+'_block.gif';
        
        block_img.style.left = window.innerWidth+'px'
        document.body.appendChild(block_img);
        
        moveInterval = setInterval(async function(){
            
                const currentLeft = parseFloat(block_img.style.left);
                if(currentLeft <= window.innerWidth*0.28 || currentLeft <= -30) {
                    clearInterval(moveInterval);
                    
                    correct = await enableKeyPress(blocks[i].color);
                    
                    console.log(blocks[i].color);
                    block_img.remove();
                    return;

                    
                } else {
                    block_img.style.left = (currentLeft - blocks[i].movePx)+'px'
            } 
        }, blocks[i].speed);
        
        
        return correct;
        
    }

    var block_color
    
    var correct_key = false;    //알맞은 키를 눌렀는지 여부
    var green_sCheck = false; //green block일때 s를 눌렀는지 확인
    var green_kCheck = false; //green block일때 k를 눌렀는지 확인

    // 블록이 일정 위치에 도달했을 때 키 입력을 받도록 설정하는 함수
    function enableKeyPress(blockColor) { //return값이 true면 다음 block으로 넘어감, false면 다시 그 block 생성
        
        
        clearInterval(imageInterval);
        // clearInterval(moveInterval);
        
        return new Promise(function(resolve){
            switch(blockColor){
                case "blue":
                    document.addEventListener("keydown", handleKPress);
                    
                    break;
                case "yellow":
                    document.addEventListener("keydown", handleSPress);
                    
                    break;
                case "green":
                    document.addEventListener("keydown", handleKeyPress);
                    document.addEventListener("keydown", handleSameKeyPress);
                    break;        
            }
            console.log("알1");
            

            function handleKeyPress(event) {
        
        
                // green 블록이면 's'와 'k'를 동시에 눌러야 함
                if (event.key === 's' || event.key === 'S') {
                    if(green_kCheck == false){ //green block일 때 k를 아직 누르지 않았다면
                        green_sCheck = true;   //s 눌렀다고 표시
                    } else{     //k를 이미 누르고 s를 누른 상황
                        
                        showAchievement(2);
                        
                        green_kCheck = false;
                        correct_key = true;
                        console.log("성공");
                        ///////성공 페이지 추가///////
                        resolve(true);
                    }
                    document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
                }
                
            }
        
            function handleSameKeyPress(event){
                
                if (event.key === 'k' || event.key === 'K') {
                    if(green_sCheck == true){ //s를 누르고 k를 누른 상황
                        
                        showAchievement(2);
                       
                        green_sCheck=false;
                        correct_key = true;
                        console.log("성공");
                        ///////성공 페이지 추가///////
                        resolve(true);
                        
                    } else {
                        green_kCheck = true;
                    }
                    
                    document.removeEventListener("keydown", handleSameKeyPress); // 이벤트 리스너 삭제
                }
            }
        
            function handleKPress(event){
                
                // blue 블록이면 'k'를 눌러야 함
                if (event.key === 'k' || event.key === 'K') {
                    correct_key = true;
                    
                    showAchievement(2);
                    
                    document.removeEventListener("keydown", handleKPress); // 이벤트 리스너 삭제
                    resolve(true);
                }
                else if (event.key === 's' || event.key === 'S') {
                    correct_key = false;
                    showAchievement(3);
                    
                    document.removeEventListener("keydown", handleKPress); // 이벤트 리스너 삭제
                    resolve(false);
                }
            }
        
            function handleSPress(event){
                
                if (event.key === 's' || event.key === 'S') {
                    correct_key = true;
                   
                    showAchievement(2);
                    
                    
                    document.removeEventListener("keydown", handleSPress); // 이벤트 리스너 삭제
                    
                    resolve(true);
                    
                }
                else if (event.key === 'k' || event.key === 'K') {
                    correct_key = false;
                    showAchievement(3);
                    
                    document.removeEventListener("keydown", handleSPress); // 이벤트 리스너 삭제
                    
                    resolve(false);
                }
            }
        });
        
        
        
    }

   

    const scoreImages = ['cool_text.png', 'great_text.png', 'perfect_text.png','miss_text.png'];

    function showAchievement(index) {
        const achievementElement = $('.achievement').eq(index);
        achievementElement.attr('src', 'text_img/' + scoreImages[index]);
        
        
        achievementElement.fadeIn(100, function() {
            achievementElement.animate({
                top: '-=20px',
                opacity: 0 
            }, 300, function() {
                
                achievementElement.hide(); 
                achievementElement.css('top', '65%'); 
                achievementElement.css('opacity', '1'); 
            });
        });
    }



});