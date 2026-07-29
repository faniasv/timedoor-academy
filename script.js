// Lesson 1 - Code Practice 1
function runLesson1Task1() {

    document.getElementById("output1").textContent =
`Hello, I am Cobee!
I am 8 years old
I want to be Astronaut`;

}

// === Lesson 1 - Code Practice 2
// Task 1: 
function runLesson1Task2() {

    document.getElementById("output2").textContent =
`   *
  ***
 *****
*******
  |||`;

}

// Task 2: Do It Yourself
// Draw Fish
function runLesson1Task3() {

    document.getElementById("output3").textContent =
`FISH FISH FISH
<><    <><

   <><

<><    <><

MEAW MEAW
 /\\_/\\\\
( o.o )
 > ^ <`;

}

// === Lesson 2 - Code Practice 2
// Task 1: Try saving Steve's favorite movie data into 4 variables.
// You are free to give variable names, but you have to follow the rules for writing variable names!
function runLesson2Task1() {

    let title ="Captain Marvel";
    let rating = 6.8;
    let year = 2019;
    let allAges = "No";

    document.getElementById("output4").textContent =
`Title: ${title}
Rating: ${rating}
Year of Issue: ${year}
For all ages: ${allAges}`;

}

// Task 2: Create a variable that represents the book title, author name, year of publication, and whether the book is categorized as science.
// Display the value of the variable in the console.
function runLesson2Task2() {

    let bookTitle = "The Quantum Universe";
    let authorName = "Brian Cox and Jeff Forshaw";
    let publicationYear = 2011;
    let isScience = true;

    document.getElementById("output5").textContent =
`Book Title: ${bookTitle}
Author: ${authorName}
Publication Year: ${publicationYear}
Science Book: ${isScience}`;

}

// === Lesson 3 - Code Practice 1
// Task 1: Create a program to check whether a number is positive or negative using conditionals. 
function checkNumber(number){

    if(number>0){
        return "positive";
    }

    else if(number<0){
        return "negative";
    }

    else{
        return "not negative or positive";
    }

}

// Test Number
function runLesson3Task1(){

    document.getElementById("output6").textContent =
    `${checkNumber(-40)}
    ${checkNumber(50)}
    ${checkNumber(0)}`;

}


// Task 2: Create a program to check whether a person's age is eligible to get a driver's license (17 years old and above) Test age : 8, 17, 20
function eligible(age) {
    if (age < 17) {
        return "Whoopsie! You're not eligible to be a driver";
    } else if (age >= 17) {
        return ("Welcome, you're eligible to be a driver!")
    }
}

function runLesson3Task2(){

    document.getElementById("output7").textContent =
    `${eligible(8)}

    ${eligible(17)}

    ${eligible(20)}`;

}

// Task 3: Create a program to determine student grades based on the grades obtained.
function checkGrade(score) {
    if (score > 90) {
        return "Grade A";
    } else if (score > 75) {
        return "Grade B";
    } else if (score > 60) {
        return "Grade C";
    } else {
        return "Grade D";
    }
}

// Test scores
function runLesson3Task3(){

    document.getElementById("output8").textContent =
    `${checkGrade(95)}
    ${checkGrade(80)}
    ${checkGrade(70)}
    ${checkGrade(50)}`;

}

// Task 4: Create variables totalPayment and member (boolean) with values total shopping 200,000 and member status true.
// Display the total payment using console.log()
function runLesson3Task4(){

    let totalPayment=200000;
    let member=true;

    if(member){

    totalPayment-=totalPayment*0.10;

    }

    document.getElementById("output9").textContent=
    `Total payment: Rp${totalPayment}`;

}

// Task 5: Create a chooosenPlayer variable and give it the value "Knight" or "Wizard". Use an if-else structure to provide a message based on the chosen player. For example, "Welcome, Knight the hero!" or "Welcome, Wizard the witch!".
function greetPlayer(player) {
    if (player === "Knight") {
        return "Welcome, Knight the hero!";
    } else if (player === "Wizard") {
        return "Welcome, Wizard the witch!";
    } else {
        return "Welcome, traveler!";
    }
}

function runLesson3Task5(){

    document.getElementById("output10").textContent=
    greetPlayer("Knight");

}

// === Lesson 3 - Code Practice 2
// Steve is making a 2D game. To determine the player's position, he needs to make a program that can determine whether the player location.
// If x and y positive, player top right
// If x and y negative, player bottom left
// If x positive and y negative , player bottom right
// If x negative and y positive, player top left

// Make function to determine player's location
function playerLocation (x, y) {
    if (x > 0 && y > 0) {
        return "Player is on the top right.";
    } else if (x < 0 && y < 0) {
        return "Player is at the bottom left.";
    } else if (x > 0 && y < 0) {
        return "Player is at the bottom right.";
    } else if (x < 0 && y > 0) {
        return "Player is on the top left.";
    } else {
        return "Player is on one of the axes or at the origin.";
    }
}

// Pakai if - else if supaya program berhenti saat menemukan posisi yang tepat

function runLesson3Task6(){

    document.getElementById("output11").textContent=
    playerLocation(-9,7);

}

// === Lesson 4 - Code Practice 1
// Task 1: Write a program to print your name on 20 lines!
function runLesson4Task1(){

    let text="";

    for(let i=0;i<20;i++){

        text+="I'm Steve\n";

    }

    document.getElementById("output12").textContent=text;

}

// Task 2: Write a program to display a sequence of numbers from 1-20.
function runLesson4Task2(){

    let text="";

    for(let i=1;i<=20;i++){

    text+=i+"\n";

    }

    document.getElementById("output13").textContent=text;

}

// Task 3: Write a program to display multiples of 5 from 5 to 100.
function runLesson4Task3(){

    let text="";

    for(let i=5;i<=100;i+=5){

    text+=i+"\n";

    }

    document.getElementById("output14").textContent=text;

}

// === Lesson 4 - Code Practice 2
// Array of Steve's game times 
function runLesson4Task4(){

    let gameTimes=[2,2,3,3,1,4,5];

    let totalTime=0;
    let exceededCount=0;

    for(let i=0;i<gameTimes.length;i++){

        totalTime+=gameTimes[i];

        if(gameTimes[i]>2){

            exceededCount++;

        }

    }

    document.getElementById("output15").textContent=
    `Total time: ${totalTime} hours

    Exceeded limit: ${exceededCount} times`;

}

// === Lesson 5 - Project 1: Button Clicked
function intro() {
    document.write('Hi <br>');
    document.write('My Name is Noah <br>');
    document.write('I want to be a game developer <br>');
}

function funFact() {
    document.write('Do you know? <br>');
    document.write('The first programmer in the world was a woman named Ada Lovelace. <br>')
}
