// Create variable of time formatted using moment 
var momentDate = moment().format("dddd, MMMM Do");
// jquery selector on <p> where time is being inserted
var time = $("#currentDay");
// Set text in </p> to the moment format 
time.text("Current Date: " + momentDate)

// var hourText = [
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
//     {Text: ""},
// ]

// THEORY CRAFT VARIABLES AND FUNCTIONS FOR 9AM ROW 

// jquery selector on 9am rows button and text area 
var saveBtn1 = $("#b1")
var text1 = $("#t1")

// jquery event listener on click of save button saves string in textarea for 9am row 
saveBtn1.on("click", function () {
    var note1 = text1.val();
    localStorage.setItem("9", note1);
})
// function for locally stored 9am text to persist on page 
function retain1() {
    var maintain = localStorage.getItem("9");
    text1.text(maintain)
}
retain1()

// RECREATE CODE FOR REST OF ROWS

// 10AM 

