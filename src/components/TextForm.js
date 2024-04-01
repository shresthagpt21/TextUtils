import React, { useState} from 'react'


export default function TextForm(props) {
   
const [text, setText] = useState('');
// setText("Some text ");
const handleUpClick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
}
const handleLoClick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");

}
const handleOnChange=(event)=>{
    // console.log("Onchange was clicked");
    setText(event.target.value);
    // props.showAlert("Converted to Upper Case","success");

}
const handleCopy=()=>{
    // const text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");

}
const handleReverse=()=>{
    let newText=text;
    // console.log(newText);
    let arrWords=newText.split(' ')
    newText="";
    arrWords.forEach((word)=>{
        newText=word+" "+newText;
    })
    
    setText(newText);
    props.showAlert("Text Reversed","success");


}
  return (
    <>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor:props.mode==='light'?'white':'#343137',
                color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LoweCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverse}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview here"}</p>
    </div>
    </>
  )
}
