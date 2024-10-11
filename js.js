
*, *::before,*::after {
    box-sizing:  border-box;
}

:root {
    --cell-size: 100px;
    --mark-size: calc(var(--cell-size) * .9);
}

body {
    margin: 0;
    background-color: #eee;
}

main {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100vh;

}

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}
.board {
    display: grid;
    padding: 26px;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    border-radius: 7px;
    align-items: center;
    transition: all 0.9s;
}

.board:hover {
    box-shadow: -1px 5px 15px rgba(0, 0, 0, 0.8);
}

.cell {
    width: var(--cell-size);
    height: var(--cell-size);
    border: 1px solid black;
    position: relative;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
}

.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3) {
    border-top: none
}

.cell:nth-child(3n + 1) {
    border-left: none;
}

.cell:nth-child(3n) {
    border-right: none;
}

.cell:nth-child(7),
.cell:nth-child(8),
.cell:nth-child(9) {
    border-bottom: none;
}

.cell.x::before,
.cell.x::after,
.cell.o::before,
.cell.o::after {
    background-color: black;
}

.board.x .cell:not(.x):not(.o):hover::before,
.board.x .cell:not(.x):not(.o):hover::after,
.board.o .cell:not(.x):not(.o):hover::before,
.board.o .cell:not(.x):not(.o):hover::after  {
    background-color: lightgray;
}


.cell.x::before,
.cell.x::after,
.board.x .cell:not(.x):not(.o):hover::before,
.board.x .cell:not(.x):not(.o):hover::after {
    content: '';
    width: calc(var(--mark-size) * .15);
    position: absolute;
    height: var(--mark-size);
}

.cell.x::before,
.board.x .cell:not(.x):not(.o):hover::before{
    transform: rotate(45deg)
}
.cell.x::after,
.board.x .cell:not(.x):not(.o):hover::after{
    transform: rotate(-45deg)
}


.cell.o::before,
.cell.o::after,
.board.o .cell:not(.x):not(.o):hover::before,
.board.o .cell:not(.x):not(.o):hover::after {
    content: '';
    position: absolute;
    border-radius: 50%;
}

.cell.o::before,
.board.o .cell:not(.x):not(.o):hover::before{
    width: var(--mark-size);
    height: var(--mark-size);
    
}
.cell.o::after,
.board.o .cell:not(.x):not(.o):hover::after {
    width: calc(var(--mark-size) * .7);
    background-color: white;
    height: calc(var(--mark-size) * .7);
}
.cell.x,
.cell.o {
    cursor: not-allowed;
}

.winning-message {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-size: 5rem;
}

.winning-message button {
    font-size: 3rem;
    background: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 2px 6px;
    border: 1px solid white;
    color: white;
    margin-top: 4px;
    transition: all 0.5s;
}
.winning-message.show {
    display: flex;
}
.winning-message button:hover {
    color:  rgb(34, 179, 34);
    border: 1px solid rgb(34, 179, 34);
}
