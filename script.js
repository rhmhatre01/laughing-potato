'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.serectNumber').textContent=23;
console.log(document.querySelector('.number').textContent);
document.querySelector('.score').textContent=10;
console.log(document.querySelector('.score').textContent);
document.querySelector('.guess').value=9;
console.log(document.querySelector('.guess').value); */
let secretNum= Math.trunc(Math.random()*20+1);
let score= 5;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};
document.addEventListener('keydown',function(e){
    console.log(e);
    if(e.key=="Enter" || e.key=="enter"){
        check();
    }
}
)
function check(){
document.querySelector('.check').addEventListener('click',function(){
    
    const guess=Number((document.querySelector('.guess').value));
    console.log(guess, typeof guess);
    // When no input is given.
    // if(!guess){
    //     document.querySelector('.message').textContent='No number';
    // }
   if(guess<1 || guess>20){
    //    document.querySelector('.message').textContent='Invalid number';
          displayMessage('Invalid number') ;
    }
    // When user Wins the game.
    else if(guess==secretNum){
        //document.querySelector('.message').textContent='Congrats';
        displayMessage('Congrats') ;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=secretNum;
        document.querySelector('.check').disabled=true;
        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    // When user no is greater or smaller.
    else if(guess!==secretNum){
        if(score>0){
            // document.querySelector('.message').textContent=guess>secretNum?'Number too high!':'Number too Low';
            displayMessage(guess>secretNum?'Number too high!':'Number too Low');
            score--;
            document.querySelector('.score').textContent=score;
            }
            
            else{
                // document.querySelector('.message').textContent='You Lost the game!';
                displayMessage('You Lost the game!');
                document.querySelector('body').style.backgroundColor='#FF0000';
                document.querySelector('.check').disabled=true;
               
            }   
    }
    //A Code refractor method is used for code Optimization and Fullfiling DRY principle.
    /* else if(guess>secretNum){
        if(score>0){
        document.querySelector('.message').textContent='No too high!';
        score--;
        document.querySelector('.score').textContent=score;
        }
        
        else{
            document.querySelector('.message').textContent='You Lost the game!';
            document.querySelector('body').style.backgroundColor='#FF0000';
            document.querySelector('.check').disabled=true;
           
        }
    }
    else{
        if(score>0){
        document.querySelector('.message').textContent='No too low!';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('body').style.backgroundColor='#FF0000';
            document.querySelector('.check').disabled=true;
               
        }
    } */
    document.querySelector('.again').addEventListener('click',function(){
        score=20;
        secretNum= Math.trunc(Math.random()*20+1);
        // document.querySelector('.message').textContent='Start Guessing the no';
        displayMessage('Start Guessing the no');
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
       document.querySelector('.check').disabled=false;
       check();
    })  
});
}
check();