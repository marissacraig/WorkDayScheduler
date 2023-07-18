
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
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  // HINT: What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block 
  // containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  saveBtnEl.on("click", saveUserInput)

  function saveUserInput(event) {
    event.preventDefault();
    var userInput = {
      textArea: textArea.description,
      time: timeBlock.id,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem(userInput.time, JSON.stringify(userInput.textArea));
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



init();
