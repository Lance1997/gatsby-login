import React from 'react'
import {Link} from 'gatsby'

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </ul>
        </div>
    );
}