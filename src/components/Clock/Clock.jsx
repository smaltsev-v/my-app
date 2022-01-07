import React,  { Component } from 'react';
import './Clock.scss'
 
export default class Clock extends Component{
    state = {
        time: new Date().toLocaleDateString(),
    };

    intervalId = null;
    
    componentDidMount() {
        console.log('setintervalId');
        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000,
        );

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <div className="Clock__face">{this.state.time}</div>;
    }
}