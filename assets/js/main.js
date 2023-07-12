"use strict"

const gridContainer = document.querySelector(".grid-container");
const btnPlay = document.getElementById("btn-play");

//set event on button
btnPlay.addEventListener("click", myClick);

//buttonfunction
function myClick(){   
    printSquare(gridContainer, gridSquare(100))
}

//create singleSquare
function singleSquare(squareContent){
    const square = document.createElement("div");
    square.classList.add("single-square");
    square.innerHTML= squareContent; 
    return square;
}


//create grid
function gridSquare(squareNum){
    const gridArray = [];
    for(let i = 0; i < squareNum; i++){
        const newSquare= singleSquare(1 + i);
        gridArray.push(newSquare);
        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("bg-success");
            console.log(`Hai colorato la cella numero ${1 + i}`)
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