let currentDayEl = document.getElementById("currentDay")
let timeRowContainer = document.getElementById("timeRowContainer");

// load time into the dom

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// for loop 
for (let index = 0; index < times.length; index++) {
    const time = times[index];

    // in each loop we create a time row
    let newTimeRow = document.createElement("div");
    newTimeRow.classList.add("row");

    // each row would have the time
    let newTimeCol = document.createElement("div");
    newTimeCol.classList.add("col");
    newTimeCol.textContent = times[index];

    // textarea
    let newTextAreaCol = document.createElement("div");
    let newTextArea = document.createElement("textarea");

    newTextAreaCol.classList.add("col");
    newTextAreaCol.appendChild(newTextArea);

    // button
    let newButtonCol = document.createElement("div");
    let newButton = document.createElement("button");

    newButtonCol.classList.add("col");
    newButtonCol.appendChild(newButton);

    newTimeRow.appendChild(newTimeCol);
    newTimeRow.appendChild(newTextAreaCol);
    newTimeRow.appendChild(newButtonCol);



    // attacj event listner
    $(newButton).on('click', function (event) {
        event.preventDeault();

        // identify which row

        $(event.target).parent()


        // row
        // const row;
        // const time = row.firstChild().text()

        // i want to get the value of textarea
        // data = row.secondChild().firstChild().val()
        // TODO: 

        // FIXME: 
        localStorage.setItem('data-row-' + time, data)

    });


    // create a data attr on the row
    // data-row-time 
    // so we can identify each row
    // and create a unique key in local storage



    timeRowContainer.appendChild(newTimeRow);
}