// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnEl = $('.saveBtn');
var textArea = $('.description');
var timeBlock = $('.description').attr('id');
// var currentTimeBlock = $('#hour').children('textarea').id().is('');
// console.log($('#hour').children('textarea').id().is(''));
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, HH:mm:ss a'));

$(function init() {
  currentTime()
});
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
// HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes?
function currentTime() {
  var currentHour = $(today).attr('HH');
  console.log(currentHour);
  
  var timeBlock = $('.description').attr('id');
  console.log(timeBlock);
    
  $(timeBlock).each(function () {
    
    for ( i = 0; i < timeBlock.length; i++) {
    if (currentHour == timeBlock) {
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")

    } else if (currentHour < timeBlock) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")

    } else if (currentHour > timeBlock) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    }

    return;
}});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  // HINT: What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block 
  // containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  saveBtnEl.on("click", saveUserInput)

  function saveUserInput() {
    var userInput = {
      textArea: textArea.value,
      time: timeBlock.value,
    };
    console.log(textArea);
    console.log(time);
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("userInput", JSON.stringify(userInput));
    console.log(userInput);
  };




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  //  HINT: How can the id attribute of each time-block be used to do this?
  renderUserInput();
  function renderUserInput() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastUserInput = JSON.parse(localStorage.getItem("userInput"));
    // Check if data is returned, if not exit out of the function
    if (lastUserInput !== null) {
      document.querySelector("textarea").innerHTML = lastUserInput;
    } else {
      return;
    }
  };

}

init();
