$(document).ready(function () {

    var displayTime = document.querySelector ("#currentDay");

    var currentTime = dayjs().format("dddd, MMMM, D, YYYY");

    displayTime.textContent = currentTime;

    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})