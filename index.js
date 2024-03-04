$(document).ready(function(){
    
    
    var queryParams = new URLSearchParams(window.location.search);
    
    console.log("index 진입\n"+queryParams.toString());

    if (queryParams.has("difficulty")) {

        const difficulty = parseInt(queryParams.get("difficulty")); //difficulty : 난이도
        console.log("난이도: " + difficulty);
     
        } else {
            // "difficulty" 파라미터가 없는 경우의 처리
            console.log("난이도 파라미터가 없습니다.");
        }
        
    
        if(queryParams.has("resetHat")){
            
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

    $('#play img').hover(function(){
        $(this).attr("src", "start_img/start_start_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_start_btn.png");
    });
    
    $('#characters img').hover(function(){
        $(this).attr("src", "start_img/start_characters_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_characters_btn.png");
    });
    
    $('#exit img').hover(function(){
        $(this).attr("src", "start_img/start_exit_btnhover.png");
        $(this).css('width','22vw');
    }, function() {
        $(this).attr("src", "start_img/start_exit_btn.png");
    });  
   

    $('#play').click(()=>{
        var url = "setting_game.html?" + queryParams.toString();
        location.href=url;
    });
    $('#characters').click(()=>{
        var url = "characters.html?" + queryParams.toString();
        location.href=url;
    });
    
    //웹 페이지 즁료
    $('#exit').click(function() {
        if (confirm('게임을 종료하시겠습니까?')) {
            window.location.href = "about:blank";
            // window.close();
        }
    });

});
