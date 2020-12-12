let timeRowContainer = document.getElementById("timeRowContainer");
let currentTime = moment().format("kk:00");
let currentTimeNumber = parseInt(currentTime);
let newTimeRow;
console.log(currentTimeNumber + ":00")


// loading current time into the DOM
setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

// Array containing all times to be used, utilising moment.js library
const times = [moment().hour(7).minute(0).format("kk:00"), moment().hour(8).minute(0).format("kk:00"), moment().hour(9).minute(0).format("kk:00"), moment().hour(10).minute(0).format("kk:00"), moment().hour(11).minute(0).format("kk:00"), moment().hour(12).minute(0).format("kk:mm"), moment().hour(13).minute(0).format("kk:mm"), moment().hour(14).minute(0).format("kk:mm"), moment().hour(15).minute(0).format("kk:mm"), moment().hour(16).minute(0).format("kk:mm"), moment().hour(17).minute(0).format("kk:mm"), moment().hour(18).minute(0).format("kk:mm"), moment().hour(19).minute(0).format("kk:mm"), moment().hour(20).minute(0).format("kk:mm"), moment().hour(21).minute(0).format("kk:mm"), moment().hour(22).minute(0).format("kk:mm"), moment().hour(23).minute(0).format("kk:mm")];

// for loop to build the time rows
for (let index = 0; index < times.length; index++) {
    const time = times[index];


    console.log(times[index])

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



    // attach event listner to detect when save button is clicked
    $(newButton).on('click', function (event) {
        event.preventDefault();

        // identify which row
        let target = $(this).parents(document.getElementById("timeRow"));
        let trueTarget = target[1];

        // row
        const childRow = trueTarget;
        let childRowText = childRow.querySelector("textarea");
        
        const time = childRow.outerText;

        console.log(childRow);
        console.log("Time is - " + time);



        // i want to get the value of textarea
        let data = childRowText.value;
        console.log("Text to save:" + data);

        // FIXME: 
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