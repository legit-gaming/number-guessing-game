
var secretNum = 0;
var message = '';
var count = 0;

function generateRandomNum(){
    secretNum = Math.round(Math.random()*100);
    count = 0;
}
generateRandomNum();

function aGuess(){
    var num = document.getElementById('inputGuess').value;
    if (num < secretNum){
        //you are too low
        message='Sorry ' + num + ' is too low. Guess again.';
    } else if (num > secretNum){
        //you are too high
        message='Sorry ' + num + ' is too high. Guess again.';
    } else if (num == secretNum){
        //you are correct
        message='Congrats ' + num + ' is correct. Did you cheat? Probably not, it took you ' + count + ' tries.';
    }
    alertResult(message);
    count++;
}

function alertResult(){
    console.log(message + ' ' + secretNum);

    //display message in html
    var results = document.getElementById('results');
    results.innerHTML = '<p>' + message + '</p>';
}

//var submitButton = document.getElementById("submit");
//submitButton.addEventListener("click", aGuess);