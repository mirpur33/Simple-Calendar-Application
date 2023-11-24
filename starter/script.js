$(document).ready(function () {

    var displayTime = document.querySelector ("#currentDay");

    var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A");

    displayTime.textContent = currentTime;



    function saveEvent() {
        var blockHour = $(this).closest(".time-block").attr("id");
        var event = $(this).siblings(".description").val();

        localStorage.setItem(blockHour, event);

        $(".saveBtn").on("click", saveEvent);
    };

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
    hourTracker();

    function displayText() {
        $(".time-block").each(function () {
            var blockHour = $(this).attr("id");
            $(this).children(".description").val(localStorage.getItem(blockHour));
        });
    }

    displayText();
});