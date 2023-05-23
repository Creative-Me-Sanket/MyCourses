import React from 'react'
function TextInput(props) {
    return (
        <div style={props.containerStyle||null} className={props.containerClassName||"input-group mb-3"}>
            <label htmlFor={props.name} style={{fontSize:'18px'}} className="form-label">{props.label}</label>
            <input style={props.inputStyle||null} value={props.value||""} type={props.type||"text"} placeholder={props.placeholder||""} onChange={props.onChange||null} className="form-control" id={props.name} aria-describedby={props.name+"help"}/>
            {props.helpText?
                <div id={props.name+"help"}  style={props.helperTextStyle||null} className="form-text">{props.helpText}</div>
            :null}
        </div>
    )
}

export default TextInput
