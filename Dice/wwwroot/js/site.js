// Roll the dice
roll = function () {
    $("#rollBtn").addClass("disabled");

    var dice = $(".die-faces");
    var numComplete = 0;

    dice.each(function (index, die) {
        var numFaces = parseInt($(die).text());

        $.get("/api/Roll/" + numFaces, function (response) {
            //dice.children(".die-value:eq(" + index + ")").text(response);

            setDieValue($(".die-value").eq(index), response);
            numComplete++;

            if (numComplete === dice.length) {
                $("#rollBtn").removeClass("disabled");
            }
        });
    });
};

setDieValue = function (element, value) {
    element.text(value);
};