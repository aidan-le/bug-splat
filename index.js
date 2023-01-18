/*
Online IDE is used and a shared link is attached to the assignment in addition to a zipped file
PRESENTATION OF THE PROJECT IS VIDEO RECORDED AND SUBMITTED TO THE ASSIGNMENT - BOTH UI, UX AND CODE ARE FULLY EXPLAINED IN THE PRESENTATION. MP4 FORMAT.
*/

// We used an object so that we could conveniently index the seperate groups of possible messages through a ternary operator
// instead of chaining if statements
const MESSAGES = {
    pleading: [
        "i have a wife and kids.",
        "i have a dream.",
        "please don't kill me.",
        "vae, puto deus fio.",
        "i can't be dying right now, I have things to do!",
        "why...",
        "send me to where my family are resting.",
        "there are people waiting for me...",
    ],
    defiant: [
        "get out of our homeland!",
        "you can't kill us all!",
        "you will never be safe.",
        "i have a very specific skillset made to defeat people like you.",
        "i'm going to at least take you down!",
        "wash your neck, because i'm coming for it.",
        "i hate you.",
        "you smell gross.",
        "we have the numbers advantage.",
    ],
    finished: [
        "you've splatted us all :("
    ],
};
const BUG_IMAGES = ["beetle.webp", "bug.png", "bug2.png", "bug3.png", "bug.webp"];

let howManyLeft = 16;

function init() {
    howManyLeft = 16

    let container = document.querySelector("#matchContainer");
    container.innerHTML = "";
    for (let i = 1; i <= 16; i++) {
        let bugType = BUG_IMAGES[Math.floor(Math.random() * BUG_IMAGES.length)];
        let element = document.createElement("img");
        element.id = i;
        element.src = `assets/${bugType}`;

        element.addEventListener("click", (event) => {
            splat(event.target);
        });
        container.appendChild(element);
    }
}
function getMessage() {
    let type = howManyLeft === 0 ? "finished" : howManyLeft < 8 ? "pleading" : "defiant";
    let index = Math.floor(Math.random() * MESSAGES[type].length);
    let message = MESSAGES[type][index];
    MESSAGES[type].splice(index, 1);

    return message;
}
let splat = (image) => {
    if (image.getAttribute("src") === "assets/splat.png") {
        return;
    }

    howManyLeft--;
    image.setAttribute("src", "assets/splat.png");

    let messageSpan = document.querySelector("#message");
    messageSpan.textContent = `"${getMessage()}"`;
    let sound = new Audio("assets/sound.mp3");
    sound.play();
}