const choices = ["sten", "sax", "påse"]
let winner;

while (winner === undefined) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let userChoice;
    let pattern = /^(sten|sax|påse){1}$/i;
    
    while(!pattern.test(userChoice)) {
        userChoice =prompt("Choose sten, sax or påse");
    }

    if (userChoice !== computerChoice) {
        if (userChoice === "sten") {
            winner = computerChoice === "sax" ? "User" : "Computer";
        }
        else if (userChoice === "sax") {
            winner = computerChoice === "påse" ? "User" : "Computer";
        }
        else {
            winner = computerChoice === "sten" ? "User" : "Computer";
        }
    } else {
        alert("Its a draw!!")
    }
}

alert(`${winner} has won!!`)

