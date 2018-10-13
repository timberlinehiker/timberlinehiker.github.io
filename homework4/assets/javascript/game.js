//DEFINE VARS

//random generated target number
var randomNumber = 0;
//track number of losses
var losses = 0;
//track number of wins
var wins = 0;
//generate a random number for each crystal
var random = 0;
//store random number for each crystal
var crystals = [];
//current guesses total
var total = 0;

//$(function{})
//DEFINE FUNCTIONS 

// Reset game to start a new round
function startRound() {
    //  Establishes target random number between 19 - 120 
    randomNumber = Math.floor(Math.random() * (101) + 19);
    $(".target").text(randomNumber);
    //  console.log(randomNumber);

    // Estabishes each crystal value randomly
    for (var i = 0; crystals.length < 4; i++) {
        random = Math.floor(Math.random() * 12) + 1;
        //checks to make sure there are no duplicate crystal values
        if (crystals.includes(random) && crystals.length < 4) {
            random = Math.floor(Math.random() * 12) + 1;
            // console.log(random);
            continue;
        }
        else {
            //loads array with each crystal's value
            crystals.push(random);
        }
        console.log(crystals);
    }
    //pushes the crystal values to the html on the page
    //INSTEAD, PUSH VALUES TO THE BUTTONS BUT DO NOT SHOW ON THE PAGE
    for (var j = 0; j < crystals.length; j++) {
        var crystalValue = "#c" + j;
        $(crystalValue).text(crystals[j]);
        // document.getElementById("c" + j).innerHTML = crystals[j];
    }
    total = 0;
    $("#guessed").text(total);
    


}

//function buttonClick() {
    $("button").click(function() {
        var buttonValue = $(this).text();
        console.log(buttonValue);
        //console.log(val.this);
        total = total + parseInt(buttonValue);
        console.log(total);
        $("#guessed").text(total);
        if (total === randomNumber) {
            wins++;
            alert("You win!");
            $("#wins").text(wins)
            startRound();
        }
        if (total > randomNumber) {
            losses++;
            alert("You loose!");
            $("#losses").text(losses);
            startRound();
        }
    });
function win() {
    
}

// EXECUTE FUNCTIONS

startRound();

    // var crystal = $("<div>");
    // crystal.addClass("crystal");
    // crystal.attr({  add class function
        // "class": 'crysal'
    // });

    // $(".crystals").append(crystal);


// Psuedo code
    // 4 crystals and a random result
    // every crystal has a number with a number between 1 - 12
        // at least one odd nunber
        // no doubles
    // a new random number should generate a everytime player wins or lose
        // to those 4 crystals
    // when clicking one of the four crystals, should add the previous result
        // until it equals the random result
        // if it is greater than the random result, +1 loss counter
        // if it is equal, +1 to win counter

