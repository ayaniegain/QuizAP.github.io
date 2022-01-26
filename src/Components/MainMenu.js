import React,{useContext} from 'react';
import{QuizContext} from "../Helpers/Contexts"

function MainMenu() {
  const {gameState,setGameState}=useContext(QuizContext)



  return <div className='Menu'>
      <h2>
          <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
      </h2>
  </div>;
}

export default MainMenu;
 