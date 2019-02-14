import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { setAuthToken } from "./utils/auth";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
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
