var virtualCash = 10;

function updateCash (){
    $('#money').html = (virtualCash);
}

function payForGame(){
    if(virtualCash >= 2){
        virtualCash -= 2;
        checkInput();
    } else if(virtualCash < 2){
        $('#message').html("You don't have enough money, go make some, Mr. Anderson");
    }
}

function checkInput(){
    // get input numbers
    var inputs = [$('#input1').val(), $('#input2').val(), $('#input3').val(), $('#input4').val()];
    inputs = inputs.map(parseFloat);
    // test values 
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i] < 1 || inputs[i] > 10 || !isNaN(inputs[i])){
            for(var j = i+1; j < inputs.length; j++){
                if(inputs[j] === inputs[i]){
                    $('#message').html("You can't use duplicate numbers, Mr. Anderson");
                    return;
                }
            }
        } else {
            $('#message').html("You need to use four numbers from 1 - 10, Mr. Anderson");
            return;
        }
    }
    startSpinner();
}
// get info from website and write it to a div
function startSpinner(){
    // css to be added
    imagePlacement = {"background-image":"url(./img/spinning.gif)"};
    for(var i = 1; i < 5; i++){
        $("#output" + i).css(imagePlacement);
    }
    
    // call get output function
    getOutput();
}

// get random numbers from website
function getOutput(){
    var outputArr = [];
    function getNums(){
        $.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new', function (randOut) {
            outputArr.push(randOut);
            callback();
        });
    }
    function callback(){
        if(outputArr.length < 4){
            getNums();
        } else {
            checkNums();
        }
    }
    getNums();
    function checkNums(){
        var sortedOutput = outputArr.slice().sort();
        var results = [];
        for(var i = 0; i < sortedOutput.length - 1; i++){
            if(sortedOutput[i+1] == sortedOutput[i]){
                results.push(sortedOutput[i]);
            }
        }
        if(results.length === 0){
            displayResult(outputArr);
        } else{
            //test
            getOutput();
        }
    }
}

function displayResult(numbers){
    for(var i = 1; i < 5; i++){
        element = $('#output' + i);
        element.removeAttr('style');
        element.html(numbers[i - 1]);
    }
    winning(numbers);
}

// check numbers and determine how much is won
function winning(outputs){
    // get inputs and outputs from divs
    var inputs = [$('#input1').val(), $('#input2').val(), $('#input3').val(), $('#input4').val()];   

    var winCount = 0;

    for(var i = 0; i < inputs.length; i++){
           if(outputs.indexOf(inputs[i]) != -1){
                winCount += 1;
            } 
    }

    if(winCount === 0 || winCount == 1){
        $("#message").html("No luck, play again?");
    } else if(winCount == 2){
        $("#message").html("Lucky, you win 4$");
        virtualCash += 4;
    } else if(winCount == 3){
        $("#message").html("Lucky! You win 8$");
        virtualCash += 8;
    } else if(winCount == 4){
        $("#message").html("Jackpot!!! You win 40$");
        virtualCash += 40;
    }
    $('#money').html(virtualCash);
}

function startGame(){
    $('#money').html(virtualCash);
    $('.outputs').empty();
    payForGame();

}

$(document).ready(function (){
    $("#gobutton").click(startGame);
});

