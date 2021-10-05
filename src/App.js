import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
      </div>
        {/* feed */}
        {/* widget */}
    </div>
  );
}

export default App;
