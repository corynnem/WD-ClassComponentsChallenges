import React, {Component} from 'react'
import { Input } from 'reactstrap'


class SearchIndex extends Component {
  constructor(){
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      currentValue : {
        value: [],

      }
    }
  }


  searchFunction(searchTerm){
    let thingArray = []
    this.setState({currentValue: {
      value: []
    }})
   
     for(let thing of  this.state.things) {
       if(thing.includes(searchTerm)){
       
         thingArray.push(thing)
   
         this.setState({currentValue : {
           value: thingArray
         }})
       }
     }
  }

  render(){
    return(
      <div>
          <Input placeholder='search here!' onChange={(searchTerm) => { let search = searchTerm.target.value; this.searchFunction(search)}}/>

         { this.state.currentValue.value.map((thing, index) => {
        return  <ul>
            <li class='thing'>{thing}</li>
          </ul>
          })}
      </div>
    )
  }
}

export default SearchIndex;





















// import React from 'react';
// import {Input} from 'reactstrap';
 
// const SearchIndex extends Component() {
  
//    this.state = {
     
//    }
//  }

//  function searchFunction() {
//  }

//  render() {
//    return(
//      <div>
//        <Input placeholder='Search Here' />
//        <h3>Results:</h3>
//      </div>
//    )
//  }

 
// export default SearchIndex;
