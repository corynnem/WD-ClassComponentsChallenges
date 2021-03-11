import React, { Component } from 'react'


class DogIndex extends Component {
    constructor(){ 
        super()
        this.state = {
            dogURL: '',
        }
    }

    fetchDog(){
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
        }).then(json => json.json())
        .then(json => this.setState({dogURL: json.message}))
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div>   
                <img style={{marginBottom: '1vh'}} src={this.state.dogURL === '' ? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LsaLSjPilI7IWqujwAFw5AHaEK%26pid%3DApi&f=1' : this.state.dogURL}></img>
             <button onClick={() => this.fetchDog()}>Get a dog!</button>
            </div>
        )
    }
}

export default DogIndex;