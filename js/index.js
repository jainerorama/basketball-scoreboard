// Working with Buttons from the section Home//
// I need to make that the board change, everytime when I tap a buton ex:+1 +2 +3"//
// I will create a function that make that //

let homePoints = document.getElementById("home-score")
let count = 0

function add1Point() {
    count += 1
    homePoints.textContent = count
} 

function add2Point() {
    count += 2
    homePoints.textContent = count
} 

function add3Point() {
    count += 3
    homePoints.textContent = count
} 

// Working with Buttons from the section Guest//

let guestPoints = document.getElementById("guest-score")
let count2 = 0

function add1PointGuest() {
    count2 += 1
    guestPoints.textContent = count2
} 

function add2PointGuest() {
    count2 += 2
    guestPoints.textContent = count2
} 

function add3PointGuest() {
    count2 += 3
    guestPoints.textContent = count2
} 

// Working with New Game Button //

// First I need to get the counters and then, change the count to 0 when, the new button it's Clicked //

function newGame(){
    count = 0
    count2 = 0
    homePoints.textContent = count
    guestPoints.textContent = count2
}


