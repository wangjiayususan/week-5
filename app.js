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

    $('.description #hour9').val(localStorage.getItem('hour9'));
    $('.description #hour10').val(localStorage.getItem('hour10'));
    $('.description #hour11').val(localStorage.getItem('hour11'));
    $('.description #hour12').val(localStorage.getItem('hour12'));
    $('.description #hour13').val(localStorage.getItem('hour13'));
    $('.description #hour14').val(localStorage.getItem('hour14'));
    $('.description #hour15').val(localStorage.getItem('hour15'));
    $('.description #hour16').val(localStorage.getItem('hour16'));
    $('.description #hour17').val(localStorage.getItem('hour17'));// load saved data from localStorage

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

    hourUpdater(); //re-run function
        });
    };
})

