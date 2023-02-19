import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Saved from './pages/Saved';
import ToDo from './pages/ToDoList';
import Guestlist from './pages/Guestlist';
import NavbarBootstrap from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <Router>
      <div>
        {/* Navbar at top of page*/}
        <NavbarBootstrap />
        {/* Extra wrapper for page content if we want to use it*/}
        <Wrapper>
          {/* Page routing to pull in different page content*/}
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/saved-ideas" element={<Saved/>} />
            <Route path="/todo-list" element={<ToDo/>} />
            <Route path="/guestlist" element={<Guestlist/>} />
          </Routes>
        </Wrapper>
        {/* Footer*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

