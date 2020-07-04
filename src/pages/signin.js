import React from "react"
import Layout from "../components/layout"
import Button from '../components/button'
import Input from "../components/input"
import classes from './signin.module.css'

export default function Signin() {

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let email = document.getElementById('email-label').value;
    alert ("Thank you for signing in. Enjoy! "+ email);
    if (typeof window !== `undefined`) window.location.replace(`/`)
  }

  return (
    <Layout>
      <div id="signin">

        <h1 className={classes.Signin}>SIGN IN</h1>

        <form onSubmit={formSubmitHandler} className="form" method="POST">
          <div className="form-group">
            <label htmlFor="email-label">
              <span>Email</span> <br />
              <Input id="email-label" type="email" name="email" mode="email" required={true} placeholder="Enter Email here" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="pass-label">
              <span>Password</span> 
              <Button id="toggle-password" style={{marginBottom: `10px`, float: `right`}}  type="button" text="Show password"/>
              <br />
              <Input type="password" placeholder="Enter Password here" id="pass-label" name="current-password" complete="current-password" length="8" required={true} ariaDescribedby="password-constraints"/>
              <br />
              <div id="password-constraints" style={{color: `yellow`}}>Eight or more characters with a mix <br /> of letters, numbers and symbols.</div>
            </label>
          </div>
          <div>
            <Button style={{ height: `50px`, fontSize: `1.2rem`, width: `100%`}} type="submit" text="Sign In"/>
          </div>
        </form>
      </div>
    </Layout>
  );
}