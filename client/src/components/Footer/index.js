import React, { Component } from "react";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        Copyright &copy; {new Date().getFullYear()} Ride My Way
      </footer>
    );
  }
}
