
function returnSound(colour) {
    return new Audio('./sounds/' + colour + '.mp3');
}

function animatePress(colour) {
    $('#' + colour).addClass('pressed');
    setTimeout(function () {
        $('#' + colour).removeClass('pressed');
    }, 100);
}

function playingGame(){


    $('.btn').click(function () {
        var colour = $(this).attr('id');
        returnSound(colour).play();
        animatePress(colour);

        arrayOfColoursHuman.push(colour);
        console.log('human is:')
        console.log(arrayOfColoursHuman);
        console.log('computer is:')
        console.log(arrayOfColoursComputer);
        if (checkAnswer()) {

            if (arrayOfColoursHuman.length === arrayOfColoursComputer.length) {
                // All correct answers so restart next level.

                console.log('22222222222222222222');
                setTimeout(function () {
                    nextRandomColour()
                }, 500);
                $('h1').text('Level ' + (arrayOfColoursHuman.length + 1) );
                arrayOfColoursHuman = [];
            }

        } else {
            $('h1').text('Game Over, Press Any Key to Restart');
            $('body').addClass('game-over');
            setTimeout(function () {
                $('body').removeClass('game-over');
            }, 200);
            returnSound('wrong').play();
            arrayOfColoursComputer = [];
            arrayOfColoursHuman = [];
        }

    });
}

function pressAnyKeyToStart() {
    $(document).keypress(function () {
        $('h1').text('Level ' + (arrayOfColoursHuman.length + 1) );
        nextRandomColour();
        console.log('computer is:')
        console.log(arrayOfColoursComputer);

    });

}

function run() {
    pressAnyKeyToStart();
    playingGame();

};


var arrayOfColoursComputer = [];
var arrayOfColoursHuman = [];
var arrayOfFourColours = ['green', 'red', 'yellow', 'blue'];



run();


function nextRandomColour() {

    var randomColourIndex = Math.floor(Math.random() * 4);
    var currentNextColour = arrayOfFourColours[randomColourIndex];
    animatePress(currentNextColour);
    returnSound(currentNextColour).play();
    arrayOfColoursComputer.push(currentNextColour);

}

function checkAnswer() {
    for(var i = 0; i < arrayOfColoursHuman.length; i++) {
        if (arrayOfColoursHuman[i] !== arrayOfColoursComputer[i]) {
            return false;
        }
    }
    return true;
}
