

// ********** sprint 5 **********

// **********   Module 1 - THE DOM   **********

// Selecting nodes by ID
// #region

document.getElementById('myHeader');

let myHeaderElement = document.getElementById('myHeader');
let container = document.getElementById('container');
let listItem = document.getElementById('listItem');
let listElements = document.getElementById('list').children;

// console.log(myHeaderElement);
// console.log(container);
// console.log(listItem);
// console.log(listElements);

// changing h1 with a condition

// if (myHeaderElement) {
//     myHeaderElement.textContent = 'JavaScript Connected Successfully!';
// } else {
//     console.log('Element with ID "myHeader" not found.');
// }

//#endregion

// Selecting collections by class and tag
// #region

const h3ElementsList = document.getElementsByTagName('h3')
const firstPElement = document.getElementsByTagName('p')[0] // <-- prints only the 1. p element
const sectionHeaders = document.getElementsByClassName('section-header')
const goodLuckElements = document.getElementsByClassName("good-luck-text")

// console.log(h3ElementsList)
// console.log(firstPElement)
// console.log(sectionHeaders)
// console.log(goodLuckElements)

//#endregion

// Selecting nodes with .querySelector ()
// #region

const mainHeader = document.querySelector('#main-header')
const pElement = document.querySelector('.section-text')
const h3 = document.querySelector('h3')
const codeElement = document.querySelector('.main ul li code')

// console.log(h3)
// console.log(pElement)
// console.log(mainHeader)
// console.log(codeElement)

//#endregion

// Selecting node lists with .querySelectorAll() + Array.form()
// #region

const paragraphTags = document.querySelectorAll("p");
const firstCustomStyle = document.querySelector(".custom-style");
const allCustomStyles = document.querySelectorAll(".custom-style");

// all prints an array like object, but it is convertable to an array like this:

const arrayLikeObject = document.querySelectorAll(".custom-style");
const array = Array.from(arrayLikeObject);

// console.log(paragraphTags);
// console.log(firstCustomStyle);
// console.log(allCustomStyles);
// console.log(array);

//#endregion

// Iterating over a node list with .forEach()
// #region

const headerElements = document.querySelectorAll('h3')
headerElements.forEach((element) => {
    //  console.log(element.innerText)
});

headerElements.forEach((element, index) => {
    if (index === 1) return
    // console.log(element)
})

const headerElementsArray = []
headerElements.forEach((element) => {
    headerElementsArray.push(element.textContent)
})
// console.log(headerElementsArray)

const pElements = document.querySelectorAll('p')
pElements.forEach((element, index) => {
    // console.log(`p${index} ${element.textContent.slice(0, 10)}`)
})

// add emoji

// const createEmojiElement = (index, emojiList) => {
//     const emojiElement = document.createElement('p');
//     emojiElement.style.margin = '10px 0'
//     emojiElement.innerText = emojiList[index]
//     return emojiElement
// }

// const emojiList = ['😂', '😭'];

// const pageSections = document.querySelectorAll('section');
// pageSections.forEach((section, index) => {      // get the index of each section
//     section.appendChild(createEmojiElement(1, emojiList))   // call the createEmojiElement with arguments
// })

//#endregion

// Setting text with .textContent
// #region

const headingElement = document.querySelector('h1');
let heading = headingElement.textContent;
// console.log(heading)

heading += '!'
headingElement.textContent = heading
// console.log(heading)

// store good lock element

const sectionElements = document.querySelectorAll('p')
let goodLuckElement;
sectionElements.forEach(element => {
    if (element.textContent === 'Good luck!') {
        goodLuckElement = element
    }
})
goodLuckElement.textContent = 'Bonne Chance!'

// console.log(goodLuckElement.textContent);
// console.log(goodLuckElement.textContent);

//#endregion

// Setting attributes with .setAttribute
// #region

let imageElement = document.createElement("img");
imageElement.setAttribute("src", "https://place-hold.it/400x400");

// appending the image
let imageContainer = document.getElementById("div-element");
imageContainer.appendChild(imageElement);

