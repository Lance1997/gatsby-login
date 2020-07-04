import React from 'react'
import classes from './button.module.css'

export default function Button(props) {
    let generatedClasses = [classes.Button, classes.togglePassword ? props.id :null];

    const passwordChecker = (e) => {
        const passwordInput = document.getElementById('pass-label') ? document.getElementById('pass-label'): document.getElementById('new-pass-label');
        //const togglePasswordButton = document.getElementById('toggle-password');
        
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                e.target.textContent = 'Hide password';
                e.target.setAttribute('aria-label',
                'Hide password.');
            } else {
                passwordInput.type = 'password';
                e.target.textContent = 'Show password';
                e.target.setAttribute('aria-label',
                'Show password as plain text. ' +
                'Warning: this will display your password on the screen.');
            }
    }

    return (
        <button 
            style={props.style} 
            onClick={props.id ? passwordChecker: null} 
            id={props.id ? props.id : null} 
            className={generatedClasses.join(', ')} 
            type={props.type}
        >
            {props.text}
        </button>
    );
}