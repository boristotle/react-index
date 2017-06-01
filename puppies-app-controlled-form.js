import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

    constructor(){
        super();
            this.state = {
                puppies: [],
                puppyInProgress: {name: '', breed: '', adjective: ''}
            }
    }
    

    addPuppy(){

    }

    handleNameChange(event){
        let that = this;
        this.setState({ puppyInProgress: {name: event.target.value } })
        setTimeout(() => {
            console.log('state', that.state);
        }, 1000)
    }
    
    
    render(){

        return ( 
            <div>
                <h1> Welcome to the puppies app! </h1>
                
                 <div>
                    <ul>
                    <li>Puppy 1</li>
                    <li>Puppy 2</li>
                    </ul>
                </div>

                 <div> 
                    <form id="puppyForm">
                        <p>Name: <input onChange={this.handleNameChange.bind(this)} type="text" value={this.state.puppyInProgress.name} ref={(input) => this._name = input} /></p>
                        <p>Breed: <input type="text" value={this.state.puppyInProgress.breed} ref={(input) => this._breed = input} /></p>
                        <p>Adjective: <input type="text" value={this.state.puppyInProgress.adjective} ref={(input) => this._adjective = input} /></p>
                        <button type="submit">Add Puppy</button>
                    </form>
                </div>
  
               
           
                
            </div>
        )
    }
}
