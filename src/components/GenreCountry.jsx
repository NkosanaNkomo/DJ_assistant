import React, { Component } from 'react';
import genreList from './genreList'

class GenreCountry extends Component {
glist = () => {
    console.log(genreList.name);
    console.log(genreList.origin);
}



    render() {
        return (
            <div>
                <h1>Genre by Country</h1>
                
            </div>
        );
    }
}

export default GenreCountry;