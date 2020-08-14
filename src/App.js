import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, loggedIn} from './actions'


function App() {
  const counter = useSelector(state =>state.counterReducer)
  const isLogged = useSelector(state =>state.loggedReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>COUNTER: {counter} </h1>
      <button onClick={() => {dispatch(increment(3))}}>+</button>
      <button onClick={() => {dispatch(decrement(19))}}>-</button>
      <br/>
      <button onClick={() => {dispatch(loggedIn())}}>Log in &out</button>
      {isLogged &&
      <h3>This text only show if logged in</h3>}
    </div>
  );
}

export default App;
