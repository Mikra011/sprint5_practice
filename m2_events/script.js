// **********   Module 2 - Events in the Browser  **********

// Understanding events
// #region

// Counter widget

let count = 0
const counterBtn = document.getElementById('counterBtn')
const countDisplay = document.getElementById('countDisplay')

counterBtn.addEventListener('click', function () {
    count++
    countDisplay.textContent = count
})

// Toggle on/off

const toggleBtn = document.getElementById('toggleBtn')
const toggleContent = document.getElementById('toggleContent')

toggleBtn.addEventListener('click', () => {
    if (toggleContent.style.display === 'none' || toggleContent.textContent === 'OFF') {
        toggleContent.style.display = 'block'
        toggleContent.textContent = 'ON'
    } else {
        toggleContent.textContent = 'OFF'
    }
})

// Alert pops up

const alertLink = document.getElementById('alertLink')

alertLink.addEventListener('click', function (event) {
    event.preventDefault()
    alert('Link clicked!')
    setTimeout(function () {
        // Code to perform after the alert
        // For example, you can redirect to another page:
        window.location.href = alertLink.href; // Redirect to the link's href 
    }, 100) // delay starts after alert is closed
})

// After 1 submit diable button

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    submitButton.disabled = true;
})

// Substraction and addition

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const addBtn = document.getElementById('addBtn')
const subtractBtn = document.getElementById('subtractBtn')
const result = document.getElementById('result')

addBtn.addEventListener('click', function () {
    // num1 and num2 are text type and num2.value needs to be added
    const sum = parseInt(num1.value) + parseInt(num2.value)
    result.textContent = 'Result: ' + sum
})

subtractBtn.addEventListener('click', function () {
    // num1 and num2 are text type we need to convert it into number type
    const difference = parseInt(num1.value) - parseInt(num2.value)
    result.textContent = 'Result: ' + difference
})

//#endregion

// Handling events with HTML attributes
// #region

const button1 = document.querySelector('#btn1')
button1.onclick = () => console.log("Hello, world!")


const button2 = document.querySelector('#btn2')
button2.onclick = function () {
    console.log(button2.textContent)
}

const button3 = document.querySelector('#btn3')
button3.onclick = function () {
    console.log("Ugh, you killed me!")
    button3.remove()
}

const input = document.querySelector('#input1')
input.onfocus = () => console.log('Input focused!')
input.oninput = () => console.log('Input changed!')
input.onblur = () => console.log('Input blurred!')

//#endregion

// Handling an event with .addEventListener()
// #region

// creating a button to display an alert message

const button = document.createElement('button')
button.textContent = 'Click Me!'
button.addEventListener('click', () => alert('Button clicked!'))
const buttonPlace = document.querySelector('body > section:last-of-type')
buttonPlace.appendChild(button)
buttonPlace.style.margin = '20px'
buttonPlace.style.flex = ''

// Create a text input field and a button. When the button is clicked, 
// retrieve the value entered in the input field and display it in the 
// console using the addEventListener method.

function handleClick() {
    const inputField = document.getElementById('inputField')
    const inputValue = inputField.value
    console.log("Input value: " + inputValue)
}

// Create the input field element
const inputField = document.createElement('input')
inputField.type = 'text'
inputField.id = 'inputField'
inputField.placeholder = 'Enter text'

// Create the button element
const submitButton = document.createElement('button')
submitButton.id = 'submitButton'
submitButton.textContent = 'Submit'

// Add a click event listener to the button
submitButton.addEventListener('click', handleClick)

// Append the input field and button to its place
buttonPlace.appendChild(inputField)
buttonPlace.appendChild(submitButton)

// Create an image. When the image is clicked, change its source to a different image

// Create the image element
const image = document.createElement('img')
image.id = 'myImage'
image.src = 'https://picsum.photos/id/200/200/300'

function handleImageClick() {
    const image = document.getElementById('myImage')
    // Check the current source of the image
    if (image.src === 'https://picsum.photos/id/237/200/300') {
        // If the current source is the second image, change it back to the first image
        image.src = 'https://picsum.photos/id/235/200/300'
    } else {
        // Otherwise, change it to the second image
        image.src = 'https://picsum.photos/id/237/200/300'
    }
}

// Add a click event listener to the image
image.addEventListener('click', handleImageClick)

// Append the image to the body
buttonPlace.appendChild(image)

//#endregion

// Studying the event object
// #region

// Add the parameter to the function (any name would work) and log it.

const handleEvent = (event) => {
    console.log(event)
}

// Change the action to log "event.key" and assign the handler to the document:

