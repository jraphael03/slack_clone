import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          {/* Style everything inside of it */}
          <Header />
          <Main>
            <Sidebar />
            <Switch>
              <Route path="/room">
                <Chat /> {/* Chat Component */}
              </Route>
              <Route path="/">      {/* Login page will be main page */}
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;   
  display: grid;
  grid-template-rows: 38px auto;    // define height of rows Container 38px then Main auto     This is how we got the heights

`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto; // define width of columns Main 260px then Sidebar auto     This is how we got the widths
`;
