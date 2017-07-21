$(function () {
    var diceValues = $(".die-value").map(function () {
        return parseInt(this.innerText);
    });

    diceDrawer = new DiceDrawer($("#drawArea"), diceValues);
});

// Roll the dice
roll = function () {
    var dice = $(".dice");

    dice.each(function () {
        var die = $(this);
        var numFaces = parseInt(die.find(".die-faces").text());

        $.get("/api/Roll/" + numFaces, function (response) {
            die.find(".die-value").text(response);
        });
    });
};
