import React, {useState} from 'react'

export default function Form(props) {
    const clear = ()=> {
        let newtext = text.substr(0, -1);
        setText(newtext);
    }
    const copy = ()=> {
        navigator.clipboard.writeText(text)
    }
    const upper = ()=> {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const capitalize = ()=> {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newtext);
    }
    const remove_space = (event)=> {
        let newtext = text.split(' ').filter(s => s).join(' ');
        setText(newtext);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState();
    return (
        <div>
            <form>
            <div className="form-group container p-4">
                <h1>TextUtyls</h1>
                <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
                <textarea className="thetext form-control mb-4" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
                <button type="button" onClick={clear} className="btn m-2 btn-primary">Clear Text</button>
                <button type="button" onClick={copy} className="btn m-2 btn-primary">Copy Text</button>
                <button type="button" onClick={upper} className="btn m-2 btn-primary">Upper Text</button>
                <button type="button" onClick={capitalize} className="btn m-2 btn-primary">Capitalize Text</button>
                <button type="button" onClick={remove_space} className="btn m-2 btn-primary">Remove Extra Spaces</button>
            </div>
            </form>
        </div>
    )
}
