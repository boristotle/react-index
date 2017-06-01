import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './Button';

import axios from 'axios';

export default class App extends Component {

    constructor(){
        super();
            this.state = {
                puppies: []
            }
    }
    
    componentWillMount(){
        let self = this;
        axios.get('https://darrin-puppies-api.herokuapp.com/api/puppies')
        .then(function(result){
            console.log('puppies ', result.data);
            self.setState({puppies: result.data})
        })
    }
    

    addPuppy(e){
      e.preventDefault();
      let puppyObj = {};
       
      puppyObj.name = this._name.value;
      puppyObj.breed = this._breed.value;
      puppyObj.adjective = this._adjective.value;
       
      console.log(puppyObj);
       
      this.setState({puppies: this.state.puppies.concat([puppyObj])})
      document.getElementById('puppyForm').reset()
       
    }
    
    
    render(){

        this.puppiesList = this.state.puppies.map( (puppy, index) => { 
        return <li key={index}> {puppy.adjective} {puppy.name} ({puppy.breed})  </li> }) 

        return ( 
            <div>
                <h1> Welcome to the puppies app! </h1>
                
                 <div>
                    <ul>
                    {this.puppiesList}
                    </ul>
                </div>

                 <div> 
                    <form id="puppyForm" onSubmit={this.addPuppy.bind(this)}>
                        <p>Name: <input type="text" ref={(input) => this._name = input} /></p>
                        <p>Breed: <input type="text" ref={(input) => this._breed = input} /></p>
                        <p>Adjective: <input type="text" ref={(input) => this._adjective = input} /></p>
                        <button type="submit">Add Puppy</button>
                    </form>
                </div>
  
               
           
                
            </div>
        )
    }
}
