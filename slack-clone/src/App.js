import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { useEffect, useState } from "react";
import { auth, provider } from './firebase';

function App() {
  const [rooms, setRooms] = useState([]);

  // Used for storing login
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));     // parse converts from a string back to an object, keeps you logged in from Login.js

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      // Real time database, GET
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);                      // removes user from localStorage and state
    })
  }

  useEffect(() => {
    getChannels();
  }, []);

  console.log("User in App State", user);

  console.log(rooms);

  return (
    <div className="App">
      <Router>
        {!user ? (          // If there is no user send to Login page else everything else
          <Login setUser={setUser} />
        ) : (
          <Container>         {/* Style everything inside of it */}
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} /> {/* Chat Component */}
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto; // define height of rows Container 38px then Main auto     This is how we got the heights
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto; // define width of columns Main 260px then Sidebar auto     This is how we got the widths
`
