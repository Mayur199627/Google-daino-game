let char = document.getElementById("charactor");
let block = document.getElementById("block");
let score = document.getElementById('score');

let scorepoint = 0
let updateScore = setInterval(()=>{
    scorepoint+=1
    score.innerText = "Score : "+scorepoint;
},2000)

window.addEventListener('keydown',jump)
function jump(){
    
    if(char.classList != "animate"){

        char.classList.add('animate');
    }
    setTimeout(()=>{
        char.classList.remove('animate')
    },500)
}

let checkDead = setInterval(()=>{
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<40 && blockLeft>0 && charTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none'
        alert("You Lose")
        clearInterval(updateScore)
    }
},10)