import React, {useState} from 'react'


export default function Textarea(props) {
    const clickedup = () =>{
        console.log("clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Turned to upper case","success")
        
    }
    const clickedlow = () =>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Turned to lower case","success")
    }
    const cleart = () =>{
      let newtext = "";
      setText(newtext);
      props.showAlert("Text cleared","success")
    }
    const copy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clip-board","success")
    }
    const changed = (event) =>{
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter text");
  return (

    <div className="container my-4">
        <h3 style={{color:(props.mode==="light"?"black":"white")}}>Enter Text here:</h3>
        <div className="form-group my-3">
        <textarea style={{background:(props.mode==="dark"?"black":"white"),color:(props.mode==="light"?"black":"white")}} className="form-control" id="myBox" value={text} rows="3" onChange={changed}></textarea>
    </div>
    <button className="btn btn-primary" onClick={clickedup}>Upper case</button>
    <button style={{marginLeft: 20}} className="btn btn-primary" onClick={clickedlow}>Lower case</button>
    <button style={{marginLeft: 20}} className="btn btn-primary" onClick={cleart}>Clear Text</button>
    <button style={{marginLeft: 20}} className="btn btn-primary" onClick={copy}>Copy</button>
    <br />
    <p>Total letters:{text.split(" ").length - 1}</p>
    <h3 style={{color:(props.mode==="light"?"black":"white")}}>Preview</h3>
    <h4 style={{color:(props.mode==="light"?"black":"white")}}>{text}</h4>
</div>
    
  )
}
