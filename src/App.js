import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Lab from './components/Lab'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path = "/lab" component = {Lab}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
