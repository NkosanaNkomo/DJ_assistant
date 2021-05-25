import React, { Component } from 'react';

class Customers extends Component {
state = {
    loading: true,
    person: null
};


    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
        
    }
    render() {
        return (
            <div className="customers">
                {this.state.loading || !this.state.person ? (
                <div>loading...</div> 
                ) : (
            <div>
                <div><h1>{this.state.person.name.title}. {this.state.person.name.first}. {this.state.person.name.last}</h1></div>
                <img src={this.state.person.picture.large}/>
                <div><h1>Gig Location: {this.state.person.location.city}, {this.state.person.location.state}, {this.state.person.location.country}</h1></div>
                <div><h1>Age: {this.state.person.dob.age}</h1></div>
                <div><h1>Cell: {this.state.person.cell}</h1></div>
                <div><h1>Email: {this.state.person.email}</h1></div>
            </div>
                )}

            </div>
        );
    }
}

export default Customers;