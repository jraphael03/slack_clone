import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)      // Creates a promise
        .then((result) => {                 // .then (accepts the promise) when data is passed, result is the data of the user
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));      //Saves user to localstorage so you don't have to keep logging in
            props.setUser(newUser);     // Pass newUser to the state of the app (App.js)

            //console.log(newUser);                 // Will display the item you pulled in newUser function
            //console.log(result.user);           // Shows displayName, email, photoURL
        })          
        .catch((error) => {                            // .catch happens if no data is passed through (denied promise or no data)
            alert(error.message)
        })
    }

    return (
      <Container>
        <Content>
          <SlackImg src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
          <h1>Sign into Slack</h1>
          <SignInButton onClick={() => signIn()}>         {/* When button is clicked called signIn funciton */}
              Sign In With Google
          </SignInButton>
        </Content>
      </Container>
    );
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;     // Changes the div back to column instead of row
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
    height: 100px;

`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`