import React, { Component } from "react";
import logo from "./logo.svg";

//styles
import "./App.scss";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default App;
