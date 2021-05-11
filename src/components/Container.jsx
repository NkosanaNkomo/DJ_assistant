import React, { Component } from 'react';
import Clock from './Clock';
import GenreCountry from './GenreCountry';
import Mixes from './Mixes';
import MusicCharts from './MusicCharts';
import VirtualCrate from './VirtualCrate';


class Container extends Component {
    render() {
        return (
            <div>
            {/* <MusicCharts /> */}
            <Clock />
            <VirtualCrate />
            <GenreCountry />  
            <Mixes />
            </div>
        );
    }
}

export default Container;