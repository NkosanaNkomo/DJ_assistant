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
                <h2 className='h2'>It is {this.state.date.toLocaleString()}.</h2>
                
            
                
            </div>
        );
    }
}
export default Clock;