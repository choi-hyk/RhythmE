$(document).ready(function(){
    
    var queryParams = new URLSearchParams(window.location.search);
    
    var hatParameter = false;
    var clothesParameter = false;
    var hatImg = $('.wearing_hat');
    var clothesImg = $('.wearing_clothes');

    console.log("setting_game 진입\n"+queryParams.toString());
    
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
                hatImg.attr("src", "clothes/" + hatColor + "_hat1.png");    
                console.log("모자 색: "+ hatColor);

            }else{
            hatImg.hide();

            }
        } else {
            console.log("모자 미사용여부 파라미터가 없습니다.");
            hatImg.hide();

        }
    
        if(queryParams.has("resetClothes")){
            
            clothesParameter = true;
            var resetClothes = JSON.parse(queryParams.get("resetClothes")); //resetClothes : 옷 미사용여부
            console.log("옷 미사용여부: "+ resetClothes);
    
            //옷을 입고있는 경우
            if(!resetClothes){
                var clothesColor = queryParams.get("clothesColor");   //clothesColor : 옷 색
                clothesImg.attr("src", "clothes/" + clothesColor + "1.png");
                console.log("옷 색: "+ clothesColor);

            }
            else{

            clothesImg.hide();

            }
        } else {
            console.log("옷 미사용여부 파라미터가 없습니다.");
            clothesImg.hide();

        }

    


    var difficulty = 0;    //초기 난이도
    
    //난이도 조절 버튼 함수
    function setButtonImages(difficulty) {
        switch (difficulty) {
            case 0:
                $('#difficulty img').attr("src", "setting_game_img/easy_btn.png");
                break;
            case 1:
                $('#difficulty img').attr("src", "setting_game_img/normal_btn.png");
                break;
            case 2:
                $('#difficulty img').attr("src", "setting_game_img/hard_btn.png");
                break;
            default:
                break;
        }
    }

    $('#start img').hover(function(){
        $(this).attr("src", "setting_game_img/start_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "setting_game_img/start_btn.png");
    });

    $('#start').click(()=>{
        queryParams.set("difficulty", difficulty);
        var url = "game.html?" + queryParams.toString();
        location.href=url;
    });

    $('#lower_arrow img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_lefthover.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_left.png");
    });

    $('#lower_arrow').click(()=>{
        if (difficulty > 0) {
            difficulty -= 1;
        }
        console.log("Current Difficulty: " + difficulty);
        setButtonImages(difficulty);
        
    });

    $('#raise_arrow img').hover(function(){
        $(this).attr("src", "setting_game_img/difficulty_arrow_righthover.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "setting_game_img/difficulty_arrow_right.png");
    });

    $('#raise_arrow').click(()=>{
        if (difficulty < 2) {
            difficulty += 1;
        }
        console.log("Current Difficulty: " + difficulty);
        setButtonImages(difficulty);
    });

    //뒤로가기 함수
    $('#back img').hover(function(){
        $(this).attr("src", "setting_game_img/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "setting_game_img/back_btn2.png");
    });
    $('#back').click(()=>{
        var url = "index.html?"+queryParams.toString();
        location.href=url;
    });

    $('#characters img').hover(function(){
        $(this).attr("src", "start_img/start_characters_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_characters_btn.png");
    });

    $('#characters').click(()=>{
        var url = "characters.html?" + queryParams.toString();
        location.href=url;
    });

    
});