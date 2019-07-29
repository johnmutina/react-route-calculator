import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Calculator from "./Calculator";
import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Calculator</h1>
                <Switch>
                    <Route
                        exact
                        path="/:operand/:firstNum/:secondNum"
                        render={routeProps => <Calculator {...routeProps} />}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}
