const characterImages = [
    "characters_img/rhythme1.png",
    "characters_img/rhythme2.png",
    "characters_img/rhythme3.png",
    "characters_img/rhythme4.png"
];

const sadCharacterImages = [
    "characters_img/sad_rhythme1.png",
    "characters_img/sad_rhythme2.png",
    "characters_img/sad_rhythme3.png",
    "characters_img/sad_rhythme4.png"
];

const shadowImages = [
    "shadow_img/shadow1.png",
    "shadow_img/shadow2.png",
    "shadow_img/shadow3.png",
    "shadow_img/shadow4.png",
    "shadow_img/shadow5.png"
]

const instructionImages = [
    "text_img/pressSorK_text1.png",
    "text_img/pressSorK_text2.png"
];

class Block {

    constructor(time, color, speed, movePx){
        this.color = color;
        this.time = time;
        this.speed = speed;
        this.movePx = movePx;
    }

}

//easy 난이도 block모음
const easy_blocks = [
    new Block(1000, 'blue', 13, 5),
    new Block(2000, 'green',13, 5),
    
    new Block(3000, 'yellow',13, 5),
    new Block(4000, 'yellow',13, 5),
    new Block(5000, 'blue', 13, 5),
    
    new Block(6000, 'blue', 13, 5),
    new Block(7000, 'yellow', 13, 5),
    new Block(7000, 'blue', 13, 5),
    
    new Block(8000, 'blue', 13, 5),
    
    new Block(9000, 'yellow', 13, 5),
    
    new Block(10000, 'blue', 13, 5),
    
    new Block(11000, 'blue', 13, 5),
    
    new Block(12000, 'green', 13, 5),
    
    new Block(13000, 'green', 13, 5),
    
    new Block(14000, 'blue', 13, 5),
    
    new Block(15000, 'yellow', 13, 5),
    
    new Block(16000, 'yellow', 13, 5),
    
    new Block(17000, 'green', 13, 5),
    
    new Block(18000, 'blue', 13, 5),
    
    new Block(19000, 'yellow', 13, 5),
    
    new Block(20000, 'green', 13, 5),
    
    new Block(21000, 'blue', 13, 5),
    
    new Block(22000, 'green', 13, 5),
    
    new Block(23000, 'yellow', 13, 5), /////////////40000부터 bpm up
    
    new Block(24000, 'green', 13, 5),
    
    new Block(25000, 'green', 13, 5),
    
    new Block(26000, 'green', 13, 5),

    new Block(27000, 'green', 13, 5),
    new Block(28000, 'green', 13, 5),
    new Block(29000, 'green', 13, 5),
   
    new Block(30500, 'green', 13, 5),
    new Block(31000, 'blue', 13, 5),
    new Block(32000, 'yellow', 13, 5),
    
    new Block(33000, 'blue', 13, 5),
    
    new Block(34000, 'green', 13, 5),
    
    new Block(35000, 'green', 13, 5),
    new Block(35500, 'green', 13, 5),
    new Block(36000, 'blue', 13, 5),
    new Block(36500, 'green', 13, 5),
    
    new Block(37500, 'blue', 13, 5),
    new Block(38000, 'yellow', 13, 5),
    new Block(38500, 'blue', 13, 5),
    new Block(39000, 'yellow', 13, 5),
    new Block(39500, 'blue', 13, 5),
    new Block(40000, 'green', 13, 5),
    new Block(44000, 'green', 7, 5),
    new Block(44500, 'yellow', 7, 5),
    new Block(45000, 'blue', 7, 5),
    new Block(46000, 'yellow', 7, 5),
    new Block(47000, 'blue', 7, 5),
    new Block(47500, 'green', 7, 5),
    new Block(48000, 'green', 7, 5),
    new Block(48500, 'yellow', 7, 5),
    new Block(49000, 'yellow', 7, 5),
    new Block(50000, 'green', 7, 5),
    new Block(50500, 'green', 7, 5),
    new Block(51000, 'blue', 7, 5),
    new Block(52000, 'blue', 7, 5),
    new Block(52500, 'blue', 7, 5),
    new Block(53000, 'yellow', 7, 5),
    new Block(53500, 'green', 7, 5),
    new Block(54000, 'green', 7, 5),
    new Block(54500, 'green', 7, 5),
    new Block(55000, 'green', 7, 5),
    new Block(55500, 'yellow', 7, 5),
    new Block(56000, 'blue', 7, 5),
    new Block(56500, 'green', 7, 5),
    new Block(57000, 'yellow', 7, 5),
    new Block(57500, 'blue', 7, 5),
    new Block(58000, 'green', 7, 5),
    new Block(58500, 'green', 7, 5),
    new Block(59000, 'green', 7, 5),
    new Block(59500, 'blue', 7, 5),
    new Block(60000, 'blue', 7, 5),
    new Block(60500, 'blue', 7, 5),
    new Block(61000, 'yellow', 7, 5),
    new Block(62000, 'yellow', 7, 5),
    new Block(63000, 'green', 7, 5),
    new Block(63500, 'green', 7, 5),
    new Block(64000, 'yellow', 7, 5),
    new Block(64500, 'yellow', 7, 5),
    new Block(65000, 'blue', 7, 5),
    new Block(65500, 'green', 7, 5),
    new Block(66000, 'yellow', 7, 5),
    new Block(66500, 'green', 7, 5),
    new Block(67000, 'blue', 7, 5),
    new Block(67500, 'green', 7, 5),
    new Block(68000, 'green', 7, 5)
    
    
];

