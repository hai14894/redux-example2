import React from 'react';
import {useSelector} from 'react-redux'


function App() {
  const counter = useSelector(state =>state.counterReducer)
  return (
    <div className="App">
      <h1>COUNTER: {counter} </h1>
    </div>
  );
}

export default App;
