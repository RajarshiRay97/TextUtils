import React, {useState} from 'react';

export default function TextForm(props) {
    document.title = "TextUtils - Home";
    // Declare a new state variable named 'text' and assign it's initial value using useState() method. When we reassign/update the state variable 'text' by calling setText function, the state of the component is changed
    const [text,setText] = useState("");

    // to change text in textarea tag
    const changeValueOfTA = (event) => {
        setText(event.target.value);          // to update the value of state variable 'text' and we change the state of the component
    }

    // to convert the text in uppercase
    const updateTextToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Content is Updated to Upper Case.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }

    // to convert the text in lowercase
    const updateTextToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Content is Updated to Lower Case.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }

    // to convert the text in capitalized case
    const updateTextToCapitalize = () =>{
        let textArr = text.split(" ");
        for (let i=0;i<textArr.length;i++)
        {
            let newWord = "";
            let oldWord = textArr[i];
            for (let j=0;j<oldWord.length;j++)
            {
                if (j === 0) newWord += oldWord[j].toUpperCase();
                else newWord += oldWord[j].toLowerCase();
            }
            textArr[i] = newWord;
        }
        setText(textArr.join(" "));
        props.alert("Content is Updated to Capitalized Case.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }

    // to remove extra space from the text
    const removeExtraSpace = ()=>{
        let textArr = text.split(/[ ]+/);
        setText(textArr.join(" "));
        props.alert("Extra space has been removed from the content.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }

    // to copy text into clipboard
    const copyText = (event)=>{
        navigator.clipboard.writeText(text);
        props.alert("Content copied to clipboard.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }
    
    // to clear the entered text in textarea
    const clearText = () =>{
        setText("");
        props.alert("Content has been cleared.","success","showMessage");
        setTimeout(()=>{
            props.closeAlert();
        },2000);
    }

    const testEmpty = ()=>{
        if (text === "") return true;
        else return false;
    }
    const testWhiteSpace = () =>{
        for(let i=0;i<text.length;i++){
            if (text[i] !== " ") return false;
        }
        return true;
    }

    
    return (
        <>
            <div className={"container "+props.customizeClass} style={{padding: "10px 40px"}}>
                <div style={{display: "flex",justifyContent:"space-between",alignItems: "center"}}>
                <h2 className="my-3" style={{marginRight: "10px"}}>{props.heading}</h2>
                <button type="button" title="Copy to Clipboard" className="btn btn-outline-primary btn-sm" onClick={copyText} style={{position:"relative",top:"12px",right:"3px"}}>Copy</button>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} rows="6" placeholder="Type or paste your content here..." onChange={changeValueOfTA}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={updateTextToUpper}>Upper Case</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={updateTextToLower}>Lower Case</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={updateTextToCapitalize}>Capitalized Case</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button type="button" className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear</button>

                <h3 className="my-4">Your Text Summary</h3>
                <p>{testWhiteSpace()?0:(/[ ]+$/.test(text) && /^[ ]+/.test(text)?text.split(/[ ]+/).length-2:(/[ ]+$/.test(text) || /^[ ]+/.test(text)?text.split(/[ ]+/).length-1:text.split(/[ ]+/).length))} Words | {testEmpty()?0:text.length} Characters | {testEmpty()?0:(text.endsWith("\n")?text.split("\n").length-1:text.split("\n").length)} Lines</p>
                <p>
                    <small className="text-muted"><i>Content can be read in {(0.008 * (testWhiteSpace()?0:(text.endsWith(" ")?text.split(" ").length-1:text.split(" ").length))).toFixed(2)} minutes</i></small>
                </p>

                <hr/>

                <h3>Preview</h3>
                <p style={{textAlign: "justify"}}>{!text?"No text is available to display.":text}</p>
            </div>
        </>
    );
}
