import React from "react";
import { Switch, Route } from 'react-router-dom';
import Game from "./Game";
// import './../index.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
