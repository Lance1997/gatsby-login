import React from 'react'
import {Link} from 'gatsby'
import Header from './header'
import classes from './layout.module.css'

const ListLink = props => (
    <li style={{display: `inline-block`, marginRight: `1rem`}}>
        <Link activeClassName="activeClass" to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({children}) {
    return (
        <div className={classes.Layout}>
            {/* OutPut Component code here */}
            {children}
            <header>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <Header/>
                </Link>

                {/* Page Links */}
                <nav>
                    <ul className={classes.Navbar}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/signin">Sign In</ListLink>
                        <ListLink to="/signup">Sign Up</ListLink>
                    </ul>
                </nav>
            </header>
        </div>
    );
}