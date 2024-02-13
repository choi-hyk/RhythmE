$(document).ready(function() {

    //뒤로가기 함수
    $('#back img').hover(function(){
        $(this).attr("src", "setting_game_img/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/back_btn2.png");
    });
    $('#back').click(()=>{
        history.back();
    });

    let score = 100;

    // 캐릭터 선택
    var character = $('.rhythme');
    var characterImages = [
        "characters_img/rhythme1.png",
        "characters_img/rhythme2.png",
        "characters_img/rhythme3.png",
        "characters_img/rhythme4.png"
    ];
    var currentCharacterIndex = 0;

    // 인스트럭션
    var instruction = $('.instruction');
    var instructionImages = [
        "game_img/game_instruction1.png",
        "game_img/game_instruction2.png"
    ];
    
    var instructionInterval;

    //block이 움직이는 속도
    const block_speed = 10;
    //block이 생성되는 속도
    const block_createspeed = 1000;

    // BGM
    var bgm = new Audio('sound_pack/Beautiful_Days.wav');
    var start_check;

    init();

    // 게임 시작 및 점프 이벤트 핸들러
    document.addEventListener("keydown", function(event) {
        if (!start_check && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {
            startGame();
            hideInstructionImage();
        }
        
        if (!jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {
            JumpAction();
        }
    });


    var jumping = false;
    var imageInterval;
    var gamingInterval;

    // 초기 점프 구현
    function JumpAction() {
        jumping = true;
        clearInterval(imageInterval);
        character.attr('src', characterImages[0]);
        character.animate({ top: '65%' }, 190, 'linear')
            .animate({ top: '75%' }, 150, 'linear', function() {
                character.attr('src', characterImages[3]);
                jumping = false;
                imageInterval = setInterval(function() {
                    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
                    character.attr('src', characterImages[currentCharacterIndex]);
                }, 100);
            });
    }
     //block을 생성하는 함수
     function createBlock(block){
        const block_img = document.createElement('img');
        block_img.classList.add('block');
        block_img.src = 'game_img/'+block.color+'_block.png';
        block_img.style.left = window.innerWidth+'px'
        document.body.appendChild(block_img);

        const moveInterval = setInterval(() => {
            const currentLeft = parseFloat(block_img.style.left);
            if(currentLeft <= -30) {
                clearInterval(moveInterval);
                block_img.remove();
            } else {
                block_img.style.left = (currentLeft - 5)+'px'
            }
        }, block.speed);
    }
    // 게임 시작
    function startGame() {
        start_check = true;
        bgm.play();
        $('#image').css('animation-play-state', 'running');
        // gamingInterval = setInterval(() => {
        //     const colors = ['green', 'blue', 'yellow'];
        //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
        //     createBlock(randomColor);
        //   }, block_createspeed);
        $('.score').text(score);
        moveBlock();
    }

    // 초기화면
    function init() {
        start_check = false;
        bgm.pause();
        $('#image').css('animation-play-state', 'paused');
        jumping = false;
        clearInterval(imageInterval);
        clearInterval(gamingInterval);
        character.attr('src', 'game_img/start_character.png');

        var index = 0;
        instructionInterval = setInterval(function() {
            instruction.attr('src', instructionImages[index]);
            index = (index + 1) % instructionImages.length;
        }, 500);
    }

    // 인스트럭션 숨기기
    function hideInstructionImage() {
        instruction.hide();
    }

   
    class Block {
        constructor(time, color, speed){
            this.color = color;
            this.time = time;
            this.speed = speed;
        }
    }
    
    function moveBlock() {
        const blocks = [
            new Block(1000, 'blue', 15),
            new Block(2000, 'green',15),
            new Block(3000, 'yellow',15),
            new Block(5000, 'blue', 15),
            new Block(6000, 'blue', 15),
            new Block(7000, 'blue', 15),
            new Block(8000, 'blue', 15),
            new Block(9000, 'blue', 15),
            new Block(10000, 'blue', 15),
            new Block(11000, 'blue', 15),
            new Block(12000, 'blue', 15),
            new Block(13000, 'blue', 20)
        ];
        blocks.forEach(block => {
            setTimeout(() => {
                createBlock(block);

                //1초에 블록이 움직이는 거리 계산
                var cal_speed = (1000/block.speed) *5;

                //블록 생성되었을때 이벤트 리스너 생성
                setTimeout(() => {
                    enableKeyPress(block.color);
                correct_key = false;
                }, (window.innerWidth * 0.7 / cal_speed) *1000);

                //블록 지나갔을때 이벤트 리스너 제거
                setTimeout(() => {
                    document.removeEventListener("keydown", handleKeyPress);
                    document.removeEventListener("keydown", handleSameKeyPress);
                    if(!correct_key){
                        decreaseScore();
                    }
                }, ((window.innerWidth * 0.7 / cal_speed) *1000)+200)
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
        block_color = blockColor;
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keydown", handleSameKeyPress);
    }

    function handleKeyPress(event) {
        // green 블록이면 's'와 'k'를 동시에 눌러야 함
        if (block_color === 'green' && (event.key === 's' || event.key === 'S')) {
            if(green_kCheck == false){ //green block일 때 k를 아직 누르지 않았다면
                green_sCheck = true;   //s 눌렀다고 표시
            } else{     //k를 이미 누르고 s를 누른 상황
                increaseScore();
                green_kCheck = false;
                correct_key = true;
            }
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        // blue 블록이면 'k'를 눌러야 함
        else if (block_color === 'blue' && (event.key === 'k' || event.key === 'K')) {
            correct_key = true;
            increaseScore();
            document.removeEventListener("keydown", handleSameKeyPress);
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        // yellow 블록이면 's'를 눌러야 함
        else if (block_color === 'yellow' && (event.key === 's' || event.key === 'S')) {
            correct_key = true;
            increaseScore();
            document.removeEventListener("keydown", handleSameKeyPress);
            document.removeEventListener("keydown", handleKeyPress); // 이벤트 리스너 삭제
        }
        
       
    }

    function handleSameKeyPress(event){
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
                increaseScore();
                green_sCheck=false;
                correct_key = true;
            } else {
                green_kCheck = true;
            }
            
            document.removeEventListener("keydown", handleSameKeyPress); // 이벤트 리스너 삭제
        }
    }

    //점수 증가 함수
    function increaseScore() {
        score += 100;
        $(".score").text(score);
        console.log(score);
    }

    //점수 감소 함수
    function decreaseScore() {
        score -= 100;
        $(".score").text(score);
        console.log(score);
        
        if (score <= 0) {
          gameOver();                 
        }
    }

    function failChangeScore() {
        score -= 200;
        $(".score").text(score);
        console.log(score);
        if (score <= 0) {
           gameOver()
        }
    }
    function gameOver() {
        // 캐릭터 애니메이션 중지
        character.stop();
    
        // 사용자 입력 무시
        $(document).off("keydown");
    
        // 1초 후에 화면 블러 처리 및 점수 고정
        setTimeout(function() {
            $("body").css("filter", "blur(5px)");
            $('#score').css('position', 'fixed');
        }, 1000);
    
        $('#image').css('animation-play-state', 'paused');
    }

});
