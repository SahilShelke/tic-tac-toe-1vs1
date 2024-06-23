// Initialize game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle cell clicks
function cellClicked(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    
    if (checkWin()) {
        showResultScreen(`Player ${currentPlayer} wins!`);
    } else if (checkDraw()) {
        showResultScreen('Draw!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
}

// Function to check for a win
function checkWin() {
    return winConditions.some(condition => {
        return condition.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

// Function to check for a draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Function to show result screen
function showResultScreen(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-screen').style.display = 'flex';
}

// Function to start a new game
function startNewGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;

    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });

    document.getElementById('result-screen').style.display = 'none';
}
