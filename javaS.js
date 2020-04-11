


var turn;
var winner;
var counter = 0;
var flag=0;
function startGame(){
    flag = 1;
    turn="X";
    if(Math.random() < 0.5){
        turn = "O";
    }

    winner = null;
    setMessage(turn + " gets to start !!")
}


function setMessage(msg){
    document.getElementById("message").innerText=msg;

}

function reset(){
    for( var id = 1; id <= 9; id++ )
	{
		var square = document.getElementById( id );
        square.innerHTML = "";
    }
    startGame();
}

function nextMove(square){
    if(flag == 1){
    if(winner != null){
        setMessage(winner + " already won the game.");
    }
    else if(square.innerText == ""){
        square.innerText = turn;
        counter++; 
        switchTurn();
    } else {
        setMessage("That square is already Taken !");
    }
    }else{
        setMessage("PRESS START GAME TO BEGIN ;)")

    }
} 

function switchTurn(){

    if(checkForWinner(turn)){
        winner = turn;
        alert("CONGRATULATIONS, " + turn + " YOU WIN !!")
    }
    else if(turn == "X"){
        onmouseover = changeTextonMouseOver(O);
        onmouseout = changeTextonMouseOut(O);
        turn = "O";
        setMessage("It's " + turn + " 's turn !")
    }else{
        onmouseover = changeTextonMouseOver(X);
        onmouseout = changeTextonMouseOut(X);
        turn = "X";
        setMessage("It's " + turn + " 's turn !")
    }
    if(counter==9 || checkForWinner(move) == false){
        setMessage(" DRAW " )
    }

}

function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById(number).innerText;
}

function checkForWinner(move){
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(3, 6, 9, move) || 
        checkRow(4, 5, 6, move) || 
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) || 
        checkRow(2, 5, 8, move) || 
        checkRow(1, 5, 9, move) || 
        checkRow(3, 5, 7, move)){
            result = true;
        }
        return result;
}

function changeTextonMouseOver(trn){
    var control = document.getElementsByClassName("square");
    control.innerText = "trn";
}

function changeTextonMouseOut(trn){
    var control = document.getElementsByClassName("square");
    control.innerText = "";
}

