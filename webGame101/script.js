
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
var score=0;

rock.addEventListener('click',function(){
    playGame('حجرة');
    //playGame('rock');
});
paper.addEventListener('click',function(){
    playGame('ورقة');
    //playGame('paper');
});
scissors.addEventListener('click',function(){
    playGame('مقص');
    //playGame('scissors');
});


function scores(points){
    score+=points;
    document.getElementById("score-display").textContent=score;
}

function playGame(userChoice){
    const resultElement =document.getElementById('result');
    while(resultElement.firstChild){
        resultElement.removeChild(resultElement.firstChild);
    }
    const Choice =['حجرة','ورقة','مقص'];
    const computerChoice =Choice[Math.floor(Math.random()*Choice.length)];
    
    
const computerChoiceElement =document.createElement('p');
const computerChoiceimg =document.createElement('img');
computerChoiceimg.src=getImgUrl(computerChoice);
computerChoiceimg.alt=computerChoice;
computerChoiceElement.innerHTML='اختيار الكمبيوتر:  '; //+ computerChoice; //+computerChoiceimg;
result.appendChild(computerChoiceElement);
result.appendChild(computerChoiceimg);
//result.append(computerChoice)
//result.appendChild(computerChoiceimg);

const userChoiceElement =document.createElement('p');
const userChoiceimg =document.createElement('img');
userChoiceimg.src=getImgUrl(userChoice);
userChoiceimg.alt=userChoice;
userChoiceElement.innerHTML='اختيارك:  ';//+userChoice;
result.appendChild(userChoiceElement);
result.appendChild(userChoiceimg);
    //result.innerHTML='<br>{userChoice}$:اختيارك<br>{computerChoice}$: الكمبيوتر';
  // const resultText =document.createElement('p');
  // resultText.textContent='اختيار الكمبيوتر: ${computerChoice} \n اختيارك:${userChoice}';
   //result.appendChild(resultText);

   const winnerElement =document.createElement('p');
    if (userChoice===computerChoice) 
    {
    result.innerHTML +='<br> تعادل     ' ;setTimeout(function(){ const massage3=confirm("  تعادلل  "+'  انت اخترت ' +userChoice+' الكمبيوتر اختار  ' +computerChoice); 
},1000);
    }else if(userChoice==='حجرة'&& computerChoice==='مقص'||
    userChoice==='مقص'&& computerChoice==='ورقة'||
    userChoice==='ورقة'&& computerChoice==='حجرة')
    {
        //userChoice==='rock'&& computerChoice==='scissors'||
       // userChoice==='scissors'&& computerChoice==='paper'||
        //userChoice==='paper'&& computerChoice==='rock')
        //{
            result.innerHTML +=' <br> انت الفائز';
            scores(10);
            setTimeout(function(){ const massage=confirm(" مبررروكك الفوز!!!  "+'  انت اخترت ' +userChoice+' الكمبيوتر اختار  ' +computerChoice); 
    },1000);
//}else  {
       // result.innerHTML+=' <br>  انت خسرت';
       // setTimeout(function(){
            //const massage2=confirm('  لقد خسررت :( '); 
            // const massage2=confirm("  لقد خسررت :( "+'  انت اخترت ' +userChoice+' الكمبيوتر اختار  ' +computerChoice);} 

                //const playAgain=confirm('لقد خسرت هل ترغب في اللعب مره اخرى؟');
        // const playAgain=confirm(' هل ترغب في اللعب مره اخرى؟');}
           // if(playAgain){
                //reset();}
//},1000);
}else{result.innerHTML+=' <br>  انت خسرت'; 
     //setTimeout(function(){
       // const playAgain=confirm(' هل ترغب في اللعب مره اخرى؟');},1000);}
    }//if(playAgain){
      //  reset();}

}

               
              result.append(winnerElement);
             // result.appendChild(computerChoiceElement);
             // result.appendChild(userChoiceElement);
             
            
            
            function getImgUrl(choice){
              if(choice==='حجرة'){
                return'img/حجر.png';
              }
              else if(choice==='ورقة'){
                return'img/ورقة.png';
            }
            else if(choice==='مقص'){
                return 'img/مقص.png';
            }
            }
        
        
        
        