const handleEvent2 = (event) => {
    console.log(event.key)
}
document.addEventListener("keypress", handleEvent2)

// Change 'click' to 'dblclick', and update the message!

const handler = () => {
    console.log("double click!")
}
document.addEventListener("dblclick", handler);

// "event.name" is not a property. Change it to "event.type".

const Logger = (e) => {
    console.log(e.type)
}
document.addEventListener("click", Logger)

//#endregion

// Preventing the default action
// #region

// Prevent copy an cut

const handleCopyOrCut = (event) => {
    event.preventDefault()
}
document.addEventListener("copy", handleCopyOrCut)
document.addEventListener("cut", handleCopyOrCut)

// malicious code that sends the user to hacked.com

const hackLink = (event) => {
    event.preventDefault()
    window.open("https://hacked.com", "_blank")
}
document.querySelector("#bloomtech").addEventListener("click", hackLink)

//#endregion

// Understanding the phases of propagation
// #region

// const counterButton = document.querySelector("#counterBtn")
// const body = document.querySelector("body")
// const html = document.querySelector("html")
// /*
// PROBLEM 1: 
// Add a listener for event of type "click" to the elements right above. 
// Also add a click event listener to the `document` object.
// Open the Console and click on the button. Do you see the click event bubbling up the DOM?
// */

// counterButton.addEventListener('click', e => console.log('you clicked the COUNTERBUTTONBUTTON!'))
// body.addEventListener('click', e => console.log('you clicked the BODY!'))
// html.addEventListener('click', e => console.log('you clicked the HTML!'))
// document.addEventListener('click', e => console.log('you clicked the document!'))
// /* 
// PROBLEM 2: 
// Add a click event listener to the global `window` object, but set it to fire on capture, instead of on bubbling.
// Open the Console and click on the button. Do you see the captured click event on the `window` object, firing first?
// */

// window.addEventListener('click', e => console.log('you clicked the window!'), true)

// with adding true to the last part, it will became the first event triggered.

//#endregion

// Finding the target and the current target of an event
// #region


// let elements = Array.from(document.getElementsByTagName('*'))
// elements.forEach(element => {
//     element.addEventListener('click', event => {
//         // would be usefull to add classnames. => "The <className> element is a <nodeName>" would be logged.
//         const { className, nodeName } = event.currentTarget
//         console.log(`The ${className} element is a ${nodeName}`)
//         if (event.currentTarget === document.querySelector('section')) { // targets first section
//             console.log('\tI love this section!')
//         }
//     }, { capture: true }) // this object will reverse the order of triggering
// })

//#endregion

// Stopping propagation
// #region

// const button111 = document.querySelector('#A1')
// const button222 = document.querySelector('#A2')
// const button333 = document.querySelector('#A3')
// const div = document.querySelector('#B')
// const section = document.querySelector('#C')

// Array.from(document.getElementsByTagName('*')).forEach(elem => {
//     elem.addEventListener('click', evt => {
//         const { id, nodeName } = evt.currentTarget
//         console.log(`Event handler firing at ${id} (${nodeName})`)
//         // stop propagation at the button
//         if (evt.target === button111) {
//             evt.stopPropagation()
//         }
//         // stop propagation at the div
//         else if (evt.target === button222 && evt.currentTarget === div) {
//             evt.stopPropagation()
//         }
//         // stop propagation at the section
//         else if (evt.target === button333 && evt.currentTarget === section) {
//             evt.stopPropagation()
//         }
//     })
// })

// must check this part well!!!!

const button111 = document.querySelector('#A1')
const button222 = document.querySelector('#A2')
const button333 = document.querySelector('#A3')
const div = document.querySelector('#B')
const section = document.querySelector('#C')

function clickHandler(evt) {
    if (!isEnabled) return; // Check if logging should occur
    const { id, nodeName } = evt.currentTarget
    console.log(`Event handler firing at ${id} (${nodeName})`)
    // stop propagation at the button
    if (evt.target === button111) {
        evt.stopPropagation()
    }
    // stop propagation at the div
    else if (evt.target === button222 && evt.currentTarget === div) {
        evt.stopPropagation()
    }
    // stop propagation at the section
    else if (evt.target === button333 && evt.currentTarget === section) {
        evt.stopPropagation()
    }
}

let isEnabled = true;

function toggleCodeBlock() {
    isEnabled = !isEnabled; // Toggle the state
}

const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', toggleCodeBlock);

// Add event listeners to elements initially
Array.from(document.getElementsByTagName('*')).forEach(elem => {
    elem.addEventListener('click', clickHandler);
});


//#endregion

