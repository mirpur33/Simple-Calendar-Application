$(document).ready(function () {
    var displayTime = document.querySelector("#currentDay");
    
    var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  
    displayTime.textContent = currentTime;

    function hourTracker() {

        var currentHour = dayjs().hour();

        $('.time-block').each(function() {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);

          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).addClass('present');
          } else {
            $(this).addClass('future');
          }
        });
      }

      function loadEvents() {
        $('.time-block').each(function() {
          var blockHour = $(this).attr('id');
          var event = localStorage.getItem(blockHour);

          if (event) {
            $(this).find('.description').val(event);
          }
        });
      }

      function saveEvent() {
        var blockHour = $(this).closest('.time-block').attr('id');
        var event = $(this).siblings('.description').val();

        localStorage.setItem(blockHour, event);
      }

      

});