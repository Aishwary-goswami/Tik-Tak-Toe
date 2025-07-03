
let audioTurn = new Audio("metal-clang-sound-81634-2s.mp3");
let gameover = new Audio("gameOver.wav");

let turn = "X";
let isGameOver = false;

// Change Turn Function
const changeTurn = () => {
    audioTurn.play();
    return turn === "X" ? "O" : "X";
};

// Check Win Function
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]  // Fix: previously it was [2,5,8] again
    ];

    for (let e of wins) {
        if (
            boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
            boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML &&
            boxtext[e[0]].innerHTML !== ""
        ) {
            document.querySelector(".Info").innerHTML = boxtext[e[0]].innerHTML + " WON!";
            isGameOver = true;
            gameover.play();
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.display = "block";
            return true;
        }
    }
    return false;
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((elem) => {
    let boxtext = elem.querySelector(".boxtext");
    elem.addEventListener("click", (e) => {
        if (boxtext.innerHTML === '' && !isGameOver) {
            boxtext.innerHTML = turn;

            
            setTimeout(() => {
                elem.classList.add("faded");
            }, 100); 

            if (!checkWin()) {
                turn = changeTurn();
                document.querySelector(".Info").innerHTML = "Turn of " + turn;
            }
        }
    });
});

const resetBtn = document.getElementById("reset") ;
resetBtn.addEventListener("click" , ()=>{
    location.reload();
})

if (boxtext.innerHTML === '' && !isGameOver) {
    boxtext.innerHTML = turn;
   
    setTimeout(() => {
        e.target.classList.add("clearBackground");
    }, 1500);

    if (!checkWin()) {
        turn = changeTurn();
        document.querySelector(".Info").innerHTML = "Turn of " + turn;
    }
}
