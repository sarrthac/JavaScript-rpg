let xp = 100;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xptext = document.querySelector("#xpText");  
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const location = [
    {
        name: "town square",
        "button text" : ["Go to store", "Go to cave", "Fight Dragon"],
        "button functions": [goStore,goCave,fightDragon],
        text: "You are in the town square.You see a sign that says \"Store.\" "
    },
    {
        name: "store",
        "button text" : ["Buy 10 health(10 gold)","Buy weapon (30 gold)","Go to town square"],
        "button functionalities" :[buyHealth,buyWeapon,goTown],
        text: "You enter the store"
    }

];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(loaction){

}

function goStore() {

    //Changes the inner texts of button
    button1.innerText = "Buy 10 health(10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    //Changes the text of text section
    text.innerText = "You enter the store"; 
    
    //Changes the onClick property of button
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon; 
    button3.onclick = goTown;
    
} 
function goTown(){
//Changes the inner texts of button
button1.innerText = "Go to store";
button2.innerText = "Go to cave";
button3.innerText = "Fight dragon";

//Changes the text of text section
text.innerText = "You enter the store"; 

//Changes the onClick property of button
button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon;
}

function buyWeapon(){

}

function buyHealth(){

}

function goCave() {
    console.log("Going to Cave")
}

function fightDragon() {
    console.log("Going to fight a dragon")
} 