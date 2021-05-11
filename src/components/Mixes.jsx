import React, { Component } from 'react';
import ReactPlayer from "react-player";

class Mixes extends Component {
    render() {
        return (
            <div className='mixes'>
                 <div>
                 <h1>Mix Highlight</h1>
      <ReactPlayer
        url="https://soundcloud.com/danger-vybz/africaniism-zim-independence-2021-live-mix"
      />
      {/* <ReactPlayer
        url="https://soundcloud.com/danger-vybz/africaniism-live-mix-3621"
        /> */}
    </div>
    
                
            </div>
        );
    }
}

export default Mixes;