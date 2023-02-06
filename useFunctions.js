import React, {useRef, useState} from 'react'
    
export default function useFunctions(startTime = 10){
    const STARTING_TIME = 5
    const [timer, setTimer] = React.useState(startTime)
    const [text, setText] = useState("")
    const [startTimer, setStartTimer] = React.useState(false)
    const inputRef = useRef(null)
    const [wordCount, setWordCount] = React.useState(0)
           
    React.useEffect(() =>{
        if(startTimer){
            timer > 0 
            ? setTimeout(() =>
                {setTimer(prevTimer => prevTimer - 1)}, 
            1000) 
            : timer
            }
        
        if(timer === 0){
            setStartTimer(false)
            setWordCount(calculateWordCount(text))
        }
        
    },[timer, startTimer])
    
        
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function startGame(e){
        setStartTimer(true)
        e.currentTarget.disabled = true
        inputRef.current.disabled = false
        inputRef.current.focus()
    }
    
    function calculateWordCount(text){
        const wordsArr = text.split(' ')
        return wordsArr.filter(word => word !== '').length
    }
      
    function replayGame(){
        setText("")
        setTimer(startTime)
        setWordCount(0)
    }
    
    
    return [text, handleChange, startTimer, startGame, inputRef, timer, calculateWordCount, replayGame, wordCount ]
}