let linkElement = document.getElementById("link-element");
linkElement.setAttribute("href", "https://cheezburger.com/8025783040/arnold-wishes-you-peace");

let divElement = document.getElementById("div-element");
divElement.setAttribute("role", "button");

let newImageElement = document.createElement("img");
newImageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Roosterhawaii.jpg/1200px-Roosterhawaii.jpg";

// append image

imageContainer = document.getElementById("div-element");
imageContainer.appendChild(newImageElement);

//#endregion

// Setting inline styles with .style
// #region

mainHeader1 = document.querySelector('#main-header');
mainHeader1.style.color = 'blue';

let bodyFont = document.querySelector('body')
bodyFont.style.fontFamily = 'Verdana, Geneva, Tahoma'

let centerHeaders = document.querySelectorAll('#main-header, h3')
centerHeaders.forEach(header => {
    header.style.textAlign = 'center'
})

let firstPMargin = document.querySelector('p')
firstPMargin.style.marginLeft = '100px'
firstPMargin.style.marginRight = '90px'

let sectionStyle = document.querySelector('section')
sectionStyle.style.margin = '50px'
sectionStyle.style.background = 'dimgray'

let imageWidth = document.querySelectorAll('img')
imageWidth.forEach(image => {
    image.style.width = '600px'
})

//#endregion

//  Manipulating classes and IDs with .className, .classList and .id
// #region

const myElement1 = document.getElementById("myHeader")
const myElement2 = document.getElementById("container")
myElement2.classList.add("class1", "class2")
myElement2.classList.remove("class1")

// console.log(myElement1.className);
// console.log(myElement1.id);
// console.log(myElement2.className);

// myElement2.classList.remove("class2")
// console.log(myElement2.className);

// myElement2.classList.toggle("class1")
// console.log(myElement2.className);

//#endregion

// Accessing the children and the parent nodes with .parentNode and .children
// #region

const mainSectionElement = document.querySelector('.main')

const heading1 = document.querySelector('h4')
const headingParent = heading1.parentNode

const list = document.querySelector('#list')
const listItems = list.children
const childElementsCount = listItems.length

// console.log(mainSectionElement.children)
// console.log(headingParent.className)
// console.log(childElementsCount)

//#endregion

// Creating DOM elements with .createElement()
// #region

const paragraph = document.createElement("p")
paragraph.textContent = "My favorite number is 7"
document.body.appendChild(paragraph);

const heading2 = document.createElement("h2")
heading2.textContent = "Process starts here."
const section = document.querySelector("section") // this selects the first section element
section.prepend(heading2)

const redParagraph = document.createElement("p")
redParagraph.textContent = "Here we go, I am playing with the DOM!"
redParagraph.style.color = "red"
section.appendChild(redParagraph)

const duck1 = document.createElement("p");
duck1.textContent = "Duck, duck goose";
section.appendChild(duck1);

//#endregion

// Building out a new element
// #region

const header = document.querySelector('#main-header')
header.textContent = "Practice Problems Webpage Changed Header"

header.style.color = "#5dc5e8"

// give a new id to first p of body

const introText = document.querySelector('body p')
introText.id = "intro-text"

const triviaSection = document.querySelector('.main')
triviaSection.classList.add('page-section')

//#endregion

// Adding children with .appendChild() and .prepend
// #region

// .appendChild() adds the new element as the last child of the parent
//. prepend() adds the new element as the first child of the parent 

let parentElement = document.getElementById('div-element');
let childElement = document.createElement('div');
childElement.id = 'last-div'
parentElement.appendChild(childElement);

let firstChild = document.createElement('div')
firstChild.id = 'first-div'
parentElement.prepend(firstChild)

//#endregion

// Adding elements to the DOM with .insertAdjacentElement()
// #region

const unorederedList = document.querySelector('ul');
const p1 = document.createElement('p');
p1.textContent = "List begins here:";
unorederedList.insertAdjacentElement('beforebegin', p1);

//#endregion

// **********   Module 2 - Events in the Browser  **********

