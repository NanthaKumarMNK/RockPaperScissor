
// Rules Button 

let rules =document.querySelector(".rButton");
let closebar=document.querySelector('.closebar');
let gameRules=document.querySelector('.gameRules');
rules.addEventListener('click',()=>{
    gameRules.classList.add('gameRules1');
})
closebar.addEventListener('click',()=>{
gameRules.classList.remove('gameRules1');
})




// Options 


let option=document.querySelector('.option')
let RPS=document.querySelectorAll('.image');
let result=document.querySelector('.result')
let arr=Array.from(RPS)
arr.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        option.classList.add('option1');
        result.classList.add('result1');
        let disp= buttons.querySelector('img');
            
        // Result

        //User

        let youSelectedimg=document.querySelector('.youSelected .selected img')
        let pcSelectedimg=document.querySelector('.pcSelected .selected img')
        let youSelected=document.querySelector('.youSelected .selected')
        let pcSelected=document.querySelector('.pcSelected .selected')
        let head=document.querySelector('.head')
        let playAgain=document.querySelector('.comment .playAgain1')
        let playagain=document.querySelector('.playAgain2')
        let compScore=document.querySelector('.cScore')
        let userScore=document.querySelector('.mScore')
        let nButton=document.querySelector('.nButton')
        let bordercolor=document.querySelector('.bordercolor')
        let win=document.querySelector('.win')
        let title=document.querySelector('.title')
        let Rock=document.querySelector('.rock')
        let Paper=document.querySelector('.paper')
        let Scissor=document.querySelector('.scissor')

            youSelectedimg.remove()
            youSelected.append(disp)

        //PC
        let randomNo=Math.floor(Math.random() * 3);
        if (randomNo==0){
            pcSelectedimg.src='Rock'+'.png'
        }
        else if(randomNo==1){
            pcSelectedimg.src='Paper'+'.png'
        }
        else{
            pcSelectedimg.src='Scissor'+'.png'
        }

        // Score

        if (pcSelectedimg.src==disp.src){
            head.innerHTML="TIED UP"
        }

        else{
            if (pcSelectedimg.src.includes('Rock.png')==true){
                playAgain.innerHTML='PLAY AGAIN'
                if (disp.src.includes('Scissor.png')==true){
                    head.innerHTML="YOU LOSE"
                }
                else{
                    head.innerHTML="YOU WIN"
                }

            }
            if (pcSelectedimg.src.includes('Scissor.png')==true){
                if (disp.src.includes('Rock.png')==true){
                    head.innerHTML="YOU WIN"                
                }
                else{
                    head.innerHTML="YOU LOSE"
                }

            }
            if (pcSelectedimg.src.includes('Paper.png')==true){
                if (disp.src.includes('Scissor.png')==true){
                    head.innerHTML="YOU WIN"                
                }
                else{
                        head.innerHTML="YOU LOSE"
                    }
            }
        }

        // Score count
        let count=0

        if(head.innerHTML=="TIED UP"){
            playAgain.innerHTML='REPLAY'
        }
        else if(head.innerHTML=="YOU WIN"){
            userScore.innerHTML=count+=1
            nButton.classList.add('nButton1')
            bordercolor.classList.add('bordercolor1')
            bordercolor.classList.add('Iwon')
        }
        else{
            compScore.innerHTML=count+=1
            bordercolor.classList.add('Pcwon')
            bordercolor.classList.add('bordercolor1')
        }
        // Next Button

        nButton.addEventListener('click',()=>{
            win.classList.add('win1')
            result.classList.remove('result1')
            title.classList.add('title1')
})

        

        // Play Again

        playAgain.addEventListener('click',()=>{
            option.classList.remove('option1')
            result.classList.remove('result1')
            nButton.classList.remove('nButton1')

        })

        playagain.addEventListener('click',()=>{
            win.classList.remove('win1')
            option.classList.remove('option1')
            nButton.classList.remove('nButton1')
            title.classList.remove('title1')
        })

        
        // Border color

        if (pcSelectedimg.src.includes('Rock.png')==true){
            pcSelected.style.borderColor='#0074B6' 
        }
        if(pcSelectedimg.src.includes('Scissor.png')==true){   
            pcSelected.style.borderColor='#BD00FF'
        }
        if(pcSelectedimg.src.includes('Paper.png')==true){ 
            pcSelected.style.borderColor='#FFA943'
        }
        if (disp.src.includes('Rock.png')==true){
            youSelected.style.borderColor='#0074B6'
        }
        if(disp.src.includes('Scissor.png')==true){
            youSelected.style.borderColor='#BD00FF'
        }
        if (disp.src.includes('Paper.png')==true){
            youSelected.style.borderColor='#FFA943' 
        }

    })
    

}
)



