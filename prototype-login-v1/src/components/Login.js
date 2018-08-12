import React, { Component } from 'react';
import $ from "jquery";
import '../App.css';
import firebase from 'firebase';
import { Link } from 'react-router-dom';



const login = (e) => {
    e.preventDefault();
    const userEmail = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode+' :: '+ errorMessage);

        // ...
    });
}

class Login extends Component {
  render() {
    return (
        <form>
            <div className="form-group login-box border-primary rounded shadow-lg">
                <div>
                    <input type="email" id="user" placeholder="Email address..." className="form-control label"/>
                </div>

                <div>
                    <input type="password" id="password" placeholder="password..." className="form-control label"/>
                </div>

                <div className="login-btn">

                    <button  onClick={login} type="button" className="btn btn-block btn-primary">
                        Submit
                    </button>
                </div>

            </div>
        </form>

    );
  }
}

export default Login;
