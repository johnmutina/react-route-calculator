import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Calculator extends Component {
    render() {
        let calcResult = obj => {
            console.log(obj);
            if (obj.operand === "add") {
                return Number(obj.firstNum) + Number(obj.secondNum);
            } else if (obj.operand === "divide") {
                return Number(obj.firstNum) / Number(obj.secondNum);
            } else if (obj.operand === "multiply") {
                return Number(obj.firstNum) * Number(obj.secondNum);
            } else if (obj.operand === "subtract") {
                return Number(obj.firstNum) - Number(obj.secondNum);
            } else {
                return <Redirect to="/" />;
            }
        };
        return (
            <div>
                <h2>Result:</h2>
                {calcResult(this.props.match.params)}
            </div>
        );
    }
}
