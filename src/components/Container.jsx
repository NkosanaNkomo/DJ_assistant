import React, { Component } from 'react';
import Clock from './Clock';
import GenreCountry from './GenreCountry';
import Mixes from './Mixes';
import MusicCharts from './MusicCharts';
import VirtualCrate from './VirtualCrate';
import Zodiac from './Zodiac';


class Container extends Component {
    render() {
        return (
            <div className='container'>
            {/* <MusicCharts /> */}
            <Clock />
            {/* <Zodiac /> */}
            <VirtualCrate />
            {/* <GenreCountry />   */}
            <Mixes />
            
            </div>
        );
    }
}

export default Container;