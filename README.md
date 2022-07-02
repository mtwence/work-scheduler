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

### Code Snippet

```
 <div class="container p-10">
    <div class="row time-block">
      <span class="col-md-1 hour">9 AM</span>
      <textarea id="t1" class="col-md-10 description">
      </textarea>
      <button id="b1" class="saveBtn col-md-1 bg-success"><i class="fas fa-save"></i></button>
    </div>
```
{: .language-ruby}

#### Code snippet showing how the rows were created in html using bootstrap.

```
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
{: .language-ruby}

#### Code snippet of variables referenced with jquery selectors on the html. There is an event listener on that specific row's save button, which on click will save the contents of the text area to local storage. Then there is a persist function which will display your previously entered text even upon a page reload. 


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