//normal 난이도 block모음
const normal_blocks = [
    new Block(1000, 'blue', 13, 5),
    new Block(1500, 'green',13, 5),
    new Block(2000, 'green',13, 5),
    new Block(2500, 'green',13, 5),
    new Block(3000, 'yellow',13, 5),
    new Block(3500, 'yellow',13, 5),
    new Block(5000, 'blue', 13, 5),
    new Block(5500, 'blue', 13, 5),
    new Block(6000, 'blue', 13, 5),
    new Block(6500, 'yellow', 13, 5),
    new Block(7000, 'blue', 13, 5),
    new Block(7500, 'green', 13, 5),
    new Block(8000, 'blue', 13, 5),
    new Block(8500, 'yellow', 13, 5),
    new Block(9000, 'yellow', 13, 5),
    new Block(9500, 'green', 13, 5),
    new Block(10000, 'blue', 13, 5),
    new Block(10500, 'green', 13, 5),
    new Block(11000, 'blue', 13, 5),
    new Block(11500, 'blue', 13, 5),
    new Block(12000, 'green', 13, 5),
    new Block(12500, 'green', 13, 5),
    new Block(13000, 'green', 13, 5),
    new Block(13500, 'yellow', 13, 5),
    new Block(14000, 'blue', 13, 5),
    new Block(14500, 'blue', 13, 5),
    new Block(15000, 'yellow', 13, 5),
    new Block(15500, 'blue', 13, 5),
    new Block(16000, 'yellow', 13, 5),
    new Block(16500, 'yellow', 13, 5),
    new Block(17000, 'green', 13, 5),
    new Block(17500, 'blue', 13, 5),
    new Block(18000, 'blue', 13, 5),
    new Block(18500, 'green', 13, 5),
    new Block(19000, 'yellow', 13, 5),
    new Block(19500, 'yellow', 13, 5),
    new Block(20000, 'green', 13, 5),
    new Block(20500, 'blue', 13, 5),
    new Block(21000, 'blue', 13, 5),
    new Block(21500, 'yellow', 13, 5),
    new Block(22000, 'green', 13, 5),
    new Block(22500, 'blue', 13, 5),
    new Block(23000, 'yellow', 13, 5), /////////////40000부터 bpm up
    new Block(23500, 'green', 13, 5),
    new Block(24000, 'green', 13, 5),
    new Block(24500, 'green', 13, 5),
    new Block(25000, 'green', 13, 5),
    new Block(25500, 'green', 13, 5),
    new Block(26000, 'green', 13, 5),
    new Block(26500, 'green', 13, 5),
    new Block(27000, 'green', 13, 5),
    new Block(28000, 'green', 13, 5),
    new Block(29000, 'green', 13, 5),
    new Block(29500, 'green', 13, 5),
    new Block(30500, 'green', 13, 5),
    new Block(31000, 'blue', 13, 5),
    new Block(32000, 'yellow', 13, 5),
    new Block(32500, 'yellow', 13, 5),
    new Block(33000, 'blue', 13, 5),
    new Block(33500, 'yellow', 13, 5),
    new Block(34000, 'green', 13, 5),
    new Block(34500, 'blue', 13, 5),
    new Block(35000, 'green', 13, 5),
    new Block(35500, 'green', 13, 5),
    new Block(36000, 'blue', 13, 5),
    new Block(36500, 'green', 13, 5),
    new Block(37000, 'yellow', 13, 5),
    new Block(37500, 'blue', 13, 5),
    new Block(38000, 'yellow', 13, 5),
    new Block(38500, 'blue', 13, 5),
    new Block(39000, 'yellow', 13, 5),
    new Block(39500, 'blue', 13, 5),
    new Block(40000, 'green', 13, 5),
    new Block(44000, 'green', 7, 5),
    new Block(44500, 'yellow', 7, 5),
    new Block(45000, 'blue', 7, 5),
    new Block(46000, 'yellow', 7, 5),
    new Block(47000, 'blue', 7, 5),
    new Block(47500, 'green', 7, 5),
    new Block(48000, 'green', 7, 5),
    new Block(48500, 'yellow', 7, 5),
    new Block(49000, 'yellow', 7, 5),
    new Block(50000, 'green', 7, 5),
    new Block(50500, 'green', 7, 5),
    new Block(51000, 'blue', 7, 5),
    new Block(52000, 'blue', 7, 5),
    new Block(52500, 'blue', 7, 5),
    new Block(53000, 'yellow', 7, 5),
    new Block(53500, 'green', 7, 5),
    new Block(54000, 'green', 7, 5),
    new Block(54500, 'green', 7, 5),
    new Block(55000, 'green', 7, 5),
    new Block(55500, 'yellow', 7, 5),
    new Block(56000, 'blue', 7, 5),
    new Block(56500, 'green', 7, 5),
    new Block(57000, 'yellow', 7, 5),
    new Block(57500, 'blue', 7, 5),
    new Block(58000, 'green', 7, 5),
    new Block(58500, 'green', 7, 5),
    new Block(59000, 'green', 7, 5),
    new Block(59500, 'blue', 7, 5),
    new Block(60000, 'blue', 7, 5),
    new Block(60500, 'blue', 7, 5),
    new Block(61000, 'yellow', 7, 5),
    new Block(62000, 'yellow', 7, 5),
    new Block(63000, 'green', 7, 5),
    new Block(63500, 'green', 7, 5),
    new Block(64000, 'yellow', 7, 5),
    new Block(64500, 'yellow', 7, 5),
    new Block(65000, 'blue', 7, 5),
    new Block(65500, 'green', 7, 5),
    new Block(66000, 'yellow', 7, 5),
    new Block(66500, 'green', 7, 5),
    new Block(67000, 'blue', 7, 5),
    new Block(67500, 'green', 7, 5),
    new Block(68000, 'green', 7, 5)
    
    
];

