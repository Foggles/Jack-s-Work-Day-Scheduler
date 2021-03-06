let timeRowContainer = document.getElementById("timeRowContainer");
let currentTime = moment().format("kk:00");
let currentTimeNumber = parseInt(currentTime);
let newTimeRow;
console.log("Current hour: " + currentTimeNumber + ":00")


// loading current time into the DOM
setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

// Array containing all times to be used, utilising moment.js library
const times = [moment().hour(8).format("kk:00"), moment().hour(9).minute(0).format("kk:00"), moment().hour(10).minute(0).format("kk:00"), moment().hour(11).minute(0).format("kk:00"), moment().hour(12).minute(0).format("kk:mm"), moment().hour(13).minute(0).format("kk:mm"), moment().hour(14).minute(0).format("kk:mm"), moment().hour(15).minute(0).format("kk:mm"), moment().hour(16).minute(0).format("kk:mm"), moment().hour(17).minute(0).format("kk:mm"), moment().hour(18).minute(0).format("kk:mm"), moment().hour(19).minute(0).format("kk:mm")];

// for loop to build the time rows
for (let index = 0; index < times.length; index++) {
    // const time = times[index];


    console.log("Time: " + times[index])

    // in each loop we create a time row
    newTimeRow = document.createElement("div");
    newTimeRow.classList.add("row",);
    newTimeRow.id = "timeRow";

    // each row would have the time
    let newTimeCol = document.createElement("div");
    newTimeCol.classList.add("col-2", "hour");
    newTimeCol.textContent = times[index];
    newTimeCol.id = "timeCol";

    // textarea
    let newTextAreaCol = document.createElement("div");
    let newTextArea = document.createElement("textarea");
    newTextArea.rows = "4";
    newTextArea.cols = "65";
    newTextArea.id = "textArea";
    newTextArea.textContent = localStorage.getItem("timeRowData" + times[index])

    newTextAreaCol.classList.add("col-8", "description");
    newTextAreaCol.appendChild(newTextArea);
    newTextAreaCol.id = "textAreaContainer";

    // button
    let newButtonCol = document.createElement("div");
    let newButton = document.createElement("button");
    newButton.innerHTML = "<i class='far fa-save fa-3x'></i>";
    newButton.classList.add("saveBtn");
    newButton.id = "saveButton";

    newButtonCol.classList.add("col-2", "saveBtnCol");
    newButtonCol.appendChild(newButton);
    newButtonCol.id = "saveButtonContainer";

    let dataTime = parseInt(times[index]);

    // Appending all the new elements to the new row
    newTimeRow.appendChild(newTimeCol);
    newTimeRow.appendChild(newTextAreaCol);
    newTimeRow.appendChild(newButtonCol);
    newTimeRow.setAttribute("time", dataTime);



    // Attach event listner to detect when save button is clicked
    $(newButton).on('click', function (event) {
        event.preventDefault();

        // Identifying which row is been saved
        let target = $(this).parents(document.getElementById("timeRow"));
        let trueTarget = target[1];

        // row
        const childRow = trueTarget;
        let childRowText = childRow.querySelector("textarea");
        const time = childRow.outerText;

        // Debugging purposes
        console.log(childRow);
        console.log("Time is - " + time);

        // Getting the value of the text area
        let data = childRowText.value;
        console.log("Text to save:" + data);

        // Store value of text area into Local Storage: 
        localStorage.setItem("timeRowData" + time, data)

    });


    // Appending it all to the container
    timeRowContainer.classList.add("time-block")
    timeRowContainer.appendChild(newTimeRow);


    // Assigning each row created a colour depending on the current time
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