import React, { Component } from 'react';
import './Pokecard.css'

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

class Pokecard extends Component {
    state = {  }

    calculateImg(id){
        if(id > 99){
            return id;
        } else if(id>9 && id<100 ){
            return `0${id}`
        } else {
            return `00${id}`
        }
    }

    render() { 
        const props = this.props;
        const imgSrc = `${POKE_API}${this.calculateImg(props.id)}.png`
        return ( 
            <div className="Pokecard">
                <h2 className="Pokecard-name">{props.name}</h2>
                <div className='Pokecard-img'>
                    <img className="" src={imgSrc} alt={props.name}/>
                </div>
                <div className="Pokecard-data">Type: {props.type}</div>
                <div className="Pokecard-data">Exp: {props.exp}</div>
            </div>
         );
    }
}
 
export default Pokecard;