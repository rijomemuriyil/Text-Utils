import React, {useState} from 'react'


export default function TextForm(props) {


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces handled","success");
}
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!!!","success");
}

  const handleAlternateClick=()=>{
    let newText;
    let upperWord=text.toUpperCase();
    let wordArray=upperWord.split("");

    // console.log(wordArray);
    for(var i=0;i<wordArray.length;i+=2)
    {
           wordArray[i]=wordArray[i].toLowerCase();
    }

    newText=wordArray.join("");
    setText(newText);
    props.showAlert("Text has been alternated","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case has been coverted","success");
  }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase case has been coverted","success");


    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-2" onClick={handleAlternateClick}>Convert to Alternate Case</button>
         <button className="btn btn-primary mx-2" onClick={handleCopy}>Handle Copy</button>
         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>


    </div>

    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Text Summary</h2>
          <p>{text==="" ? 0:text.split(/[ ]+/).length} words,{text.length} characters</p>
          <p>{0.008 * text.split(" ").length } minutes taken</p>
          <h2>Preview</h2>
          <p>{text}</p>
    </div>
    </>
  )
}
