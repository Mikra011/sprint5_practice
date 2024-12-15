// ********** Module 4 Consuming Data From the Network **********

// Using functions that return promises
// #region
// promise is an object with methods

function greetAsynchronously(name) {
    return Promise.resolve(`Hello, ${name}!`) // ??
}
const value = greetAsynchronously('Peter')
// console.log('PROBLEM 1. Is value a string? -->', value instanceof String)
// console.log('PROBLEM 1. Is value a promise? -->', value instanceof Promise) 

function sumAsynchronously(a, b) {
    return Promise.resolve(a + b) // don't worry about how this line works
}
function sumSynchronously(a, b) {
    return a + b
}
// console.log('PROBLEM 2:')
// sumAsynchronously(3, 4).then(console.log) // the result will be 7
// console.log(sumSynchronously(5, 7)) // the result will be 12

//#endregion

// Handling success with then
// #region

function greetAsync(name) {
    // ??
    return Promise.resolve(`Hello, ${name}!`)
}

greetAsync('Garfield').then(greet => {
    // console.log(greet)
    // console.log(greet)
    // console.log(greet)
})

// heads or tails? (fej vagy írás)

function coinTossAsync() {
    // ??
    return Promise.resolve(!!Math.floor(Math.random() * 2))
}

// coinTossAsync().then(bool => {
//     console.log(`It's ${bool ? 'heads' : 'tails'}!`)
// })
// coinTossAsync().then(bool => {
//     console.log(`It's ${bool ? 'heads' : 'tails'}!`)
// })
// coinTossAsync().then(bool => {
//     console.log(`It's ${bool ? 'heads' : 'tails'}!`)
// })

function getYearAsync() {
    return Promise.resolve(new Date().getFullYear())
}

getYearAsync().then(year => {
    // console.log(`The year is ${year}.`)
    // console.log(`I am ${year - 1987} years old.`)
})

//#endregion

// Handling failure with catch
// #region

// function evenOrOdd(num) { // rejects if num not even
//     return num % 2 === 0
//         ? Promise.resolve(`${num} is even!`)
//         : Promise.reject(`${num} is odd.`)
// }

// evenOrOdd(17)
// // .then(result => { console.log(result) })
// // .catch(result => { console.log(result) })

// function fetchData() {
//     return Math.floor(Math.random() * 2)
//         ? Promise.resolve({ data: 'Promises rock!' })
//         : Promise.reject(new Error('Server error, could not fetch data'))
// }

// fetchData()
// // .then(value => { console.log("The data: " + value.data) })
// // .catch(error => { console.log("The rejection: " + error.message) })


function queryDatabase() {
    return Promise.reject(new Error('Cannot connect to the database'))
}

queryDatabase().catch(error => {
    const message = error.message
    const allCaps = message.toUpperCase()
    document.querySelector('#error').textContent = allCaps
})

//#endregion

// Using async await for more readable code !!!!check it during unblocking!!!!!
// #region

// (async function () {
//     /*
//     Your code here
//     */
// })();

// (async function () {
// const pluto = 'https://webapis.bloomtechdev.com/planets/9'
// axios.get(pluto)
//     .then(res => { console.log(`Pluto is the ${res.data.id}th planet!`) })
//     .catch(err => { console.log(`Something went wrong: ${err.message}`) })

// try {
//     // ENTER YOUR CODE HERE
//     const res = await axios.get(pluto)
//     console.log(`Pluto is the ${res.data.id}th planet!`)
// } catch (err) {
//     console.log(`Something went wrong: ${err.message}`)
// }

// const badPlanet = 'https://webapis.bloomtechdev.com/planets/12345'
// axios.get(badPlanet)
//     .then(res => { console.log(`${res.data.name} is in your dreams!`) })
//     .catch(err => { console.log(`Something went wrong: ${err.message}`) })

// try {
//     const res = await axios.get(badPlanet)
//     console.log(`${planet.name} is in your dreams!`)
// } catch (err) {
//     console.log(`Something went wrong: ${err.message}`)
// }

// const planetList = 'https://webapis.bloomtechdev.com/planets'
// axios.get(planetList)
//     .then(res => {
//         const planets = res.data
//         const legitPlanets = planets.filter(planet => planet.name !== 'Pluto')
//         console.log('The legit planets are:')
//         legitPlanets.forEach(planet => {
//             console.log(`\t* ${planet.name}`)
//         })
//     })
//     .catch(err => { console.log(err.message) })
// try {
//     let res = await axios.get(planetList)
//     const planets = res.data
//     const legitPlanets = planets.filter(planet => planet.name !== 'Pluto')
//     console.log('The legit planets are:')
//     legitPlanets.forEach(planet => {
//         console.log(`\t* ${planet.name}`)
//     })
// } catch (err) {
//     console.log(err.message)
// }
// })();

