<script type="text/javascript">


        //  DECLARE VARIABLES

        // <!-- set up array for words that the game can choose from -->
        var wordList = [
            "sequoia",
            "redwood",
            "sierra",
            "cascade",
            "ocean",
            "poppy",
            "humpback whale",
            "calla lily",
            "redtailed hawk",
            "monterrey cyprus",
        ]
        var userGuess = [];
        var alreadyGuessed = [];

        var letters = [];
        var wordInPlay = []


        //  SET UP INTITAL VALUES IN RESETGAME METHOD    
        function resetGame() {
            userGuess = [];
            alreadyGuessed = [];
            letters = [];
            wrongGuesses = 10;
            $("#userGuess").empty();
            $("#alreadyGuessed").empty();
          
            // <!-- pick one of the words at random 
            wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];
            console.log(wordInPlay);

            //populate an array with the letters of the wordinplay

            for (var i = 0; i < wordInPlay.length; i++) {
                letters[i] = wordInPlay.charAt(i);
                userGuess[i] = "_";
                $("#userGuess").append(userGuess[i] + " ");
                console.log(letters);
                //document.write(letters[i] + ' ');

            }
            $("#wrongGuess").html(wrongGuesses);


        }



        // CREATE LETTER LISTENER
        // create an array that collects the users guesses
        //document.addEventListener("keyup", function() {

        document.onkeyup = function (guess) {

            // Determines which key was pressed.

            console.log(guess.key);

            //if key pressed is already in the user guess array, alert that they alreay guessed that letter
            if (alreadyGuessed.includes(guess.key) ||userGuess.includes(guess.key)) {
                alert("Already guessed that one");
                return false;
            }
            else if (letters.includes(guess.key)) {
                $("#userGuess").empty();
                    for (var i = 0; i < letters.length; i++) {
                        if (letters[i] === guess.key) {
                            userGuess[i] = guess.key;
                            // $("#userGuess").html(userGuess);


                        }
                        $("#userGuess").append(userGuess[i] + " ");
                    }
                    
                }
            
            else {
                wrongGuesses = wrongGuesses - 1;
                console.log(wrongGuesses);
                $("#wrongGuess").html(wrongGuesses);
                alreadyGuessed.push(guess.key);
                $("#alreadyGuessed").append(guess.key, " ");
            }
            console.log(userGuess, alreadyGuessed);
            if (wrongGuesses <= 0) {
                alert("YOU LOSE");
                resetGame();
            }
            console.log(userGuess, letters);
            if(userGuess.toString() === letters.toString()) {
                alert("YOU WIN!!");
                resetGame();
            }
        }

        // CALL RESET GAME TO START GAME ON PAGE LOAD
        resetGame();







    // <!-- wait for a key to be hit with an .on function -->



      // generate the blank spaces on the screen with underscores in lieu of the letters, separated by spaces 
    //using a for loop that runs through the wordinplay.charat[] array one at a time and then inserts a space before iterating-->



    //instead of populating with the word, start by populating the number of underscores and then when a 
    //guess is made, REPLACE that index with the letter that matches


// when the user guesses a letter, send that letter into an array using the .push function
//   check to see if the letter pressed matches any of the letters already guessed.  
// If yes, make an obnoxious sound and do nothing else until another guess.
//     else, register the letter as a guess as an entry in the array -->

//     <!-- when a key is pressed use an if statement to check if it matches the letter in the word, if it does, reveal the letter, else go to the next letter. 
//     loop that through all the letters with the length of the array and then if it doesn't match any, add and display it to an array of guessed letters and subtract the guesses remaining value by one. -->

//  <!--check to see if all the letters in the word are revealed.  If yes, add one to the win counter, display winner banner above the side image and game divs,  and play appropriate music.  If no, check to see if number of guesses is zero and plyer loses and the press any key to begin comes back -->

//     <!--  -->

//  <!--  -->

    </script>