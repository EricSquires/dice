// Roll the dice
roll = function () {
    var dice = $(".dice");

    dice.each(function (index, die) {
        var numFaces = parseInt($(die).children(".die-faces").text());

        $.get("/api/Roll/" + numFaces, function (response) {
            dice.children(".die-value:eq(" + index + ")").text(response);
        });
    });
};