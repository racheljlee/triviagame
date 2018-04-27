$(document).ready(function () {
    var startGameImgBefore = $("#start-image-before");
    var startGameImgAfter = $("#start-image-after");
    var startGameBtn = $("#start-game");
    var timerDiv = $("#timer-div");
    var questionsDiv = $("#questions");
    var endGameDiv = $("#end-game");
    var scoreDiv = $("#score-div");
    var submitBtn = $("#submit-btn");

    var totalScore = 0;
    var timer = 100; 
    $("#timer").text(timer);

    // initial hide everything
    startGameImgAfter.hide();
    timerDiv.hide();
    questionsDiv.hide();
    endGameDiv.hide();
    scoreDiv.hide();

    // start game button initiates
    $("#start-game").on("click", function(){
        startGameImgBefore.hide();
        startGameImgAfter.show();
        startGameBtn.hide();
        timerDiv.show();
        questionsDiv.show();
        endGameDiv.show();
        run() // starts timer on click

    })

    // interval function, decrement of 1s
    function run (){
        intervalId = setInterval(decrement, 1000);
    }
    // decrement function
    function decrement() {
        if (timer === 0){
            clearInterval(intervalId);
            $(".timer").html("<h2>Time's up!</h2>");
            questionsDiv.hide();
            endGameDiv.hide();
        } else {
            timer--;
            $("#timer").text(timer);
        }
    }
    
    // choosing answers with the input radio buttons
    $("input").on("click", function() {
        var value = $(this).val();

        // this needs to be updated to calculate score correctly
        if (value === "1") { 
            totalScore++;
        } 
        $("#total-score").text(totalScore + "/10");
    });

    // on click submit button --> show results
    submitBtn.on("click", function() {
        timerDiv.hide();
        questionsDiv.hide();
        endGameDiv.hide();
        scoreDiv.show();

        clearInterval(intervalId);

        // based on results, an image shows up accordingly
        if (totalScore === 9 || totalScore === 10) {
            startGameImgAfter.html("<img src='assets/images/score_9-10.gif'><br><h2>Oh, baby! You're on fire!</h2>")
        } else if (totalScore === 7 || totalScore === 8) {
            startGameImgAfter.html("<img src='assets/images/score_7-8.gif'><br><h2>Yayy! Not bad, my friend!</h2>")
        } else if (totalScore === 4 || totalScore === 5 || totalScore === 6) {
            startGameImgAfter.html("<img src='assets/images/score_4-6.gif'><br><h2>Oh my glob! I think you could do better.</h2>")
        } else {
            startGameImgAfter.html("<img src='assets/images/score_0-3.gif'><br><h2>Oh no! I am so sad you do not know anything!</h2>")
        }

    });

});