import React, { Component } from "react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import store from "./store";
import { setAuthToken } from "./utils/auth";
import AppRoutes from "./routes/AppRoutes";
import { setCurrentUser } from "./actions/loginActions";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
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
