$(function() {
    
    // Browser Choice
    let browserChoice = 1;

    const browserMakeChoice = function () {
        const options = [
            'rock',
            'paper',
            'scissors',
            'lizard',
            'spock'
        ]
        browserChoiceIndex = Math.floor(Math.random()* options.length);
        browserChoice = options[browserChoiceIndex];   
    }

    // API Call for the Joke
    const joke = function() {
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            method: "GET",
            dataType: "json",
        }).then(function(data){
            $('.jokeGoesHere').text(data.setup);
            $('.punchLineHere').text(data.punchline);
        });
    };
    
    // Declare user variable
    
    let userChoice = "rock";
    
    // Functions for updating the result text
    
    const updateResultTie = function () {
        $('.jokeGoesHere').text('');
        $('.punchLineHere').text('');
        $('.win-lose').text('It\'s a tie!');
    };
    const updateResultLose = function() {
        $('.jokeGoesHere').text('');
        $('.punchLineHere').text('');
        $('.win-lose').text(`The browser picked ${browserChoice}, you lose.`);
    };
    const updateResultWin = function () {
        $('.win-lose').text(`The browser picked ${browserChoice}, you've won a joke!`);
        joke ();
        
    };

    // Checking the user input against browser choice

    const checkResults = function () {
        if (userChoice == 'rock') {
            checkRock();
        } else if (userChoice == 'paper') {
            checkPaper();
        } else if (userChoice == 'scissors') {
            checkScissors();
        } else if (userChoice == 'lizard') {
            checkLizard();
        } else if (userChoice == 'spock') {
            checkSpock();
        }
    }

    // The smaller check functions 

    const checkRock = function () {
        if (browserChoice == "rock") {
            console.log(`It's a tie`);
            updateResultTie ();
        } else if (browserChoice == "paper" || browserChoice == "spock") {
            console.log (`The browser picked ${browserChoice}, you lose.`);
            updateResultLose ();
        } else if (browserChoice == "scissors" ||browserChoice == "lizard") {
            console.log(`The browser picked ${browserChoice}, you win!`);
            updateResultWin ();
        }
    };

    const checkPaper = function () {
        if (browserChoice == "paper") {
            console.log(`It's a tie`);
            updateResultTie ();
        } else if (browserChoice == "scissors" || browserChoice == "lizard") {
            console.log (`The browser picked ${browserChoice}, you lose.`);
            updateResultLose ();
        } else if (browserChoice == "rock" || browserChoice == "spock") {
            console.log (`The browser picked ${browserChoice}, you win!`);
            updateResultWin ();
        }
    };

    const checkScissors = function () {
        if (browserChoice == "scissors") {
            console.log(`It's a tie`);
            updateResultTie ();
        } else if (browserChoice == "rock" || browserChoice == "spock") {
            console.log (`The browser picked ${browserChoice}, you lose.`);
            updateResultLose ();
        } else if (browserChoice == "paper" || browserChoice == "lizard") {
            console.log (`The browser picked ${browserChoice}, you win!`);
            updateResultWin ();
        }
    };

    const checkLizard = function () {
        if (browserChoice == "lizard") {
            console.log(`It's a tie`);
            updateResultTie ();
        } else if (browserChoice == "rock" || browserChoice == "scissors") {
            console.log (`The browser picked ${browserChoice}, you lose.`);
            updateResultLose ();
        } else if (browserChoice == "paper" || browserChoice == "spock") {
            console.log (`The browser picked ${browserChoice}, you win!`);
            updateResultWin ();
        }
    };

    const checkSpock = function () {
        if (browserChoice == "spock") {
            console.log(`It's a tie`);
            updateResultTie ();
        } else if (browserChoice == "lizard" || browserChoice == "paper") {
            console.log (`The browser picked ${browserChoice}, you lose.`);
            updateResultLose ();
        } else if (browserChoice == "scissors" || browserChoice == "rock") {
            console.log (`The browser picked ${browserChoice}, you win!`);
            updateResultWin ();
        }
    };

    // Event listener for the button click to set user choice

    $('#buttons button').on('click', function(){
        browserMakeChoice ();
        console.log(browserChoice);
        userChoice = $(this).attr('id');
        checkResults ();
    });   
});