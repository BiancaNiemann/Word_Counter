import React, {useRef} from 'react'
import useFunctions from "./useFunctions"

export default function App(){

    const [
        text, 
        handleChange, 
        startTimer, 
        startGame, 
        inputRef, 
        timer, 
        calculateWordCount, 
        replayGame, 
        wordCount
    ] = useFunctions(15)
    
    return(
        <div>
            <h1>Speed Word Counter</h1>
            <textarea 
                onChange={handleChange}
                value={text}
                disabled={!startTimer}
                ref={inputRef}
            />
            <h4>Time remaining: {timer}</h4>
            {timer > 0 && <button onClick={(e) => startGame(e)}>Start!</button>}
            {timer === 0 && <button onClick={replayGame}>Play Again!</button>}
            <h1>Word Count:{timer === 0 ? wordCount : ''}</h1>
        </div>
        
    )
}