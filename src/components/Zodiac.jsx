import React, { Component } from 'react';

class Zodiac extends Component {
    render() {
        return (
            <div>
                <h1 className='zodiac'>ZODIAC</h1>
                <img src={require('./images/zodiacDates.jpeg')} />
            </div>
        );
    }
}

export default Zodiac;