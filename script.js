'use strict'

const checkBox = document.querySelectorAll('.box');
const value = document.querySelectorAll('.circle');
const circle = `<h2 class="circle_value">&xcirc;</h2>`;
const cross = `<h2 class="cross_value">&cross;</h2>`;
const players = document.querySelectorAll('.player_info');
const won = document.querySelector('.won');
const winText = document.querySelector('.win_text');
const newGame = document.querySelector('.new_game');

let player1Current_score = document.querySelector('.player1_score');
let player2current_score = document.querySelector('.player2_score');
let dispPlayer1_score = 0;
let dispPlayer2_score = 0;

const player1Win = function(){
    dispPlayer1_score++;
    player1Current_score.textContent = dispPlayer1_score;
    won.style.display = 'flex';
    winText.insertAdjacentHTML('beforeend','<h2>🎉🎉 Congratulation Player 1 Won 🎉🎉</h2>');
}
const player2Win = function(){
    dispPlayer2_score++;
    player2current_score.textContent = dispPlayer2_score;
    won.style.display = 'flex';
    winText.insertAdjacentHTML('beforeend','<h2>🎉🎉 Congratulation Player 2 Won 🎉🎉</h2>');
}
let player1 = true;
let player2 = false;

let check = [];
value.forEach(e => e.addEventListener('click',(el) => {
    const dispValue = el.target;
    if(player1){
        if(dispValue.innerHTML == ''){
            dispValue.insertAdjacentHTML('beforeend',cross);
            player1 = false;
            player2 = true;
            players.forEach(e => e.classList.toggle('active'));
        }
    }else if(player2){
        if(dispValue.innerHTML == ''){
        dispValue.insertAdjacentHTML('beforeend',circle);
        player2 = false;
        player1 = true;
        players.forEach(e => e.classList.toggle('active'));
        }
    }
    // console.log(dispValue.textContent);  
    // console.log(value);
    check = [...value];
    const winValue1 = check[0].textContent;
    const winValue2 = check[1].textContent;
    const winValue3 = check[2].textContent;
    const winValue4 = check[3].textContent;
    const winValue5 = check[4].textContent;
    const winValue6 = check[5].textContent;
    const winValue7 = check[6].textContent;
    const winValue8 = check[7].textContent;
    const winValue9 = check[8].textContent;
    
  const winCondition = function(){

      if(winValue1 == winValue2){
          if(winValue3 == winValue2){
            if(winValue2 == '✗'){
                player1Win();
            }
            else if(winValue2 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue4 == winValue5){
        if(winValue6 == winValue5){
            if(winValue5 == '✗'){
                player1Win();
            }
            else if(winValue5 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue7 == winValue8){
        if(winValue9 == winValue8){
            if(winValue8 == '✗'){
                player1Win();
            }
            else if(winValue8 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue1 == winValue4){
        if(winValue7 == winValue4){
            if(winValue4 == '✗'){
                player1Win();
            }
            else if(winValue4 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue2 == winValue5){
        if(winValue8 == winValue5){
            if(winValue5 == '✗'){
                player1Win();
            }
            else if(winValue5 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue3 == winValue6){
        if(winValue9 == winValue6){
            if(winValue6 == '✗'){
                player1Win();
            }
            else if(winValue6 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue1 == winValue5){
        if(winValue9 == winValue5){
            if(winValue5 == '✗'){
                player1Win();
            }
            else if(winValue5 == '◯'){
                player2Win();
            }
        }
    }
    if(winValue3 == winValue5){
        if(winValue7 == winValue5){
            if(winValue5 == '✗'){
                player1Win();
            }
            else if(winValue5 == '◯'){
                player2Win();
            }
        }
    }
}  
    winCondition();

    if(winValue1 != ''){
        if(winValue2 != ''){
            if(winValue3 != ''){
                if(winValue4 != ''){
                    if(winValue5 != ''){
                        if(winValue6 != ''){
                            if(winValue7 != ''){
                                if(winValue8 != ''){
                                    if(winValue9 != ''){
                                        console.log('draw')
                                        won.style.display = 'flex';
                                        winText.insertAdjacentHTML('beforeend',`<h2>Let's Fight Again 💪</h2>`);
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}))

newGame.addEventListener('click',function(){
    won.style.display = 'none';
    value.forEach(e => {
        e.innerHTML = '';
    });
    winText.innerHTML = '';
    
})