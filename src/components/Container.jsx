import React, { Component } from 'react';
import Clock from './Clock';
import GenreCountry from './GenreCountry';
import Mixes from './Mixes';
import MusicCharts from './MusicCharts';
import VirtualCrate from './VirtualCrate';
import Zodiac from './Zodiac';
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Checklist from './Checklist';




class Container extends Component {
    render() {
        return (
          
            <Router>
            <div className='container'>
            <Navbar />
           <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/clock" component={Clock}/>
            <Route path="/todolist" component={VirtualCrate}/>
            <Route path="/musiccharts" component={MusicCharts}/>
            <Route path="/zodiac" component={Zodiac}/>
            <Route path="/mixes" component={Mixes}/>
            {/* <Route path="/genrebycountry" component={GenreCountry}/> */}
            {/* <Route path="/checklist" component={Checklist}/> */}
            </Switch>

            
           
           
            </div>
            </Router>
        );
    }
}

const Home = ()=> (
    <div>
      <h1>Home</h1>
    </div>
  )

export default Container;