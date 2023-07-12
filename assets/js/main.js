"use strict"

const gridContainer = document.querySelector(".grid-container");
const btnPlay = document.getElementById("btn-play");

//set event on button
btnPlay.addEventListener("click", myClick);

//buttonfunction
function myClick(){   
    printSquare(gridContainer, gridSquare(100));

}

//create singleSquare
function singleSquare(squareContent){
    const square = document.createElement("div");
    square.classList.add("single-square");
    square.innerHTML= squareContent; 
    return square;
}


//create grid
function gridSquare(squareNum) {
    const gridArray = [];
    //array generato randomicamente dalla funzione
    let bArray = randomNumber(16);
    console.log(bArray)

    for (let i = 0; i < squareNum; i++) {
        const newSquare = singleSquare(1 + i);
        gridArray.push(newSquare);
        newSquare.addEventListener("click", function () {
            //colore applicato ad ogni click
            newSquare.classList.toggle("bg-success")

            //colore applicato solo se i coincide col numero della bomba
            for (let j = 0; j < 16; j++) {
                if (bArray[j] === (i + 1)) {
                    newSquare.classList.toggle("bg-danger")
                    
                }
            }
        })
    }
    return gridArray;
}


//printsquare 
function printSquare(container, squareList){
    container.innerHTML= "";
    for(let i = 0; i < squareList.length ; i++) {
        container.append(squareList[i]);
    }
}

//function random Number/ bomb

function randomNumber(nrNumber){
    let bombArray = [];
    for(let i = 0; i < nrNumber; i++){
        let genNumber = (Math.floor(Math.random() * 100) + 1);
        if (bombArray.indexOf(genNumber) === -1){
            bombArray.push(genNumber);
        } else {
            i--
        }
    }
    return bombArray;
}
