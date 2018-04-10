import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonList.css';
import pokeball from '../assets/pokeball.png';
import {fetchPokemonData} from '../actions/index';
import {bindActionCreators} from 'redux';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this._onSelectedPokemon = this._onSelectedPokemon.bind(this);
    }

    _onSelectedPokemon(url) {
        console.log("Url: ",url);
        this.props.fetchPokemonData(url);
    }

    render() {
        let pokeRows = [];
        if (this.props.pokemons && this.props.pokemons.results) {
            var pokeListRowStyle = {
                "textAlign": "left"
            };
            for (var i = 0; i < this.props.pokemons.results.length; i++) {
                let pokeRow = this.props.pokemons.results[i];
                pokeRows.push(
                    <li onClick={e => { this._onSelectedPokemon(pokeRow.url) }} data-toggle="modal" data-target="#exampleModalCenter" className="list-group-item list-group-item-action" key={i}>
                        <div className="row">
                            <div className="col-1">
                                <img src={pokeball} className="poke-icon" alt=""/>
                            </div>
                            <div className="col-11" style={pokeListRowStyle} >
                                <p>{pokeRow.name}</p>
                            </div>
                        </div>
                    </li>
                );
            }
        }
        let spaceStyle = {
            "marginTop": 20
        };

        let modal = [];
        if (this.props.currentPokemon) {
            modal.push(
                <div className="modal-content" key={'poke-' + this.props.currentPokemon.name}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{this.props.currentPokemon.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={this.props.currentPokemon.sprites.front_default} className="poke-photo" alt="" />
                    </div>
                </div>
            );
        }
        return (
            <div style={spaceStyle}>
                <ul className="list-group">
                    <li className="list-group-item active">Pokemons de la generación solicitada</li>
                    {pokeRows}
                </ul>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        {modal}
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    let { pokemons } = state;
        console.log("Pokemons: ", pokemons)
    let res = {
        currentPokemon: undefined,
        pokemons: undefined
    };
    pokemons.forEach(element => {
        if (element.forms) {
            console.log("pokemon info:", pokemons[0])
            res.currentPokemon = element
        } else {
            res.pokemons = element;
        }
    });
    return  res;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)