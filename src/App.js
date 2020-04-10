import React from 'react';
import './App.css';
import './styles.css';
import { connect } from 'react-redux';
import { setInput, addInput } from './Store/Actions/todosActions';

function App(props) {
  console.log(props)
  console.log(props.todo.todo)
  return (
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <input type='type' value={props.todo.text} onChange={props.handlerChange} placeholder="type here"
        className="input_field"></input>
      <button onClick={() => { props.add(props.todo.text) }} className="button">Add Todo</button>
      {props.todoArray.map((el, id) => {
        return <li className="todo" key={id}>{el.inputValue}</li>
      })}
    </div>
  );

}


const mapStateToProps = (state) => {
  return {
    ...state,
    todoArray: state.todo.todo

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChange: (event) => { dispatch(setInput(event.target.value)) },
    add: (input) => {
      let obj = { inputValue: input, id: Math.floor(Math.random) * 1000 }
      dispatch(addInput(obj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
