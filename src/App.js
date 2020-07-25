import React from 'react';
//import logo from './logo.svg';
import UserForm from './components/userForm'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'
import './App.css';

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
    <div>
       <UserForm/> 
    </div>
    </Provider>
  );
}

export default App;


