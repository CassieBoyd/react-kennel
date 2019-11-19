import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'

    // class is an object
    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animalsArray) => {

            // Always update state with .setState, takes an object
            this.setState({
                animals: animalsArray
            })
        })
    }

    // Function definition
    render(){
        console.log("ANIMAL LIST: Render");

        // For each item render AnimalCard
        return(
            <div className="container-cards">

                {/* {} for vanilla JS within JSX */}
                {/* (animal => is item being looped through. AnimalCard is a function, return object */}
                {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
            </div>
        )
    }
}

export default AnimalList
