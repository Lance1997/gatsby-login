import React from "react"
import Layout from "../components/layout"
import Button from '../components/button'
import Input from "../components/input"
// import { graphql } from 'gatsby'
import classes from './signup.module.css'

export default function Signup({data}) {

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let email = document.getElementById('email-label').value;
    alert ("Thank you for signing up. Enjoy! "+ email);
    if (typeof window !== `undefined`) window.location.replace(`/`)
  }

  return (
    <Layout>
      {/* {data.site.siteMetadata.title} */}
      <div>
        <h1 className={classes.Signup}>SIGN UP</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <div className="form-group">
            <label htmlFor="new-email-label">
              <span>Email</span> <br />
              <Input id="new-email-label" type="email" name="email" mode="email" required={true} placeholder="Enter Email here" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="new-pass-label">
              <span>Password</span> 
              <Button id="toggle-password" style={{marginBottom: `10px`, float: `right`}}  type="button" text="Show password" />
              <br />
              <Input type="password" placeholder="Enter Password here" id="new-pass-label" name="new-password" complete="new-password" length="8" required={true} ariaDescribedby="password-constraints" />
              <br />
              <div id="password-constraints" style={{color: `yellow`}}>Eight or more characters with a mix <br /> of letters, numbers and symbols.</div>
            </label>
          </div>

          <div className="form-group" style={{marginTop: `5px`}}>
            <label htmlFor="new-pass-confirm-label">
              <span>Confirm Password</span><br />
              <Input type="password" placeholder="Confirm Password" id="new-pass-confirm-label" name="new-password-confirmation" length="8" required={true}/>
              <br />
            </label>
          </div>
          <div>
            <Button style={{ height: `50px`, fontSize: `1.2rem`, width: `100%`}} type="submit" text="Sign Up"/>
          </div>
        </form>
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `