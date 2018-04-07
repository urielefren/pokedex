import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonList extends Component {
    render() {
        let pokeRows = [];
        for (var i = 0; i < this.props.pokeList; i++) {
            let pokeRow = this.state.pokeList[i];
            pokeRow.push(<li class="list-group-item" key={i}>{pokeRow.name}</li>);
        }
        return (
            <div>
                <h1>Pokemons de la generación solicitada</h1>
                <ul class="list-group">
                    {pokeRows}
                </ul>
            </div>
        );
    }

}

function mapStateToProps({ pokemons }) {
    return { pokemons };
}

export default connect(mapStateToProps)(PokemonList)