const hard_blocks = [ 
    new Block(1200, 'yellow', 15, 5),
    new Block(1700, 'blue', 15, 5),
    new Block(2000, 'yellow', 15, 5),

    new Block(2400, 'green', 15, 5),
    new Block(2900, 'green', 15, 5),   
    new Block(3400, 'green', 15, 5),
    new Block(3900, 'green', 15, 5),


    new Block(4500, 'yellow', 15, 5),
    new Block(4800, 'blue', 15, 5),

    new Block(5300, 'yellow', 15, 5),
    new Block(5800, 'blue', 15, 5),
    new Block(6300, 'yellow', 15, 5),
    new Block(6800, 'blue', 15, 5),
    new Block(7550, 'yellow', 15, 5),
    new Block(7850, 'blue', 15, 5),

    new Block(8400, 'green', 15, 5),
    new Block(8900, 'green', 15, 5),
    new Block(9400, 'green', 15, 5),
    new Block(9900, 'green', 15, 5),
    new Block(10400, 'yellow', 15, 5),
    new Block(10800, 'blue', 15, 5),

    new Block(11200, 'yellow', 15, 5),
    new Block(11500, 'blue', 15, 5),
    new Block(11900, 'blue', 15, 5),

    new Block(12700, 'blue', 15, 5),
    new Block(13100, 'blue', 15, 5),
    new Block(13500, 'yellow', 15, 5),
    new Block(13800, 'blue', 15, 5),
    new Block(14400, 'blue', 15, 5),
    new Block(14800, 'blue', 15, 5),
    new Block(15250, 'yellow', 15, 5),



    new Block(15550, 'blue', 15, 5),
    new Block(16000, 'blue', 15, 5),
    new Block(16400, 'blue', 15, 5),
    new Block(16800, 'yellow', 15, 5),
    new Block(17100, 'blue', 15, 5),
    new Block(17600, 'yellow', 15, 5),
    new Block(17900, 'blue', 15, 5),

    new Block(18400, 'yellow', 15, 5),
    new Block(18700, 'blue', 15, 5),
    new Block(19100, 'blue', 15, 5),

    new Block(19500, 'blue', 15, 5),
    new Block(19950, 'blue', 15, 5),
    new Block(20400, 'yellow', 15, 5),
    new Block(20700, 'blue', 15, 5),

    new Block(21200, 'green', 15, 5),
    new Block(21650, 'green', 15, 5),
    new Block(22100, 'green', 15, 5),
    new Block(22550, 'green', 15, 5),
    new Block(23300, 'blue', 15, 5),
    new Block(23600, 'yellow', 15, 5),
    new Block(24350, 'green', 15, 5),
    new Block(24800, 'green', 15, 5),
    new Block(25150, 'green', 15, 5),
    new Block(25500, 'green', 15, 5),

    new Block(25950, 'yellow', 15, 5),
    new Block(26400, 'blue', 15, 5),
    new Block(26850, 'yellow', 15, 5),
    new Block(27300, 'blue', 15, 5),
    new Block(27850, 'yellow', 15, 5),
    new Block(28300, 'blue', 15, 5),
    new Block(28750, 'yellow', 15, 5),
    new Block(29200, 'blue', 15, 5),
    new Block(29650, 'yellow', 15, 5),
    new Block(30100, 'blue', 15, 5),
    new Block(30550, 'yellow', 15, 5),
    new Block(31000, 'blue', 15, 5),
    new Block(31400, 'green', 15, 5),


    new Block(31850, 'yellow', 15, 5),
    new Block(32150, 'blue', 15, 5),

    new Block(32550, 'yellow', 15, 5),
    new Block(32850, 'blue', 15, 5),

    new Block(33250, 'yellow', 15, 5),
    new Block(33550, 'blue', 15, 5),

    new Block(34000, 'yellow', 15, 5),
    new Block(34450, 'blue', 15, 5),
    new Block(34900, 'yellow', 15, 5),
    new Block(35350, 'blue', 15, 5),
    new Block(35800, 'yellow', 15, 5),
    new Block(36250, 'blue', 15, 5),
    new Block(36700, 'yellow', 15, 5),
    new Block(37150, 'blue', 15, 5),
    new Block(37600, 'yellow', 15, 5),
    new Block(38050, 'blue', 15, 5),
    new Block(38350, 'yellow', 15, 5),

    new Block(38800, 'yellow', 15, 5),
    new Block(39250, 'blue', 15, 5),
    new Block(39900, 'yellow', 15, 5),
    new Block(40350, 'blue', 15, 5),
    new Block(40800, 'yellow', 15, 5),
    new Block(41250, 'blue', 15, 5),


    //////////////////////////////

    new Block(44900, 'blue', 7, 5),
    new Block(45350, 'blue', 7, 5),
    new Block(45800, 'blue', 7, 5),
    new Block(46250, 'blue', 7, 5),
    new Block(46700, 'blue', 7, 5),
    new Block(47150, 'blue', 7, 5),
    new Block(47600, 'blue', 7, 5),
    new Block(48050, 'blue', 7, 5),
    new Block(48500, 'blue', 7, 5),
    new Block(48950, 'blue', 7, 5),
    new Block(49400, 'blue', 7, 5),
    new Block(49850, 'blue', 7, 5),

    

] ;

