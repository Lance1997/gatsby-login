import React from "react"
import classes from './input.module.css'

export default function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            className={classes.Input} 
            name={props.name} 
            id = {props.id ? props.id: null}
            inputMode = {props.mode ? props.mode: null} 
            required = {props.required}
            autoComplete = {props.complete ? props.complete: null}
            minLength= {props.length ? props.length: null}
            aria-describedby= {props.ariaDescribedby ? props.ariaDescribedby: null}
        />
    );
}