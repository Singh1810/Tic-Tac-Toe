//console.log("Welcome to Tic Tac Toe");

let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn=()=>
{
    return turn==="X"?"0":"X"
}

//function to check for a win
const checkWin=()=>
{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    wins.forEach(e =>
        {
            if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
            {
                document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " " + "Won"
                isgameover=true;
            }
        })
}

//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>
    {
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>
    {
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if (!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for" + " " + turn;
            } 
            
       /* else{
                boxtext.innerText=won;
            } */        
        }
    })
})

//code for reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for" + " " + turn;
    }
})




