
document.addEventListener("DOMContentLoaded", function start(event) {

    var questionAnswerKey = {
        0: {
            Q: 'What is the first letter in this question?',
            correct_answer: 'W',
            allAnswers: ['What?', 'T', '2', 'W']
        },
        1: {
            Q: 'What color is the sky?',
            correct_answer: 'Blue',
            allAnswers: ['Green', 'Blue', 'Red', 'Brown']
        },
        2: {
            Q: '3 + 3 = ?',
            correct_answer: '6',
            allAnswers: ["33", '6', "8", "5"]
        },
        3: {
            Q: 'Yellow is a ?',
            correct_answer: 'Color',
            allAnswers: ['Taste', 'Color', 'Feeling', 'great variable name']
        },
        4: {
            Q: 'The cow goes ?',
            correct_answer: "Moo",
            allAnswers: ["Hey", "Moo", "You wanna hang out?", "Quack"]
        },
        5: {
            Q: 'Last question',
            correct_answer: 'Last answer',
            allAnswers: ["Not answer", "Definitely not the answer", 'Last answer', "you think this might be the answer but it isn't"]
        }
    }
    var tries = 3, questions = 6, correct = 0, currentQuestionCount = 0, initialTimer;
    const question_timer = document.getElementById("questionTimer");
    let A0 = document.getElementById("answer-holder-0");
    let A1 = document.getElementById("answer-holder-1");
    let A2 = document.getElementById("answer-holder-2");
    let A3 = document.getElementById("answer-holder-3");
    var curr_question = questionAnswerKey[currentQuestionCount];
    document.getElementById("currentPercentCorrect").innerHTML = `${correct}/${questions} correct`;

    function answerClicked() {

        if (currentQuestionCount == 6 && correct <= 3) {
            alert(`You got ${correct} correct,.. Try again?`);
            setTimeout(() => { currentQuestionCount = 0; correct = 0; questionAnswerKey = {
                0: {
                    Q: 'What is the first letter in this question?',
                    correct_answer: 'W',
                    allAnswers: ['What?', 'T', '2', 'W']
                },
                1: {
                    Q: 'What color is the sky?',
                    correct_answer: 'Blue',
                    allAnswers: ['Green', 'Blue', 'Red', 'Brown']
                },
                2: {
                    Q: '3 + 3 = ?',
                    correct_answer: '6',
                    allAnswers: ["33", '6', "8", "5"]
                },
                3: {
                    Q: 'Yellow is a ?',
                    correct_answer: 'Color',
                    allAnswers: ['Taste', 'Color', 'Feeling', 'great variable name']
                },
                4: {
                    Q: 'The cow goes ?',
                    correct_answer: "Moo",
                    allAnswers: ["Hey", "Moo", "You wanna hang out?", "Quack"]
                },
                5: {
                    Q: 'Last question',
                    correct_answer: 'Last answer',
                    allAnswers: ["Not answer", "Definitely not the answer", 'Last answer', "you think this might be the answer but it isn't"]
            }}; answerClicked()}, 5000);
        }
        else if (currentQuestionCount == 6 && correct > 3 && correct < 6) {
            alert(`You got ${correct} correct, nice! Try again?`);
            setTimeout(() => { currentQuestionCount = 0; correct = 0; questionAnswerKey = {
                0: {
                    Q: 'What is the first letter in this question?',
                    correct_answer: 'W',
                    allAnswers: ['What?', 'T', '2', 'W']
                },
                1: {
                    Q: 'What color is the sky?',
                    correct_answer: 'Blue',
                    allAnswers: ['Green', 'Blue', 'Red', 'Brown']
                },
                2: {
                    Q: '3 + 3 = ?',
                    correct_answer: '6',
                    allAnswers: ["33", '6', "8", "5"]
                },
                3: {
                    Q: 'Yellow is a ?',
                    correct_answer: 'Color',
                    allAnswers: ['Taste', 'Color', 'Feeling', 'great variable name']
                },
                4: {
                    Q: 'The cow goes ?',
                    correct_answer: "Moo",
                    allAnswers: ["Hey", "Moo", "You wanna hang out?", "Quack"]
                },
                5: {
                    Q: 'Last question',
                    correct_answer: 'Last answer',
                    allAnswers: ["Not answer", "Definitely not the answer", 'Last answer', "you think this might be the answer but it isn't"]
            }};answerClicked()}, 5000);
        }
        else if (currentQuestionCount == 6 && correct == 6) {
            alert(`You got ${correct} correct, perfect! Try again?`);
            setTimeout(() => { currentQuestionCount = 0; correct = 0; questionAnswerKey = {
                0: {
                    Q: 'What is the first letter in this question?',
                    correct_answer: 'W',
                    allAnswers: ['What?', 'T', '2', 'W']
                },
                1: {
                    Q: 'What color is the sky?',
                    correct_answer: 'Blue',
                    allAnswers: ['Green', 'Blue', 'Red', 'Brown']
                },
                2: {
                    Q: '3 + 3 = ?',
                    correct_answer: '6',
                    allAnswers: ["33", '6', "8", "5"]
                },
                3: {
                    Q: 'Yellow is a ?',
                    correct_answer: 'Color',
                    allAnswers: ['Taste', 'Color', 'Feeling', 'great variable name']
                },
                4: {
                    Q: 'The cow goes ?',
                    correct_answer: "Moo",
                    allAnswers: ["Hey", "Moo", "You wanna hang out?", "Quack"]
                },
                5: {
                    Q: 'Last question',
                    correct_answer: 'Last answer',
                    allAnswers: ["Not answer", "Definitely not the answer", 'Last answer', "you think this might be the answer but it isn't"]
            }}; answerClicked()}, 5000);
        }
        else if (currentQuestionCount < 6) {

            curr_question = questionAnswerKey[currentQuestionCount];

            document.getElementById("currentQuestion").innerHTML = curr_question.Q;
            var startingTime = 1500, minusThis = 10;

            initialTimer = setInterval(() => {
                question_timer.innerHTML = (((startingTime - minusThis) / 100));
                minusThis += 10;
                if (minusThis == 1510) { clearInterval(initialTimer) }
            }, 100);

            for (let i = 0; i < 4; i++) {
                let random_answer = Math.floor(Math.random() * questionAnswerKey[currentQuestionCount].allAnswers.length) + 0;
                let pushed_answer = questionAnswerKey[currentQuestionCount].allAnswers[random_answer];
                document.getElementById(`answer-holder-${i}`).innerHTML = pushed_answer;
                questionAnswerKey[currentQuestionCount].allAnswers.splice(random_answer, 1);
            }
        }
    }
    answerClicked();

    A0.addEventListener('click', function (event) {

        event.preventDefault();
        let userClicked = this.textContent;
        if (userClicked == curr_question.correct_answer) {
            correct += 1;
            document.getElementById("currentPercentCorrect").innerHTML = `${correct}/${questions} correct`;
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }
        else {
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }

    });

    A1.addEventListener('click', function (event) {

        event.preventDefault();
        let userClicked = this.textContent;
        if (userClicked == curr_question.correct_answer) {
            correct += 1;
            document.getElementById("currentPercentCorrect").innerHTML = `${correct}/${questions} correct`;
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }
        else {
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }

    });

    A2.addEventListener('click', function (event) {

        event.preventDefault();
        let userClicked = this.textContent;
        if (userClicked == curr_question.correct_answer) {
            correct += 1;
            document.getElementById("currentPercentCorrect").innerHTML = `${correct}/${questions} correct`;
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }
        else {
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }

    });

    A3.addEventListener('click', function (event) {

        event.preventDefault();
        let userClicked = this.textContent;
        if (userClicked == curr_question.correct_answer) {
            correct += 1;
            document.getElementById("currentPercentCorrect").innerHTML = `${correct}/${questions} correct`;
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }
        else {
            currentQuestionCount += 1;
            
            clearInterval(initialTimer);
            answerClicked();
        }

    });

});
    //create function that will randomly choose between appending and prepending as child of  current question child I think is pretty good idea tbh but overall not so great that I spent 3 hours working on this hw assignment in total.. if that












