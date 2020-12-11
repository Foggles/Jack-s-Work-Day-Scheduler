let timeRowContainer = document.getElementById("timeRowContainer");
let currentTime = moment().format("kk:00");
let currentTimeNumber = parseInt(currentTime);
let newTimeRow;
console.log(currentTimeNumber)


// load time into the dom
setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

// Array containing all times to be used
// const times = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

// const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

const times = [moment().hour(7).minute(0).format("kk:00"), moment().hour(8).minute(0).format("kk:00"), moment().hour(9).minute(0).format("kk:00"), moment().hour(10).minute(0).format("kk:00"), moment().hour(11).minute(0).format("kk:00"), moment().hour(12).minute(0).format("kk:mm"), moment().hour(13).minute(0).format("kk:mm"), moment().hour(14).minute(0).format("kk:mm"), moment().hour(15).minute(0).format("kk:mm"), moment().hour(16).minute(0).format("kk:mm"), moment().hour(17).minute(0).format("kk:mm"), moment().hour(18).minute(0).format("kk:mm"), moment().hour(19).minute(0).format("kk:mm"), moment().hour(20).minute(0).format("kk:mm"), moment().hour(21).minute(0).format("kk:mm"), moment().hour(22).minute(0).format("kk:mm"), moment().hour(23).minute(0).format("kk:mm")];

// for loop to build the time rows
for (let index = 0; index < times.length; index++) {
    const time = times[index];

    
    console.log(times[index])

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

    let dataTime = parseInt(times[index]);

    // Appending all the new elements to the new row
    newTimeRow.appendChild(newTimeCol);
    newTimeRow.appendChild(newTextAreaCol);
    newTimeRow.appendChild(newButtonCol);
    newTimeRow.setAttribute("time", dataTime);



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

    if (newTimeRow.getAttribute("time") > currentTimeNumber) {
        newTimeRow.classList.add("future");
        newTimeRow.setAttribute("timeColour:", "future")
    } 
    if (newTimeRow.getAttribute("time") < currentTimeNumber) {
        newTimeRow.classList.add("past");
        newTimeRow.setAttribute("timeColour:", "past")
    } 
    else {
        newTimeRow.classList.add("present");
        newTimeRow.setAttribute("timeColour:", "present");
    }
};

// TODO: Use moment.js to change the colour of the timeRowContainer depending on the time
// TODO: (Past, Present & Future)

// PLAN: Use something similar to "$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));"" and add it to each timeRow,
// PLAN: Have the array use this ^ instead of strings
// PLAN: Then compare the time in the timeRow to the current time and use that to change the colour of the timeRow accordingly.