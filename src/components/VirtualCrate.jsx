import React, { Component } from 'react';

class VirtualCrate extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            list:[]
        }
    }
// grabs the user input and sends it into state
    changeUserInput=(input)=>{
        this.setState({
            userInput: input
        }, 
        ()=> console.log(input)
       
        )
    }

    // take the user input form state and add to the list
    addToList=(input)=>{
        // need a variable to act as the list in state
        let listArray = this.state.list

        listArray.push(input)

        this.setState({
            list: listArray,
            userInput:''

        }
        )


    }
    render() {
        return (
            <div>
                <h1>Virtual To Get list</h1>
                <input 
                type="text" 
                value={this.state.userInput} 
                onChange={
                    (event)=>{
                        this.changeUserInput(event.target.value)

                    }

                }
                />
                <button onClick={()=>this.addToList(this.state.userInput)} >Add to get list</button>
                

                <ul>
                    {this.state.list.map((itemInTheList,i)=>{
                       return <h2 className='h2'><li>{itemInTheList}</li></h2>
                    })}
                </ul>
            </div>
        );
    }
}

export default VirtualCrate;