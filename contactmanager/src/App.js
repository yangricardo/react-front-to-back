import React, { Component } from "react";

import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import { Provider } from "./providers/Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
