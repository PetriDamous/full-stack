import React, { Component } from "react";

import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Header headerTxt="My balls is on fire!!!!" />;
  }
}

export default App;
