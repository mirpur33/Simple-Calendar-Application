$(document).ready(function () {

    var displayTime = document.querySelector ("#currentDay");

    var currentTime = dayjs().format("dddd, MMMM, D, YYYY");

    displayTime.textContent = currentTime;

    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    function hourTracker() {

        var currentHour = dayjs().hour();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });
    }
})