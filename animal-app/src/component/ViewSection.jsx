import '../Style/ViewSection.css';
import React, {useState,useRef} from 'react';


function ViewSection({randomface,randomcolor,randomeyes,randommouth,randomacc,randompattern}) {

console.log(randomacc)
console.log(randommouth)
  let faceurl = `./img/face/face${randomface}/color${randomcolor}.png`
  let eyesurl = `./img/eye/eye${randomeyes}.png`
  let mouthurl = `./img/mouth/mouth${randommouth}.png`
  let accurl = `./img/acc/acc${randomacc}.png`
  let patternurl = `./img/pattern/pattern${randompattern}.png`


    return (
      <div>
        <div className="ViewSection">
          <div className="faceimg"><img alt="face_" src={faceurl}/></div>
          <div className="eyeimg"><img alt="eyes_" src={eyesurl}/></div>         
          <div className="mouthimg"><img alt="mouth_" src={mouthurl}/></div> 
          <div className="accimg"><img alt="acc_" src={accurl}/></div> 
          <div className="patternimg"><img alt="pattern_" src={patternurl}/></div>   
        
        </div>
      </div>
      
    );
  }
  
  export default ViewSection;