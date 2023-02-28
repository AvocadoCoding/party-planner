import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Saved from './pages/Saved';
import ToDo from './pages/ToDoList';
import Guestlist from './pages/Guestlist';
import Invitation from './pages/Invitation';
import NavbarBootstrap from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <Router>
      <div style={{backgroundColor: '#FEE1C7'}}>
        {/* Navbar at top of page*/}
        <NavbarBootstrap />
        {/* Extra wrapper for page content if we want to use it*/}
        <Wrapper>
          {/* Page routing to pull in different page content*/}
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/favourites" element={<Saved/>} />
            <Route path="/todo-list" element={<ToDo/>} />
            <Route path="/guestlist" element={<Guestlist />} />
            <Route path="/invitations" element={<Invitation/>} />
          </Routes>
        </Wrapper>
        {/* Footer*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

