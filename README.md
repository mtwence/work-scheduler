# The 9-5 Schedulizer


## Table of Contents


- [Description](#description)
- [Technologies](#technologies)
- [Deployed Link](#link)
- [Usage](#usage)
- [User Information](#userinformation)
- [Credits](#credits)
- [License](#license)

## Description

A simple user-friendly web app to manage your workday schedule by the hour. Sleek UI shows via color coordination the past, present, and future hours in your day. You can save notes for each hour in your schedule that even persist after your reload the page! Use that extra time you have from being so organized to take a break. 

## Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- jQuery

## Deployed Link

[9-5 Schedulizer Link](https://mtwence.github.io/workday-schedulizer/)

## Usage

### Website Demo

![schedulizer web-app demo](/assets/images/schedulizer-demo.gif)

### Code Snippets
<br>

#### Row Creation & Styling:
```ruby
 <div class="container p-10">
    <div class="row time-block">
      <span class="col-md-1 hour">9 AM</span>
      <textarea id="t1" class="col-md-10 description">
      </textarea>
      <button id="b1" class="saveBtn col-md-1 bg-success"><i class="fas fa-save"></i></button>
    </div>
```
I created an html container `<div>` for my time block, text area, and button. Using bootstrap I createed rows out these elements and formatted their sizing.
<br>

#### Local Storage with Persist:
```ruby
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
```

Here I created variables referenced with jquery selectors on the html. I attached an event listener on that specific row's save button; upon click, the contents of the text area are saved to local storage. Lastly, there is a persist function which displays your previously entered text once the page is refreshed.  
<br>

#### Textarea Background Changer:
```ruby
var hourNow = moment().format("H");
var hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var textArea = [text1, text2, text3, text4, text5, text6, text7, text8, text9]

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
```
This code block is what changes the text area color based on what time is. The function has a nested for loop that compares the current hour(in a 24 scale) to and array of 9am-5pm, represented by a single numeral value (in a 24 hour scale).For instance, if it was 12:30pm, the 12pm text area would have a red background. Time blocks 1pm-5pm would be green, and time blocks 9am-11am would be grey. 
<br>

## User Information

### **Michael Wence**
[LinkedIn](https://www.linkedin.com/in/michael-wence/) |
[GitHub](https://github.com/mtwence)

## Credits

UCB - Coding Bootcamp

Kavya Mandla & Chelsea Burnham: Helped with locale storage function(s).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

© 2022 Michael Wence. All Rights Reserved.