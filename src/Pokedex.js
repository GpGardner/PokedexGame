import React, { Component } from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'


class Pokedex extends Component {
    
    state = {};
    
    
  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }

    return (
        <div className='Pokedex'>
            {title}
            <h1>Pokedex!</h1>
            <h4>Total exp: {this.props.exp} </h4>
            <div className="Pokedex-cards">
                {this.props.pokemon.map((pokemon) => <Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.exp}/>)}
            </div>
        </div>
    )
  }
}

export default Pokedex;
