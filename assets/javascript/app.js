/* 
Proper steps
set up first question and possible answers
assign them values of correct and incorrect
lower correct% each time a question is missed

*/


const questionAnswerKey = {
    0: {
        Q: 'What is the first letter in this question?',
        correctA: 'W',
        incorrectA: ['What?', 'T', '2']
    },
    1: {
        Q: 'What color is the sky?',
        correctA: 'Blue',
        incorrectA: ['Green', 'Red', 'Brown']
    },
    2: {
        Q: '3 + 3 = ?',
        correctA: '6',
        incorrectA: ["33", "8", "5"]
    },
    3: {
        Q: 'Yellow is a ?',
        correctA: 'Color',
        incorrectA: ['Taste', 'Feeling', 'great variable name']
    },
    4: {
        Q: 'The cow goes ?',
        correctA: "Moo",
        incorrectA: ["Hey", "You wanna hang out?", "Quack"]
    },
    5: {
        Q: 'Last question',
        correctA: 'Last answer',
        incorrectA: ["Not answer", "Definitely not the answer", "you think this might be the answer but it isn't"]
    }
}

var tries = 3, questions = 6, correct = 0, correctPercent = 100;


document.addEventListener("DOMContentLoaded", function start(event) {


    var startingTime = 1500, minusThis = 10;

    let initialTimer = setInterval(() => {
        $("#questionTimer").html(((startingTime - minusThis) / 100));
        minusThis += 10;
        if (minusThis == 1510) { clearInterval(initialTimer) }
    }, 100);


    $("#currentPercentCorrect").html(`${correctPercent}%`);
    $("#currentQuestion").html(questionAnswerKey[0].Q);
    $("#currentQuestion").attr('val', questionAnswerKey[0].correctA);
    $("#possibleAnswer1").html(questionAnswerKey[0].correctA);
    $("#possibleAnswer2").html(questionAnswerKey[0].incorrectA[0]);
    $("#possibleAnswer3").html(questionAnswerKey[0].incorrectA[1]);
    $("#possibleAnswer4").html(questionAnswerKey[0].incorrectA[2]);
    console.log($("#currentQuestion").val());

    // var i = 1;
    // interval = 2000;
    // let nextQuestion = setInterval(() => {        
    //     $("#currentQuestion").html(questionAnswerKey[i].Q);
    //     $("#currentQuestion").attr('val', questionAnswerKey[i].correctA);
    //     $("#possibleAnswer1").html(questionAnswerKey[i].correctA);
    //     $("#possibleAnswer2").html(questionAnswerKey[i].incorrectA[0]);
    //     $("#possibleAnswer3").html(questionAnswerKey[i].incorrectA[1]);
    //     $("#possibleAnswer4").html(questionAnswerKey[i].incorrectA[2]);
    //     i++;
    // }, interval);


    let appendRandom = $("possible")

    //create function that will randomly choose between appending and prepending as child of  current question child I think is pretty good idea tbh but overall not so great that I spent 3 hours working on this hw assignment in total.. if that












})