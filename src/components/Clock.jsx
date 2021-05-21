import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        
    }


//This happens when the component mounts and the setInterval function gets called with a call back function updateClock()
componentDidMount() {
    this.intervalID = setInterval(() =>
    this.updateClock(),
    1000
    );}
    
    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount(){
    clearInterval(this.intervalID)
    }
    
    //This function set the state of the time to a new time
    updateClock(){
    this.setState({
    time: new Date().toLocaleTimeString()
    });
    }
    render() {
    return (
    <div className="clock">
         <p> The time is: {this.state.time}</p>
    </div>
    );}
    }
    export default Clock;