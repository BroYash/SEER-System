import React from "react";
import "./App.css";
import Nav from "./Nav";

import { Provider } from 'react-redux'
import store from './store'
//import axios from 'axios';
//import CommentSingle from './Comment/CommentSingle';
//import CommentForm from './Comment/CommentForm';
//import CommentList from './Comment/CommentList';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Nav></Nav>
      </Provider>
    </div>
  );
}

export default App;
