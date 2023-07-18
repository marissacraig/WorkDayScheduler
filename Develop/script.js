
var saveBtnEl = $('.saveBtn');
var textArea = $('.description');
var timeBlock = $('.time-block');
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, HH:mm:ss a'));

function init() {
  currentTime();
  renderUserInput();
};

function currentTime() {
  var currentHour = today.hour();
  console.log(currentHour);

  for (i = 0; i < timeBlock.length; i++) {
    let timeBlockHour = timeBlock[i].id;
    let timeBlockHTML = timeBlock[i];

    if (currentHour == timeBlockHour) {
      timeBlockHTML.classList.remove('future');
      timeBlockHTML.classList.remove('past');
      timeBlockHTML.classList.add('present');

    } else if (currentHour < timeBlockHour) {
      timeBlockHTML.classList.remove('present');
      timeBlockHTML.classList.remove('past');
      timeBlockHTML.classList.add('future');

    } else if (currentHour > timeBlockHour) {
      timeBlockHTML.classList.remove('present');
      timeBlockHTML.classList.remove('future');
      timeBlockHTML.classList.add('past');
    }
  }
};

$(document).ready(function () {
  $(saveBtnEl).on('click', function (event) {
    event.preventDefault();

    var userInput = $(event.target).parent().children('textarea').val();
    var time = $(event.target).parents('div').eq(0).attr('id');

    localStorage.setItem(time, JSON.stringify(userInput));
  })
  
  renderUserInput();
});

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.

function renderUserInput(time) {

  var lastUserInput = localStorage.getItem(time);
  // Check if data is returned, if not exit out of the function
  if (lastUserInput !== null) {
    $('<textarea>').val() = lastUserInput;
  } else {
    return;
  }
};



init();
