import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  );
}

export default App;
