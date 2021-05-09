import React, { Component } from 'react';
import GenreCountry from './GenreCountry';
import MusicCharts from './MusicCharts';
import VirtualCrate from './VirtualCrate';

class Container extends Component {
    render() {
        return (
            <div>
            <MusicCharts />
            <VirtualCrate />
            <GenreCountry />  
            </div>
        );
    }
}

export default Container;