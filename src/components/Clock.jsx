import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        
    }
    render() {
        return (
            <div className='zodiac'>
                <h1>Monsieur Vybz!</h1>
                <h2 className='h2'>Time is: {this.state.date.toLocaleTimeString()}.</h2>
                <h2 className='h2'>and the date is: {this.state.date.toLocaleDateString()}</h2>
                
            
                
            </div>
        );
    }
}
export default Clock;