//#endregion

// Hitting an API with fetch
// #region

// Take data from an url (construct a sentence about the planet)

const planetURL = 'https://webapis.bloomtechdev.com/planets/9'
fetch(planetURL)
    .then(res => { return res.json() })
    .then(planet => {
        // console.log(planet)

        const { name, diameter, rotation_period, rotation_around_sun } = planet
        // console.log(`${name} is a planet ${diameter} Km in diameter, with a rotation period of`)
        // console.log(`${rotation_period} hours, which takes ${rotation_around_sun} days to go around the Sun`)
    })

const otherPlanetURL = 'https://webapis.bloomtechdev.com/planets/5'

fetch(otherPlanetURL)
    .then(res => { return res.json() })
// .then(mars => { console.log(`${mars.name} is my favorite planet!`) })

const solarSystemURL = 'https://webapis.bloomtechdev.com/planets'

// loop over the planets, at each planet printing "<name> is number <id>"

fetch(solarSystemURL)
    .then(res => { return res.json() })
    .then(planets => {
        // planets.forEach(pl => console.log(`${pl.name} is number ${pl.id}`))
    })

//#endregion

// Hitting and API with Axios
// #region

// log planet details in a sentence

const planet1URL = 'https://webapis.bloomtechdev.com/planets/2'
axios.get(planet1URL)
    .then(response => {
        // console.log(response)
        const { name, diameter, rotation_period } = response.data
        // console.log(`${name} is a planet ${diameter} Km in diameter, with a rotation period of ${rotation_period} hours.`)
    })


const baseURL = 'https://webapis.bloomtechdev.com/planets/'
axios.get(baseURL + '9')
    .then(response => {
        // console.log(`I am not sure ${response.data.name} is a planet!`)
    })


// const badURL = 'https://webapis.bloomtechdev.com/planets/12345'
// axios.get(badURL)
//    .catch(error => {
//         console.log("Sorry, planet with id 12345 does not exist")
//         console.log(error.response.status)
//         console.log(error.response.data.message)
//    })

//#endregion

// Handling spinners and failures
// #region

const snail = 'https://webapis.bloomtechdev.com/slow/snail'
document.querySelector('#spinner').style.display = 'initial'
axios.get(snail)
    .then(res => {
        const { name, created_on } = res.data
        document.querySelector('#data').textContent = `The ${name} was created on ${created_on}`
        document.querySelector('#spinner').style.display = 'none'
    })

// const bug = 'https://webapis.bloomtechdev.com/slow/bug'
// axios.get(bug) 
//     .catch(error => {
//         const { message } = error.response.data
//         document.querySelector('#error').textContent = message
//     })

// display the full error object returned by Axios

// const bug = 'https://webapis.bloomtechdev.com/slow/bug';
// axios.get(bug)
//     .catch(error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log('Error response data:', error.response.data);
//             console.log('Error response status:', error.response.status);
//             console.log('Error response headers:', error.response.headers);
//             // Extract the error message from the response data if available
//             const errorMessage = error.response.data.message || 'Unknown error';
//             document.querySelector('#error').textContent = errorMessage;
//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser
//             // and an instance of http.ClientRequest in node.js
//             console.log('Error request:', error.request);
//             document.querySelector('#error').textContent = 'No response from server';
//         } else {
//             // Something happened in setting up the request that triggered the error
//             console.log('Error message:', error.message);
//             document.querySelector('#error').textContent = 'Request failed';
//         }
//         console.log('Error config:', error.config);
//     });

//#endregion

// Iterating over fetched data to build DOM
// #region

const planets = 'https://webapis.bloomtechdev.com/planets'
axios.get(planets)
    .then(res => {
        const planets = res.data
        planets.forEach(planet => {
            if (planet.name === 'Pluto') return
            const { name, diameter, rotation_period, rotation_around_sun } = planet
            const container = document.createElement('div')
            const planetName = document.createElement('h3')
            const planetDiameter = document.createElement('p')
            const rotation = document.createElement('p')
            const rotationSun = document.createElement('p')
            container.appendChild(planetName)
            container.appendChild(planetDiameter)
            container.appendChild(rotation)
            container.appendChild(rotationSun)
            planetName.textContent = planet.name
            planetDiameter.textContent = `Diameter: ${planet.diameter} Km`
            rotation.textContent = `Rotation: ${planet.rotation_period} hours`
            rotationSun.textContent = `Orbital Period: ${planet.rotation_around_sun} days`
            document.querySelector('#planets').appendChild(container)
        })
    })
    .catch(err => {
        console.log(`Something went wrong: ${err.message}`)
    })

//#endregion


