$(document).ready(function(){
    
    var queryParams = new URLSearchParams(window.location.search);
    
    var hatParameter = false;
    var clothesParameter = false;
    var hatImg = $('.wearing_hat');
    var clothesImg = $('.wearing_clothes');
    var difficulty_stage = $('.difficulty_stage');
    var difficulty = 0;    //초기 난이도    

    console.log("setting_game 진입\n"+queryParams.toString());
    
    if (queryParams.has("difficulty")) {

        difficulty = parseInt(queryParams.get("difficulty")); //difficulty : 난이도
        console.log("난이도: " + difficulty);
        console.log("난이도");
        difficulty_stage.attr("src","assets/backgrounds/evening_background3.png");
     
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
                hatImg.attr("src", "assets/clothes/" + hatColor + "_hat1.png");    
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
                clothesImg.attr("src", "assets/clothes/" + clothesColor + "_clothes1.png");
                console.log("옷 색: "+ clothesColor);

            }
            else{

            clothesImg.hide();

            }
        } else {
            console.log("옷 미사용여부 파라미터가 없습니다.");
            clothesImg.hide();

        }

    


    setButtonImages(difficulty);
    
    //난이도 조절 버튼 함수
    function setButtonImages(difficulty) {
        switch (difficulty) {
            case 0:
                $('#difficulty img').attr("src", "assets/buttons/easy_btn.png");
                difficulty_stage.attr("src","assets/backgrounds/evening_background3.png");
                break;
            case 1:
                $('#difficulty img').attr("src", "assets/buttons/normal_btn.png");
                difficulty_stage.attr("src","assets/backgrounds/bridge_background1.png");
                break;
            case 2:
                $('#difficulty img').attr("src", "assets/buttons/hard_btn.png");
                difficulty_stage.attr("src","assets/backgrounds/sunset_background.png");
                break;
            default:
                break;
        }
    }

    $('#start img').hover(function(){
        $(this).attr("src", "assets/buttons/start_btn2.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "assets/buttons/start_btn1.png");
    });

    $('#start').click(()=>{
        queryParams.set("difficulty", difficulty);
        var url = "game.html?" + queryParams.toString();
        location.href=url;
    });

    $('#lower_arrow img').hover(function(){
        $(this).attr("src", "assets/buttons/left_arrow_btn2.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "assets/buttons/left_arrow_btn1.png");
    });

    $('#lower_arrow').click(()=>{
        if (difficulty > 0) {
            difficulty -= 1;
        }
        console.log("Current Difficulty: " + difficulty);
        setButtonImages(difficulty);
        
    });

    $('#raise_arrow img').hover(function(){
        $(this).attr("src", "assets/buttons/right_arrow_btn2.png");
        $(this).css('width','5vw');
    }, function() {
        $(this).attr("src", "assets/buttons/right_arrow_btn1.png");
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
        $(this).attr("src", "assets/buttons/back_btn1.png");
        $(this).css('width','7vw');
    }, function() {
        $(this).attr("src", "assets/buttons/back_btn2.png");
    });
    $('#back').click(()=>{
        queryParams.set("difficulty",0);
        var url = "index.html?"+queryParams.toString();
        location.href=url;
    });

    $('#tutorial img').hover(function(){
        $(this).attr("src", "assets/buttons/tutorial_btn2.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "assets/buttons/tutorial_btn1.png");
    });
    $('#tutorial').click(()=>{
        var url = "tutorial.html?"+queryParams.toString();
        location.href=url;
    });

    $('#characters img').hover(function(){
        $(this).attr("src", "assets/buttons/characters_btn4.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "assets/buttons/characters_btn3.png");
    });

    $('#characters').click(()=>{
        var url = "characters.html?" + queryParams.toString();
        location.href=url;
    });

    
});