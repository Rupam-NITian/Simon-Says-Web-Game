let gameSeq = [];
let userSeq = [];
let level = 1;

let start = document.querySelector('#start');
let h4 = document.querySelector('.headings h4');
let h3 = document.querySelector('.headings h3');
let boxes = document.querySelector('.boxes');


start.addEventListener('click',function(){
    h4.classList.remove('hide');
    boxes.classList.remove('hide');
    h3.classList.remove('hide');
    this.classList.add('hide');
    setTimeout(blink,1000);  
});



let box = document.querySelectorAll('.boxes div div');



function blink(){  
    let i = Math.floor(Math.random()*4);
    box[i].classList.add('bgBlack');
    setTimeout(() => (box[i].classList.remove('bgBlack')),200);
    gameSeq.push(box[i].id);
};
// level-1 start

let pressCount = 0;

function btnPress(){
    this.classList.add('bgWhite');
    
    setTimeout(()=>(this.classList.remove('bgWhite')),200);
    userSeq.push(this.id);
    let check= true;
        for(let i = 0; i < userSeq.length; i++){
            if(userSeq[i] != gameSeq[i]){
                check = false;
                // console.log("game over");
                gameOver();
                break;
            }
        }
        pressCount++; 
    
    if(pressCount == level && check == true){
        setTimeout(levelUp,1000);
    }
}

for(let i = 0; i < 4; i++){
    box[i].addEventListener('click',btnPress);
}

function levelUp(){
    level++;
    h4.innerText = `Level - ${level}`;
    setTimeout(blink(),100);
    // blink();
    userSeq = [];
    pressCount = 0;
}


function gameOver(){
    // boxes.classList.add('hide');
    // h3.innerText = "Game Over!!!";
    // h4.innerText = `Your score : ${level*10-10}`;
    let heading = document.querySelector('.headings');
    heading.classList.add('opacity');
    boxes.classList.add('opacity');
    let result = document.querySelector('.result');
    result.classList.remove('hide');
    let score = document.querySelector('.result h3');
    score.innerText = `Your Score : ${level*10-10}`;
}



















