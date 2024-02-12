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
        character.animate({ top: '60%' }, 250, 'linear')
            .animate({ top: '75%' }, 250, 'linear', function() {
                character.attr('src', characterImages[currentCharacterIndex]);
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
            new Block(1000, 'blue', 10),
            new Block(2000, 'green',10),
            new Block(3000, 'yellow',10),
            new Block(4000, 'blue', 5)
        ];
        blocks.forEach(block => {
            setTimeout(() => {
                createBlock(block);
            },block.time);
        });
    }

});
