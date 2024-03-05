$(document).ready(function() {

    $('#back img').hover(function(){
        $(this).attr("src", "setting_game_img/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/back_btn2.png");
    });
    $('#back').click(()=>{
        var url = "setting_game.html?"
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
        "characters_img/sad1.png",
        "characters_img/sad2.png",
        "characters_img/sad3.png",
        "characters_img/sad4.png"
    ];

    var shadowImages = [
        "game_img/shadow.png",
        "game_img/shadow2.png",
        "game_img/shadow3.png",
        "game_img/shadow4.png",
        "game_img/shadow5.png"
    ]

    var start_check;
    var currentCharacterIndex = 0;
    var currentShadowIndex = 1;

    function init() {

        start_check = false;

        jumping = false;

        clearInterval(imageInterval);
        clearInterval(gamingInterval);

        character.attr('src', 'game_img/start_character.png');

        if(resetHat||!hatParameter){
        
            hatImg.hide();
            
        }else{
            
            hatImg.attr("src", "clothes/" + hatColor + "_hat1.png");

        }

        if(resetClothes||!clothesParameter){

            clothesImg.hide();
            
        }else{
            
            clothesImg.attr("src", "clothes/" + clothesColor + "1.png")

        }       
        
    }

    init();

    document.addEventListener("keydown", function(event) {

        if (!start_check && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {

            startGame();

        }
        
        if (!jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {

            JumpAction();
            
        }
    });

    function startGame() {

        start_check = true;

    }


    var jumping = false;
    var imageInterval;
    var gamingInterval;
    var sadCheck = false;

    function JumpAction() {

        jumping = true;

        clearInterval(imageInterval);

        character.attr('src', characterImages[0]); 

        shadow.attr('src', shadowImages[4]);

        hatImg.attr('src',"clothes/" + hatColor + "_hat2.png");
        
        clothesImg.attr('src',"clothes/" + clothesColor + "2.png");

        hatImg.animate({ top: '65%' }, 190, 'linear')
        .animate({ top: '75%' }, 150, 'linear', function() {
            hatImg.attr('src',"clothes/" + hatColor + "_hat2.png");
            jumping = false;
            
        });

        clothesImg.animate({ top: '65%' }, 190, 'linear')
        .animate({ top: '75%' }, 150, 'linear', function() {
            clothesImg.attr('src',"clothes/" + clothesColor + "2.png");
            jumping = false;
           
        });

        character.animate({ top: '65%' }, 190, 'linear')
            .animate({ top: '75%' }, 150, 'linear', function() {
                character.attr('src', characterImages[3]);
                shadow.attr('src',shadowImages[0]);

                hatImg.attr('src',"clothes/" + hatColor + "_hat5.png");
                clothesImg.attr('src',"clothes/" + clothesColor + "5.png");
               
                         
                jumping = false;
                imageInterval = setInterval(function() {                 
                    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                    currentShadowIndex = (currentShadowIndex + 1) % (shadowImages.length-1);
                    clothesImg.attr('src',"clothes/" + clothesColor + (currentCharacterIndex + 2) + ".png");  
                    hatImg.attr('src',"clothes/" + hatColor + "_hat" + (currentCharacterIndex + 2) + ".png");
                    hatImg.css('top','75%');
                    clothesImg.css('top','75%');
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

    var currentTime;

    function moveBlock() {
        const blocks = [
            new Block(1000, 'blue', 13, 5),            
        ];
        blocks.forEach(block => {
            setTimeout(() => {
                createBlock(block);
                var cal_speed = 0;
                //1초에 블록이 움직이는 거리 계산
                if(block.speed < 10){
                    cal_speed = (1000/(block.speed-0.5))*block.movePx;
                }else{
                    cal_speed = (1000/(block.speed-0.14)) *block.movePx;
                }
                // pointTime = (window.innerWidth * 0.7 / cal_speed) * 1000
                

                //블록 생성되었을때 이벤트 리스너 생성
                setTimeout(() => {
                    
                    enableKeyPress(block.color);
                    correct_key = false;
                }, ((window.innerWidth * 0.7 / cal_speed) *1000));

                //블록 지나갔을때 이벤트 리스너 제거
                setTimeout(() => {
                    document.removeEventListener("keydown", handleKeyPress);
                    document.removeEventListener("keydown", handleSameKeyPress);
                    if(!correct_key){
                        decreaseScore();
                    }
                }, ((window.innerWidth * 0.7 / cal_speed) *1000)+300)
            },block.time);
        });
    }

    var block_color
    
    //알맞은 키를 눌렀는지 여부
    var correct_key = false;
    var green_sCheck = false; //green block일때 s를 눌렀는지 확인
    var green_kCheck = false; //green block일때 k를 눌렀는지 확인

    // 블록이 일정 위치에 도달했을 때 키 입력을 받도록 설정하는 함수
    function enableKeyPress(blockColor) {
        var d = new Date();
                currentTime = d.getMilliseconds();
        block_color = blockColor;
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keydown", handleSameKeyPress);
    }

    function createBlock(block){
        const block_img = document.createElement('img');
        block_img.classList.add('block');
        block_img.src = 'game_img/'+block.color+'_block.gif';
        block_img.style.left = window.innerWidth+'px'
        document.body.appendChild(block_img);

        const moveInterval = setInterval(() => {
                const currentLeft = parseFloat(block_img.style.left);
                if(currentLeft <= -30) {
                    clearInterval(moveInterval);
                    block_img.remove();
                } else {
                    block_img.style.left = (currentLeft - block.movePx)+'px'
            } 
        }, block.speed);
    }

    function handleKeyPress(event) {
        var date = new Date();
        var timegap = date.getMilliseconds() - currentTime;
        // green 블록이면 's'와 'k'를 동시에 눌러야 함
        if (block_color === 'green' && (event.key === 's' || event.key === 'S')) {
            if(green_kCheck == false){ //green block일 때 k를 아직 누르지 않았다면
                green_sCheck = true;   //s 눌렀다고 표시
            } else{     //k를 이미 누르고 s를 누른 상황
                if((timegap < 100 && timegap >= 50) || (timegap > 200 && timegap <= 250)){
                    greatScore();
                }
                else if(timegap <50 || timegap > 250){
                    increaseScore();
                }
               else{
                    perfectScore();
               }
                green_kCheck = false;
                correct_key = true;
            }
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        // blue 블록이면 'k'를 눌러야 함
        else if (block_color === 'blue' && (event.key === 'k' || event.key === 'K')) {
            correct_key = true;
            if((timegap < 100 && timegap >= 50) || (timegap > 200 && timegap <= 250)){
                greatScore();
            }
            else if(timegap <50 || timegap > 250){
                increaseScore();
            }
           else{
                perfectScore();
           }
            document.removeEventListener("keydown", handleSameKeyPress);
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        // yellow 블록이면 's'를 눌러야 함
        else if (block_color === 'yellow' && (event.key === 's' || event.key === 'S')) {
            correct_key = true;
            if((timegap < 100 && timegap >= 50) || (timegap > 200 && timegap <= 250)){
                greatScore();
            }
            else if(timegap <50 || timegap > 250){
                increaseScore();
            }
           else{
                perfectScore();
           }
            document.removeEventListener("keydown", handleSameKeyPress);
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        
       
    }

    function handleSameKeyPress(event){
        var date = new Date();
        var timegap = date.getMilliseconds() - currentTime;
        if (block_color === 'blue' && (event.key === 's' || event.key === 'S')) {
            correct_key = true;
            failChangeScore();
            console.log('점수감소');
            document.removeEventListener("keydown", handleSameKeyPress); // 이벤트 리스너 삭제
            document.removeEventListener("keydown", handleKeyPress);
        }
        else if (block_color === 'yellow' && (event.key === 'k' || event.key === 'K')) {
            correct_key = true;
            failChangeScore();
            console.log('점수감소');
            document.removeEventListener("keydown", handleSameKeyPress); // 이벤트 리스너 삭제
            document.removeEventListener("keydown", handleKeyPress);
        }
        if (block_color === 'green' && (event.key === 'k' || event.key === 'K')) {
            if(green_sCheck == true){ //s를 누르고 k를 누른 상황
                if((timegap < 100 && timegap >= 50) || (timegap > 200 && timegap <= 250)){
                    greatScore();
                }
                else if(timegap <50 || timegap > 250){
                    increaseScore();
                }
               else{
                    perfectScore();
               }
                green_sCheck=false;
                correct_key = true;
            } else {
                green_kCheck = true;
            }
            
            document.removeEventListener("keydown", handleSameKeyPress); // 이벤트 리스너 삭제
        }
    }

    const scoreImages = ['cool_text.png', 'great_text.png', 'perfect_text.png','miss_text.png'];

    function showAchievement(index) {
        const achievementElement = $('.achievement').eq(index);
        achievementElement.attr('src', 'game_img/' + scoreImages[index]);
        
        
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