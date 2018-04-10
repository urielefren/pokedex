import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonList} from '../actions/index';

class OptionsBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            disabledOpAtras: false,
            disabledOpSig: false
        };
        this._onAtras = this._onAtras.bind(this);
        this._onSiguiente = this._onSiguiente.bind(this);
    }

    _onAtras(event) {
        this.props.fetchPokemonList(this.props.previous);
    }

    _onSiguiente(event) {
        this.props.fetchPokemonList(this.props.next);
    }

    componentDidMount() {
        this.props.fetchPokemonList('');
    }

    render() {
        let spaceStyle = {
            "marginTop": 20
        };
        let pokeOptionsStyle = {
            "textAlign": "right"
        };
        return(
            <div>
                <div style={spaceStyle}>
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4" style={pokeOptionsStyle}>
                            <div className="btn-group" role="group">
                                <button type="button" onClick={this._onAtras} className="btn btn-secondary">Atrás</button>
                                <button type="button" onClick={this._onSiguiente} className="btn btn-secondary">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonList}, dispatch);
}

function mapStateToProps({ pokemons }) {
    console.log("bar: ", pokemons)
    let res = [];
    if(pokemons && pokemons.length > 0)
        res = pokemons[pokemons.length-1]
    return  {next: res.next, previous: res.previous};
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar)