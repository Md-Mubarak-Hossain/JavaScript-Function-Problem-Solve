function checkYear() {
    let text;
    // let year = prompt('Enter a year number', 'Example:2022');
    let year = document.forms.myForm.yearValue.value;
    if (year == 0 || year === '' || isNaN(year)) {
        text = "Enter a valid number";
    }
    else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        text = 'is a leap year';
    }
    else {
        text = "is not a leap year";
    }
    document.getElementById("checkYear").innerHTML = year + text;
}

// function validateForm() {
//     let text1;
//     let x = document.forms.myForm.yearValue;
//     if (x == '') {
//         text1 = 'please input a number';
//     }
//     else if (isNaN(x)) {
//         text1 = "This is not a number";
//     }
//     else if (x == 0) {
//         text1 = "0 is not a year";
//     }
//     else {
//         text = 'invalid'
//     }

// }