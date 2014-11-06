$(function () {
    $("form#calculator").show();
    $("#calculator-calculate").prop("disabled", false);

    $("#calculator-units").change(function () {
        var unit = $(this).val().toLowerCase();

        $(".calculator-unit").text(unit);
    });

    $("#calculator-calculate").click(function () {
        var engineerHours = $("#calculator-engineer-hours").val();

        $("#calculator-actual-hours").val(engineerHours);
        $("#calculator-paid-hours").val(engineerHours * 3);
    });
});