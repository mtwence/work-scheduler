var momentDate = moment().format("dddd, MMMM Do");
var time = $("#currentDay");
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

var saveBtn1 = $("#b1")
var text1 = $("#t1")

saveBtn1.on("click", function() {
var note1 = text1.val();
localStorage.setItem("9", note1);
} )

