// Display current date on the top
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.write(today);
$('#currentDay').html(today);


$(document).ready(function() {
    $("button").click(function() {
        console.log(this);
        var value = $(this).siblings('.description').val(); //sibling html attribute
        var time= $(this).parent().attr('id'); //parent html attribute
        localStorage.setItem(value, time);
    });

    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));// load saved data from localStorage

    function hourUpdater () {
        var currentHour= moment().hours();

     // loop over time-block
     $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split("hour")[1]);
        console.log(blockHour, currentHour)

        //check if move past this time
        //given classes of past, present, or future
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

  
        });
    };
    hourUpdater(); //re-run function
})

