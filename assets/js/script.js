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
var saveBtn2 = $("#b2")
var text2 = $("#t2")

saveBtn2.on("click", function () {
    var note2 = text2.val();
    localStorage.setItem("10", note2);
})

function retain2() {
    var maintain = localStorage.getItem("10");
    text2.text(maintain)
}
retain2()

// 11AM 
var saveBtn3 = $("#b3")
var text3 = $("#t3")

saveBtn3.on("click", function () {
    var note3 = text3.val();
    localStorage.setItem("11", note3);
})

function retain3() {
    var maintain = localStorage.getItem("11");
    text3.text(maintain)
}
retain3()

// 12AM 
var saveBtn4 = $("#b4")
var text4 = $("#t4")

saveBtn4.on("click", function () {
    var note4 = text4.val();
    localStorage.setItem("12", note4);
})

function retain4() {
    var maintain = localStorage.getItem("12");
    text4.text(maintain)
}
retain4()

// 1PM 
var saveBtn5 = $("#b5")
var text5 = $("#t5")

saveBtn5.on("click", function () {
    var note5 = text5.val();
    localStorage.setItem("1", note5);
})

function retain5() {
    var maintain = localStorage.getItem("1");
    text5.text(maintain)
}
retain5()

// 2PM 
var saveBtn6 = $("#b6")
var text6 = $("#t6")

saveBtn6.on("click", function () {
    var note6 = text6.val();
    localStorage.setItem("2", note6);
})

function retain6() {
    var maintain = localStorage.getItem("2");
    text6.text(maintain)
}
retain6()

// 3PM 
var saveBtn7 = $("#b7")
var text7 = $("#t7")

saveBtn7.on("click", function () {
    var note7 = text7.val();
    localStorage.setItem("3", note7);
})

function retain7() {
    var maintain = localStorage.getItem("3");
    text7.text(maintain)
}
retain7()

// 4PM 
var saveBtn8 = $("#b8")
var text8 = $("#t8")

saveBtn8.on("click", function () {
    var note8 = text8.val();
    localStorage.setItem("4", note8);
})

function retain8() {
    var maintain = localStorage.getItem("4");
    text8.text(maintain)
}
retain8()

// 5PM 
var saveBtn9 = $("#b9")
var text9 = $("#t9")

saveBtn9.on("click", function () {
    var note9 = text9.val();
    localStorage.setItem("5", note9);
})

function retain9() {
    var maintain = localStorage.getItem("5");
    text9.text(maintain)
}
retain9()

var hourNow = moment().format("H");
console.log(hourNow)
var hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// console.log(hourNum)
var textArea = [text1, text2, text3, text4, text5, text6, text7, text8, text9]
// console.log(textArea)

function changeBgColor() {
    for (var i = 0; i < 9; i++) {
        if (hourNum[i] == hourNow) {
            textArea[i].addClass("present");
        } else if (hourNum[i] < hourNow) {
            textArea[i].addClass("past");
        } else {
            textArea[i].addClass("future");
        }
    }
}
changeBgColor()
