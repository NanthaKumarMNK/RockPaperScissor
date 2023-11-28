// Selection

let nButton=document.querySelector('.nButton')
let rules =document.querySelector(".rButton");
let closebar=document.querySelector('.closebar');
let gameRules=document.querySelector('.gameRules');
let win=document.querySelector('.win')
let title=document.querySelector('.title')
let playAgain=document.querySelector('.comment .playAgain1')
let playagain=document.querySelector('.playAgain2')
let bordercolor=document.querySelector('.bordercolor')
let PcScore=document.querySelector('.cScore')
let UserScore=document.querySelector('.mScore')
let head=document.querySelector('.head')
let option=document.querySelector('.option')
let RPS=document.querySelectorAll('.img');
let result=document.querySelector('.result')


// Rules Button 

rules.addEventListener('click',()=>{
    gameRules.classList.add('gameRules1');
})
closebar.addEventListener('click',()=>{
gameRules.classList.remove('gameRules1');
})

// Next Button

nButton.addEventListener('click',()=>{
    win.classList.add('win1')
    result.classList.remove('result1')
    title.classList.add('title1')
    nButton.classList.remove('nButton1')
})

// Play Again Button

playAgain.addEventListener('click',()=>{
    option.classList.remove('option1')
    result.classList.remove('result1')
    nButton.classList.remove('nButton1')
    bordercolor.classList.remove('Pcwon')
    bordercolor.classList.remove('bordercolor1')
    bordercolor.classList.remove('Iwon')
    document.querySelector('.comment p').innerHTML='AGAINST PC'
})

playagain.addEventListener('click',()=>{
    win.classList.remove('win1')
    option.classList.remove('option1')
    nButton.classList.remove('nButton1')
    title.classList.remove('title1')
    bordercolor.classList.remove('Pcwon')
    bordercolor.classList.remove('bordercolor1')
    bordercolor.classList.remove('Iwon')
    document.querySelector('.comment p').innerHTML='AGAINST PC'
})

// Local Storage
document.addEventListener("DOMContentLoaded", ()=> {
    
    PcScore.innerHTML = localStorage.getItem("PcScore") || 0;
    UserScore.innerHTML = localStorage.getItem("UserScore") || 0;
  

RPS.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        option.classList.add('option1');
        result.classList.add('result1');

// Selecting

        User=buttons.alt;

        arr=['Rock','Paper','Scissor']
        Pc=arr[Math.floor(Math.random()*arr.length)]

        let User_Selected=document.getElementById("USER")
        let Pc_Selected=document.getElementById("PC")

        Pc_Selected.src=`${Pc}.png`
        User_Selected.src=`${User}.png`

        let UserSelected=document.querySelector('.youSelected .selected')
        let PcSelected=document.querySelector('.pcSelected .selected')

// Score

        if (User==Pc){
            head.innerHTML="TIED UP"
            playAgain.innerHTML='REPLAY'
            document.querySelector('.comment p').innerHTML=''
        }

        else if ((User === 'Rock' && Pc === 'Scissor') ||
        (User === 'Paper' && Pc === 'Rock') ||
        (User === 'Scissor' && Pc === 'Paper'))
        {
            playAgain.innerHTML='PLAY AGAIN'
            head.innerHTML="YOU WIN"
            UserScore.innerHTML++
            nButton.classList.add('nButton1')
            bordercolor.classList.add('bordercolor1')
            bordercolor.classList.add('Iwon')
                }
        else{
            head.innerHTML="YOU LOSE"
            playAgain.innerHTML='PLAY AGAIN'
            PcScore.innerHTML++
            bordercolor.classList.add('Pcwon')
            bordercolor.classList.add('bordercolor1')
            }
 
// Border color

        if (Pc=='Rock'){
            PcSelected.style.borderColor='#0074B6' 
        }
        if(Pc=='Scissor'){   
            PcSelected.style.borderColor='#BD00FF'
        }
        if(Pc=='Paper'){ 
            PcSelected.style.borderColor='#FFA943'
        }
        if (User=='Rock'){
            UserSelected.style.borderColor='#0074B6'
        }
        if(User=='Scissor'){
            UserSelected.style.borderColor='#BD00FF'
        }
        if (User=='Paper'){
            UserSelected.style.borderColor='#FFA943' 
        }
    // Update local_storage

    localStorage.setItem("UserScore",UserScore.innerHTML);
    localStorage.setItem("PcScore", PcScore.innerHTML);
  });
});
});

