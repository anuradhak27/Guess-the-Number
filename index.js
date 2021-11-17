"use strict";


let secretnumber=Math.trunc(Math.random()*20)+1
console.log(secretnumber)
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value)
    // const scorenumber=documnet.querySelector('.score').textContent
    // console.log(scorenumber)


    if(!guess)
    {console.log(document.querySelector('.message').textContent="No number")}

    else if(guess===secretnumber)
    {document.querySelector('.message').textContent=" 🎉Congratulations!"
     if (highscore<score){
     document.querySelector('.highscore').textContent=score;
    }
     document.querySelector('.number').textContent=secretnumber;
     document.querySelector('body').style.backgroundColor='green'
}
    else if( score>1 && guess<secretnumber)
    {document.querySelector('.message').textContent="Too low number!"
    score--;
    document.querySelector('.score').textContent=score
    }

    else if (score>1 && guess>secretnumber)
    {document.querySelector('.message').textContent="Too high number!"
    score--;
    document.querySelector('.score').textContent=score
    }

    else{
        document.querySelector('.score').textContent=0
        document.querySelector('.message').textContent="Game over, you lost!"
        document.querySelector('body').style.backgroundColor='red'
        document.querySelector('.number').textContent=secretnumber;
    }
} )

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    console.log(secretnumber);
    document.querySelector('.message').textContent=" Start guessing...";
    
    
    document.querySelector('.score').textContent='20';
    // document.querySelector('.highscore').textContent=0;
    
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor='black';
})

  
