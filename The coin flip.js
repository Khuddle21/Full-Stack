let coinFlip = Math.round(Math.random()); // 0 for heads, 1 for tails
let choice = prompt("Select Heads or Tails:").toLowerCase();

if (coinFlip === 0) { // Heads
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else { // Tails
    if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}
