let timeRowContainer = document.getElementById("timeRowContainer");
let currentTime = moment().format("ha");
let newTimeRow;
console.log(currentTime)


// load time into the dom
setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

// Array containing all times to be used
const times = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

// for loop to build the time rows
for (let index = 0; index < times.length; index++) {
    const time = times[index];

    // in each loop we create a time row
    newTimeRow = document.createElement("div");
    newTimeRow.classList.add("row",);

    // each row would have the time
    let newTimeCol = document.createElement("div");
    newTimeCol.classList.add("col-2", "hour");
    newTimeCol.textContent = times[index];

    // textarea
    let newTextAreaCol = document.createElement("div");
    let newTextArea = document.createElement("textarea");
    newTextArea.rows = "4";
    newTextArea.cols = "65";

    newTextAreaCol.classList.add("col-8", "description");
    newTextAreaCol.appendChild(newTextArea);

    // button
    let newButtonCol = document.createElement("div");
    let newButton = document.createElement("button");
    newButton.textContent = "TESTING"

    newButtonCol.classList.add("col-2", "saveBtn");
    newButtonCol.appendChild(newButton);

    // Appending all the new elements to the new row
    newTimeRow.appendChild(newTimeCol);
    newTimeRow.appendChild(newTextAreaCol);
    newTimeRow.appendChild(newButtonCol);
    newTimeRow.setAttribute("time", times[index]);



    // attacj event listner
    $(newButton).on('click', function (event) {
        event.preventDefault();

        // identify which row

        $(event.target).parent()


        // row
        // const row;
        // const time = row.firstChild().text()

        // i want to get the value of textarea
        // data = row.secondChild().firstChild().val()

        // FIXME: 
        localStorage.setItem('data-row-' + time, data)

    });


    // create a data attr on the row
    // data-row-time 
    // so we can identify each row
    // and create a unique key in local storage



    // Appending it all to the container
    timeRowContainer.classList.add("time-block")
    timeRowContainer.appendChild(newTimeRow);

    if (newTimeRow.getAttribute("time") === currentTime) {
        //    // let trueTimeRow = newTimeRow.getAttribute("time") === currentTime;
            newTimeRow.classList.add("present");
            newTimeRow.setAttribute("timeColour:", "present")
        } if (newTimeRow.getAttribute("time") > currentTime) {
            newTimeRow.classList.add("future");
            newTimeRow.setAttribute("timeColour:", "future")
        } if (newTimeRow.getAttribute("time") < currentTime) {
            newTimeRow.classList.add("past");
            newTimeRow.setAttribute("timeColour:", "past")
        }
};

// TODO: Use moment.js to change the colour of the timeRowContainer depending on the time
// TODO: (Past, Present & Future)

// PLAN: Use something similar to "$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));"" and add it to each timeRow,
// PLAN: Have the array use this ^ instead of strings
// PLAN: Then compare the time in the timeRow to the current time and use that to change the colour of the timeRow accordingly.