$(document).ready(function() {
    var difficulty = 0;
    // 현재 URL에서 query string을 가져옴
    var queryParams = new URLSearchParams(window.location.search);

    var hatParameter = false;
    var clothesParameter = false;

    console.log("game 진입\n"+queryParams.toString());

    if (queryParams.has("difficulty")) {

    difficulty = parseInt(queryParams.get("difficulty")); //difficulty : 난이도
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

    

    //게임오버 버튼 구현
    $('#reStart img').hover(function(){
        $(this).attr("src", "buttons_img/restart_btn1.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "buttons_img/restart_btn2.png");
    });
    
    $('#quit img').hover(function(){
        $(this).attr("src", "buttons_img/quit_btn1.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "buttons_img/quit_btn2.png");
    });

    $('#reStart').click(()=>{
        location.reload();
    });

    $('#quit').click(()=>{
        var url = "index.html?";
        location.href=url;
    });

    //뒤로가기 함수
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

    let score = 10000;

    // 점프 액션 이미지
    var character = $('.rhythme');
    var shadow = $('.shadow');
    var hatImg = $('.hat');
    var clothesImg = $('.clothes');

 

    var currentCharacterIndex = 0;
    var currentShadowIndex = 1;

    // 인스트럭션
    var instruction = $('.instruction');
    
    
    var instructionInterval;
    
    //난이도별 점프 속도
    var jumpSpeed;
    var jumpHeight;
    var landSpeed;

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
        
        if (!isGameOver && !jumping && (event.key === 's' || event.key === 'S' || event.key === 'k' || event.key === 'K')) {

            JumpAction();
            
        }

        if (jumping) {
            event.preventDefault(); 
        }
    });


    var jumping = false;
    var imageInterval;
    var sadCheck = false;

    // 초기 점프 구현
    function JumpAction() {
        
        jumping = true;

        clearInterval(imageInterval);

        character.attr('src', characterImages[0]); 

        shadow.attr('src', shadowImages[4]);

        if(hatParameter){
            hatImg.attr('src',"clothes_img/" + hatColor + "_hat2.png");
            hatImg.animate({ top: jumpHeight + '%' }, jumpSpeed, 'linear')
            .animate({ top: '75%' }, landSpeed, 'linear', function() {
                hatImg.attr('src',"clothes_img/" + hatColor + "_hat2.png");
                
            });
            console.log(1);
        }
        if(clothesParameter){
            clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes2.png");
            clothesImg.animate({ top: jumpHeight + '%' }, jumpSpeed, 'linear')
            .animate({ top: '75%' }, landSpeed, 'linear', function() {
                clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes2.png");
            
            }); 
        }

        character.animate({ top: jumpHeight + '%' }, jumpSpeed, 'linear')
            .animate({ top: '75%' }, landSpeed, 'linear', function() {
                jumping = false;
                character.attr('src', characterImages[3]);
                shadow.attr('src',shadowImages[0]);
                if(hatParameter){
                    hatImg.attr('src',"clothes_img/" + hatColor + "_hat5.png");
                }
                if(clothesParameter){
                    clothesImg.attr('src',"clothes_img/" + clothesColor + "_clothes5.png");
                }                         
              
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

     //block을 생성하는 함수
     function createBlock(block){
        const block_img = document.createElement('img');
        block_img.classList.add('block');
        block_img.src = 'items_img/'+block.color+'_block.gif';
        block_img.style.left = window.innerWidth+'px'
        document.body.appendChild(block_img);

        const moveInterval = setInterval(() => {
            if (!isGameOver) { // 게임 오버 상태가 아닐 때만 블록을 이동시킴
                const currentLeft = parseFloat(block_img.style.left);
                if(currentLeft <= -30) {
                    clearInterval(moveInterval);
                    block_img.remove();
                } else {
                    block_img.style.left = (currentLeft - block.movePx)+'px'
                }
            } else {
                clearInterval(moveInterval); // 게임 오버 상태일 때는 블록 이동을 멈춤
            }
        }, block.speed);
    }
    
    // 게임 시작
    function startGame() {

        $('.score_img').show();
        start_check = true;
        bgm.play();
        $('#image').css('animation-play-state', 'running');
       
        $('.score').text(score);
     
        moveBlock();
        
        //게임 컴플리트
        setTimeout(gameComplete, 76000);

    }

    // 초기화면
    function init() {

        start_check = false;

        $('.score_img').hide();

        bgm.pause();

        $('#image').css('animation-play-state', 'paused');

        jumping = false;

        clearInterval(imageInterval);

        character.attr('src', 'characters_img/rhythme0.png');
 
        var index = 0;

        instructionInterval = setInterval(function() {
            instruction.attr('src', instructionImages[index]);
            index = (index + 1) % instructionImages.length;
        }, 500);     

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
        
        switch (difficulty) {
            case 0:
                jumpSpeed = 190; // 쉬운 난이도에서의 점프 속도
                landSpeed = 150;
                jumpHeight = 65;
                $("#image img:nth-child(1)").attr("src", "backgrounds_img/evening_background1.png")
                $("#image img:nth-child(2)").attr("src", "backgrounds_img/evening_background2.png")
                $("#image img:nth-child(3)").attr("src", "backgrounds_img/evening_background3.png")
                $("#image img:nth-child(4)").attr("src", "backgrounds_img/evening_background4.png")
                $("#image img:nth-child(5)").attr("src", "backgrounds_img/evening_background1.png")
                break;
            case 1:
                jumpSpeed = 140; // 보통 난이도에서의 점프 속도
                landSpeed = 125;
                jumpHeight = 67;
                $("#image img:nth-child(1)").attr("src", "backgrounds_img/bridge_background1.png")
                $("#image img:nth-child(2)").attr("src", "backgrounds_img/bridge_background2.png")
                $("#image img:nth-child(3)").attr("src", "backgrounds_img/bridge_background3.png")
                $("#image img:nth-child(4)").attr("src", "backgrounds_img/bridge_background2.png")
                $("#image img:nth-child(5)").attr("src", "backgrounds_img/bridge_background1.png")
                break;
            case 2:
                jumpSpeed = 80; // 어려운 난이도에서의 점프 속도
                landSpeed = 90;
                jumpHeight = 71;
                $("#image img:nth-child(1)").attr("src", "backgrounds_img/sunset_background.png")
                $("#image img:nth-child(2)").attr("src", "backgrounds_img/sunset_background.png")
                $("#image img:nth-child(3)").attr("src", "backgrounds_img/sunset_background.png")
                $("#image img:nth-child(4)").attr("src", "backgrounds_img/sunset_background.png")
                $("#image img:nth-child(5)").attr("src", "backgrounds_img/sunset_background.png")
                break;
        }
        
    }

    // 인스트럭션 숨기기
    function hideInstructionImage() {
        instruction.hide();
    }

   
   
    
    
    var currentTime;
    var blocks = [];
    function moveBlock() {
        switch(difficulty){
            case 0:
                blocks = easy_blocks;
                break;
            case 1:
                blocks = normal_blocks;
                break;
            case 2:
                blocks = hard_blocks;
                break;


        }
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

    //점수 증가 함수
    function increaseScore() {
        score += 50;
        showAchievement(0);
        $(".score").text(score);
        console.log('cool!');
    }

    function greatScore() {
        score += 100;
        showAchievement(1);
        $(".score").text(score);
        console.log('great!');
    }

    function perfectScore() {
        score += 200;
        showAchievement(2);
        $(".score").text(score);
        console.log('perfect!');
    }
    
    //우는 캐릭터 이미지 변경
    function changeCharacterImageToSad() {
        sadCheck = true;

        setTimeout(function() {
            sadCheck = false;
        }, 1000);
    }

    //점수 감소 함수
    function decreaseScore() {
        score -= 100;
        
        $(".score").text(score);

        showAchievement(3);  
        
        changeCharacterImageToSad();
        
        if (score <= 0) {
        gameOver();                 
        }
    }

    function failChangeScore() {
        score -= 200;
        $(".score").text(score);

        showAchievement(3);

        changeCharacterImageToSad();
        
        if (score <= 0) {
        gameOver();
        }
    }

    //게임완료 전역변수
    var isGameComplete = false;

    //게임 완료 
    function gameComplete(){
        bgm.pause;
        isGameComplete = true;
    
        $('.score').hide();
        $('.score_img').hide();
        
        // 뒤로가기 이미지 숨기기
        $('#back').hide();

        bgm.pause();
    
        setTimeout(function(){
            
            // 블록 모두 제거
            $('.block').remove(); 
        
            // 캐릭터 애니메이션 중지
            character.stop();
            
            clearInterval(imageInterval);
        
            // 배경 애니메이션 중지
            $('#image').css('animation-play-state', 'paused');

    
            // 1초 후에 화면 블러 처리 및 점수 고정
            setTimeout(function() {
                $("#image").css("filter", "blur(5px)");
                $(".rhythme").css("filter", "blur(5px)");
                $(".shadow").css("filter", "blur(5px)");
                $(".hat").css("filter", "blur(5px)");
                $(".clothes").css("filter", "blur(5px)");
                $('.complete_score').text(score);
                document.getElementById("gameCompleteScreen").style.display = "flex";                
                document.getElementById("reStart").style.display = "flex";
                document.getElementById("quit").style.display = "flex";
            }, 1000);
        },400);
    
    
        }

    //게임오버 전역변수
    var isGameOver = false;

    //게임 오버
    function gameOver() {        
        
        // 스코어 이미지 제거
        $('.score').hide();
        $('.score_img').hide();
        
        // 뒤로가기 이미지 숨기기
        $('#back').hide();

        $('.achievement').remove();

        bgm.pause();

        setTimeout(function(){

            isGameOver = true;         
            
            // 블록 모두 제거
            $('.block').remove(); 
        
            // 캐릭터 애니메이션 중지
            character.stop();
        
            // 배경 애니메이션 중지
            $('#image').css('animation-play-state', 'paused');

            // 1초 후에 화면 블러 처리 및 점수 고정
            setTimeout(function() {
                $("#image").css("filter", "blur(5px)");
                $(".rhythme").css("filter", "blur(5px)");
                $(".shadow").css("filter", "blur(5px)");
                $(".hat").css("filter", "blur(5px)");
                $(".clothes").css("filter", "blur(5px)");

                document.getElementById("gameOverScreen").style.display = "flex";
                document.getElementById("reStart").style.display = "flex";
                document.getElementById("quit").style.display = "flex";
            }, 1000);
        },400);
       
    }

});
