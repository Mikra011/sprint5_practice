// ********** Module 3 Building Components **********
// Combining HTML, CSS and JavaScript
// #region

// create a button

const customButtons = document.querySelector('.custom-buttons')
const button = document.createElement('button')
button.classList.add('btn')
button.id = 'toggleBtn'
button.textContent = 'Toggle visibility'
customButtons.appendChild(button)

// style the button

button.style.backgroundColor = 'red'
button.style.color = 'white'
button.style.padding = '10px'
button.style.margin = '10px'

// Create 4 more buttons with a loop + style them

for (let i = 1; i <= 4; i++) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = 'Button ' + i
    button.style.backgroundColor = 'red'
    button.style.color = 'white';
    button.style.padding = '10px'
    button.style.margin = '10px'
    customButtons.appendChild(button)
}

// Make all button show an alert.

const buttonsArr = Array.from(customButtons.querySelectorAll('button'))
buttonsArr.forEach((button, i) => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} clicked!`)
    })
})

//#endregion

// Building a component using a function
// #region

// button creater function

const placeOfStuff = document.querySelector('.compfunc')

function buttonMaker(text, onClick) {
    const button = document.createElement('button')
    button.textContent = text;
    button.addEventListener('click', onClick)
    placeOfStuff.appendChild(button)
    return button;
}

function handleClick() {
    createCard('Dog', 'A friendly guy', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg')
}

buttonMaker('Click Me!', handleClick);

// create a reset button

const resetButton = document.createElement('button')
resetButton.classList.add('btn')
resetButton.textContent = 'Reset Images'
resetButton.addEventListener('click', resetCards)


// Reset images function

function resetCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.remove()); // this tricked me :)
}

buttonMaker('Delete Cards', resetCards)

// card creater function

function createCard(title, description, imageUrl) {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardTitle = document.createElement('h2')
    cardTitle.textContent = title

    const cardDescription = document.createElement('p')
    cardDescription.textContent = description

    const cardImage = document.createElement('img')
    cardImage.src = imageUrl

    card.appendChild(cardTitle)
    card.appendChild(cardDescription)
    card.appendChild(cardImage)

    placeOfStuff.appendChild(card)
}

// toggle visibility of an element by id

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId)
    if (element.style.display === 'none') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
}

button.addEventListener('click', function () {
    toggleVisibility('sec2');
})

// Creating a form with a function and make it disappeard after submission

function createForm() {
    const form = document.createElement('form')
    form.id = 'form'

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'nameInput')
    nameLabel.textContent = 'Name:'
    form.appendChild(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'nameInput')
    form.appendChild(nameInput)

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'emailInput')
    emailLabel.textContent = 'Email:'
    form.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('id', 'emailInput')
    form.appendChild(emailInput)

    const submitButton = buttonMaker('Submit', submitForm)
    form.appendChild(submitButton)

    const formContainer = document.querySelector('#formcontainer')
    formContainer.appendChild(form)

    return form
}

function submitForm(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')

    if (nameInput.value !== '' && emailInput.value !== '') {
        console.log('Form submitted!')
        nameInput.value = ''
        emailInput.value = ''
        toggleVisibility('form') // Hide the form after submission
    }
}

createForm()

//#endregion

// Returning a hierarchy of elements
// #region

function planetBuilder(data) {
    // create the elements using `createElement`
    const section = document.createElement('section')
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    // establish the hierarchy/nesting of the elements using `appendChild`
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    section.appendChild(h3)
    section.appendChild(div)
    // add a class name "planet" to the section element using `classList`
    section.classList.add('planet')
    // add `textContent` to the heading and the paragraphs
    h3.textContent = data.name
    p1.textContent = `Diameter: ${data.diameter} Km`
    p2.textContent = `Rotation: ${data.diameter} hours`
    p3.textContent = `Orbital Period: ${data.diameter} days`
    // return the section from the function
    return section
}

// testing the function
const sec3 = document.querySelector('#sec3')

sec3.appendChild(planetBuilder({
    name: "Saturn", diameter: 120536, rotation_period: 10.7, rotation_around_sun: 10759
}))
sec3.appendChild(planetBuilder({
    name: "Pluto", diameter: 2370, rotation_period: 153.3, rotation_around_sun: 90560
}))

//#endregion

// Adding interactivity and attaching to the DOM
// #region

function buildBulbWidget() {
    const container = document.createElement('div')
    const day = document.createElement('div')
    const night = document.createElement('div')
    const button = document.createElement('button')
    container.appendChild(day)
    container.appendChild(night)
    container.appendChild(button)
    // Give day and night their id attributes
    day.id = 'day'
    night.id = 'night'
    // Give day and night their text contents using emoji '💡' and '🌌' and the button a text of 'Toggle'
    day.textContent = '💡'
    night.textContent = '🌌'
    button.textContent = 'Toggle'
    // Set the night to display none using an inline style
    night.style.display = 'none'
    // Add an event listener to the button to toggle the style.display of day and night between 'none' and 'block'
    button.addEventListener('click', evt => {
        day.style.display = day.style.display === 'none' ? 'block' : 'none'
        night.style.display = day.style.display === 'none' ? 'block' : 'none'
    })
    return container
}
// Invoke the `buildBulbWidget` and append its return value to the div#result in the HTML
document.querySelector('#sec4').appendChild(buildBulbWidget())

//#endregion

// Parsing JSON
// #region

const json = `{
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [
            {"id": "1001", "type": "Regular"},
            {"id": "1002", "type": "Chocolate"},
            {"id": "1003", "type": "Blueberry"},
            {"id": "1004", "type": "Devil's Food"}
        ]
    },
    "topping": [
        {"id": "5001", "type": "None"},
        {"id": "5002", "type": "Glazed"},
        {"id": "5005", "type": "Sugar"},
        {"id": "5007", "type": "Powdered Sugar"},
        {"id": "5006", "type": "Chocolate with Sprinkles"},
        {"id": "5003", "type": "Chocolate"},
        {"id": "5004", "type": "Maple"}
    ]
}`;

// Given the JSON data set below, parse it into a JS object and log the first "id" of the first "topping"

const obj = JSON.parse(json);
console.log(obj.topping[0].id);

// Filter and convert the the previous JS object to a JSON array containing all of the "topping" objects:

const JSONarray = JSON.stringify(obj.topping);
console.log(JSONarray);

// Create a JSON string (assign it to the "objJSON" variable) containing a JS object with 3 pairs of arbitrary key/values

const objJSON ='{"family":"proteins","type":"structural","name":"collagen"}';

// Convert the previous objJSON to a "OBJ" JS object, and iterate over it to log the 3 values.

const OBJ = JSON.parse(objJSON);
Object.values(OBJ).forEach((val) => console.log(val));

//#endregion






