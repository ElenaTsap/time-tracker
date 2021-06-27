import React, { Component } from "react";
import Switch from "react-switch";

export default class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
        <div>
            <Switch 
                onChange={this.handleChange} 
                checked={this.state.checked} 
                offColor="#fff"
                onColor="#fff"
                offHandleColor="#3c038c"
                onHandleColor="#e1c13b"
                uncheckedIcon="false"
                checkedIcon="false"
                height="24"
                width="40"
            />
        </div>
        );
    }
}