let gameseq = [];
let userseq = [];

let btns= ["a", "b", "c", "d"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");

//press any keyboard key
document.addEventListener("keypress", function () {
    //only 1 time start the game......
    if(started==false){
        // console.log("Game Started");
        started=true;

        levelUp();
    }
})

function btnflash (btn) {
    btn.classList.add("flash");
    setTimeout( function (){
        btn.classList.remove("flash");
    },250);
}

function levelUp() {
    userseq=[];
    level++;

    h2.innerText=`Level ${level}`;

    //random button choose
    let random_ind=Math.floor(Math.random()*3);
    let randomColor= btns[random_ind];
    let random_btn=document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);

    btnflash(random_btn);
}




function btn_press(){
    // console.log("Btn was pressed");
    let btn=this;
    btnflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    check(userseq.length-1);
}

function check(ind) {
    
    if(userseq[ind]==gameseq[ind]){
        console.log("same");
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
          
    }else{
        h2.innerText= `Game Over! Your score was ${level} Press any key to start`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        
        reset();
    }
}

let allBtns= document.querySelectorAll(".btn");
for(btnn of allBtns){
    btnn.addEventListener("click", btn_press);
}

function reset () {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}