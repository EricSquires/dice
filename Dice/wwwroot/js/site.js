// Roll the dice
roll = function () {
    startRoll();

    var dice = $(".die-faces");
    var numComplete = 0;

    $(".dice").each(function () {
        var die = $(this);
        var value = die.find(".die-value");
        var numFaces = parseInt(die.find(".die-faces").attr("numfaces"));

        $.get("/api/Roll/" + numFaces, function (response) {
            value.text(response);
            numComplete++;

            if (numComplete === dice.length) {
                endRoll();
            }
        });
    });
};

startRoll = function () {
    $("#rollBtn").addClass("disabled");
    $(".die-value").removeClass("visible");
    $(".die-value").addClass("hidden");
};

endRoll = function () {
    $("#rollBtn").removeClass("disabled");
    $(".die-value").removeClass("hidden");
    $(".die-value").addClass("visible");
};

setDice = function () {
    var args = Array.from(arguments);

    for (var i = 0; i < 3; i++) {
        var die = $(".dice").eq(i);

        if (i >= args.length) {
            die.addClass("hidden");
        }
        else {
            die.removeClass("hidden");

            var faces = die.find(".die-faces");
            faces.attr("numfaces", args[i]);
            faces.text("D" + args[i]);
        }
    }

    roll();
};