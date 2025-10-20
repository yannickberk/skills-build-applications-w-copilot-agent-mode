
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const octofitLogo = process.env.PUBLIC_URL + '/octofitapp-small.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-6 mb-2">Octofit Tracker</h1>
      </header>
  <Navbar bg="primary" variant="dark" expand="md" className="mb-4 rounded navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={octofitLogo} alt="Octofit Tracker Logo" width="30" height="30" className="d-inline-block align-top me-2" />
            Octofit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="octofit-navbar-nav" />
          <Navbar.Collapse id="octofit-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center mt-5"><h2 className="display-6">Welcome to Octofit Tracker!</h2></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
