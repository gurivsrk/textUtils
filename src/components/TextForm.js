import React, {useState} from 'react'

const TextForm = (props) => {

    const [text,setText] = useState('Enter Text Here..')

    const [copyBtn, setCopyBtn ] = useState('Copy to Clipboard')

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        setCopyBtn('Copy to Clipboard')
    }
    const handlelowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        setCopyBtn('Copy to Clipboard')
    }

    const handleClear = () => {
        setText('')
        setCopyBtn('Copy to Clipboard')
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
        setCopyBtn('Copy to Clipboard')
        
    }

    const properWords = (words) =>{
        let onlyWord = words.filter((word) =>  word !== '' );
        return onlyWord
    }

    const  handleCapitalClick = () =>{
        let words = properWords(text.split(" "))
        let capitalWords =  words.map((word) => {
            let start =  word[0].toUpperCase()
            return start + word.slice(1).toLowerCase()
        })
        setText(capitalWords.join(' '));
        setCopyBtn('Copy to Clipboard')
    }
    
    const handlecopyClick = (event) => {
        console.log(event)
        navigator.clipboard.writeText(text)
        setCopyBtn('Copied to Clipboard')
    }

    const removeExtraSpaces = () => {
        let removeSpaces = text.split(/[ ]+/);
        setText(removeSpaces.join(' '))
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
   
  return (
    <> 
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1   my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1  my-1" onClick={handlelowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1  my-1" onClick={handleCapitalClick}>Convert to Capitalized case</button>
        <button className="btn btn-primary mx-1  my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button id="copyBtn" className="btn btn-primary mx-1  my-1" onClick={handlecopyClick}>{copyBtn}</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-1">Speak</button>
        <button className="btn btn-primary mx-1  my-1" onClick={handleClear}>Clear</button>
    </div>
    <div className='container my-2'>
        <h2>Text Summary:</h2>
        <p>{properWords(text.trim().split(/\s+/)).length} words and {text.length} characters</p>
        <p>{properWords(text.trim().split(".")).length} Sentences</p>
        <p>{ 0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
