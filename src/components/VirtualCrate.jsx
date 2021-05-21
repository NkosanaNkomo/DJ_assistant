import React, { Component } from 'react';

class VirtualCrate extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            list:[]
        }
    }

    changeUserInput=(input)=>{
        this.setState({
            userInput: input
        }, 
        ()=> console.log(input)
       
        )
    }

    
    addToList=(input)=>{
        
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
            <div className='virtualCrate'>
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
               <button onClick={()=>this.addToList(this.state.userInput)} >Add to TO GET List</button>
                

                <ol>
                    {this.state.list.map((itemInTheList,i)=>{
                       return <h2 className='h2'><li>{itemInTheList}</li></h2>
                    })}
                </ol>
            </div>
        );
    }
}

export default VirtualCrate;