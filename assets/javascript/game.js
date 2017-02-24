var targetNumber = 999;
var counter = 0;
var button1 = 0;
var button2 = 0;
var button3 = 0;
var button4 = 0;
var loss = 0;
var win = 0;


function start() {
    var targetNumber = 999;
    var counter = 0;
    var button1 = 0;
    var button2 = 0;
    var button3 = 0;
    var button4 = 0;
    $(".number-add").text("...");


    // Set randomized set goal for the goal of that round
    var targetNumber = Math.floor(Math.random() * 100) + 30;
    console.log("Goal is ", targetNumber) // Check to show the number shows value
    $(".goal").text(targetNumber);

    // Set randomized numbers for each button for this round.
    var button1 = Math.floor(Math.random() * 20) + 7;
    console.log("Button 1 is ", button1)
    var button2 = Math.floor(Math.random() * 10) + 2;
    console.log("Button 2 is ", button2)
    var button3 = Math.floor(Math.random() * 25) + 3;
    console.log("Button 3 is ", button3)
    var button4 = Math.floor(Math.random() * 2) + 1;
    console.log("Button 4 is ", button4)

    $(".button1").on("click", function() {
        counter += button1;
        $(".number-add").text(counter);
        if (counter === targetNumber) {
            console.log("You've won");
            win++;
            $(".win-counter").text(win);
            counter = 0;
            targetNumber = 999;
            start();
        } else if (counter >= targetNumber) {
            console.log("You've lost");
            loss++;
            $(".loss-counter").text(loss);
            counter = 0;
            targetNumber = 999;
            start();
        }

    });

    $(".button2").on("click", function() {
        counter += button2;
        $(".number-add").text(counter);
        if (counter === targetNumber) {
            console.log("You've won");
            win++;
            $(".win-counter").text(win);
            counter = 0;
            targetNumber = 999;
            start();
        } else if (counter >= targetNumber) {
            console.log("You've lost");
            loss++;
            $(".loss-counter").text(loss);
            counter = 0;
            targetNumber = 999;
            start();
        }

    });

    $(".button3").on("click", function() {
        counter += button3;
        $(".number-add").text(counter);
        if (counter === targetNumber) {
            console.log("You've won");
            win++;
            $(".win-counter").text(win);
            counter = 0;
            targetNumber = 999;
            start();
        } else if (counter >= targetNumber) {
            console.log("You've lost");
            loss++;
            $(".loss-counter").text(loss);
            counter = 0;
            targetNumber = 999;
            start();
        }

    });

    $(".button4").on("click", function() {
        counter += button4;
        $(".number-add").text(counter);
        if (counter === targetNumber) {
            console.log("You've won");
            win++;
            $(".win-counter").text(win);
            counter = 0;
            targetNumber = 999;
            start();
        } else if (counter >= targetNumber) {
            console.log("You've lost");
            loss++;
            $(".loss-counter").text(loss);
            counter = 0;
            targetNumber = 999;
            start();
        }
    });
    console.log("This is the current counter", counter, "and target", targetNumber)
};

start()


if (counter === targetNumber) {
    console.log("You've won");
    win++;
    $(".win-counter").text(win);
    start();
} else if (counter > targetNumber) {
    console.log("You've lost");
    loss++;
    $(".loss-counter").text(loss);
    start();
}
