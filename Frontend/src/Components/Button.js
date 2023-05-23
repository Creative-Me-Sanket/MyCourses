import React,{useState,useEffect} from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick||null} style={props.style} className={props.className}>{props.name}</button>
    )
}

export default Button;
