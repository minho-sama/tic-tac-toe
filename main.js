// minél kevesebb global var! a végén átrendezni MODUL-lal!

let board =['','','','','','','','',''] //had to fill in, otherwise I will have winner as soon as I start
let numOfRounds = 0
let winner = "no one"

const fields = document.querySelectorAll('.field')
fields.forEach(field => {
    field.addEventListener('click', markField)
})

function markField (event){
    clearBoardContent()

    let index = event.target.dataset.index
    console.log(index)
    whichPlayer = playerTurn()

    if (board[index] == 'o' || board[index] == 'x'){
        alert('sry, taken')
    }
    else{
        if (whichPlayer == 'player1'){
            board[index] = 'x'
            numOfRounds++
        }
        else{
            board[index] = 'o'
            numOfRounds++
    }}

    drawBoard()
    checkWinner()

}

function playerTurn (){
    return (numOfRounds % 2 == 0) ? 'player1' : 'player2'
}

function clearBoardContent(){
    fields.forEach(field => {
        field.textContent = ''
    })
}

function drawBoard(){
    fields.forEach(field=>{
        let mark = document.createElement('span');
        mark.textContent = board[field.dataset.index];
        field.appendChild(mark)
    })
}

function checkWinner(){
    if (//vertical
        board[0] == 'x' && board[3] == 'x' && board[6] == 'x' ||
        board[1] == 'x' && board[4] == 'x' && board[7] == 'x' ||
        board[2] == 'x' && board[5] == 'x' && board[8] == 'x' ||
        //horizontal
        board[0] == 'x' && board[1] == 'x' && board[2] == 'x' ||
        board[3] == 'x' && board[4] == 'x' && board[5] == 'x' ||
        board[6] == 'x' && board[7] == 'x' && board[8] == 'x' ||
        //diagonal
        board[0] == 'x' && board[4] == 'x' && board[8] == 'x' ||
        board[2] == 'x' && board[4] == 'x' && board[6] == 'x'
        ){  
            winner = 'Player1'
            alert( winner + ' won!')
            newRound()
        }
    
    else if (//vertical
        board[0] == 'o' && board[3] == 'o' && board[6] == 'o' ||
        board[1] == 'o' && board[4] == 'o' && board[7] == 'o' ||
        board[2] == 'o' && board[5] == 'o' && board[8] == 'o' ||
        //horizontal
        board[0] == 'o' && board[1] == 'o' && board[2] == 'o' ||
        board[3] == 'o' && board[4] == 'o' && board[5] == 'o' ||
        board[6] == 'o' && board[7] == 'o' && board[8] == 'o' ||
        //diagonal
        board[0] == 'o' && board[4] == 'o' && board[8] == 'o' ||
        board[2] == 'o' && board[4] == 'o' && board[6] == 'o'
    ){
        winner = 'Player2'
        alert( winner + ' won!')
        newRound()
    }
    
    else if (numOfRounds == 9 && winner == 'no one'){
        alert("it's a tie!")
        newRound()
    }
}

function newRound(){
    board = ['','','','','','','','','']
    numOfRounds = 0
    winner = 'no one'
}

