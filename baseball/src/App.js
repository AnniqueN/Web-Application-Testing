import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Display/>
    </div>
  );
}

export default App;