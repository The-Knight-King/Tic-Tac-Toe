let boxes = document.querySelectorAll(".box");

let turnX = true;   //creating a switch for player turns

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let startMsg = document.querySelector(".start");

let entireGame = document.querySelector(".entire-game");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

//using forEach method here bcoz boxes is a nodelist i.e. an object, so eventListener can't be applied directly to it and we need to apply the entire logic to all the boxes.

boxes.forEach((box) => {    
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });

    // function to disable all the boxes once a winner is declared
    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
            box.classList.add("disabled");
        };
    };

    // show winner function
    const showWinner = (winner) => {
        msg.innerText = `Congratulations! & the winner is '${winner}'`;
        msgContainer.classList.remove("hide");
        startMsg.classList.add("hide");
        entireGame.classList.add("hide");
        disableBoxes();
    }

    // Check winner function
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    showWinner(pos1);
                };
            };
        };
    };
});


// Reset Button
let resetBtn = document.querySelector(".reset-game");

resetBtn.addEventListener("click", () => {
    location.reload();
});

// new game button
let newGameBtn = document.querySelector(".new-game");

newGameBtn.addEventListener("click", () => {
    location.reload();
});