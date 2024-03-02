let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
h2 = document.querySelector("h2");
let btns = ["first","second","third","four"]
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },1000);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = ` level is ${level}`;
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
   
}

function checkans(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
        
    }
    else{
        h2.innerText = `Game Over  score ${level} press any key to restart the game`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";

        },1000);
    }
}

function btnpress(){
    btn = this;
    userflash(btn);
    id = btn.getAttribute("id");
    userseq.push(id);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    gameseq = [];
    userseq = [];
    started = false;
    level = 0
}