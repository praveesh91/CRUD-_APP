import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import todos from "./components/todos";
import NotFound from "./components/notFound";
import userTodo from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import "antd/dist/antd.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userTodo, composeEnhancer(applyMiddleware(thunk)));

class RootContainerComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={todos} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

let RootContainer = connect()(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
