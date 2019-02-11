import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
