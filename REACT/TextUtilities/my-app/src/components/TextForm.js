import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here🫡");
    const handleUpCLick = () => {
        console.log("CONVERTED" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handledownCLick = () => {
        console.log("CONVERTED" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const HandleONchange = (event) => {
        console.log("Changed");
        setText(event.target.value);

    }
    const handleClear = () => {
        let newText='';
        setText(newText);

    }
    const toTitleCase = (text) => {
        if (typeof text !== "string") return "";
    
        return text
            .split("\n")
            .map(line =>
                line
                    .toLowerCase()
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
            )
            .join("\n");
    };
    
    const handleTitleClick = () => {
        let newText = toTitleCase(text);  // `text` should be a string
        setText(newText);
    };
    

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={HandleONchange} id="MYBOX" rows="3"></textarea>

                </div>
                <button className="btn btn-primary " onClick={handleUpCLick}>Convert to uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handledownCLick}>Convert to lowercase </button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text </button>
                <button className="btn btn-primary mx-2" onClick={handleTitleClick}>TitleCase </button>
                

            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length.toFixed(2)} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div></>

    )
}
