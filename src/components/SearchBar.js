import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPokemonList} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { pokeSearch: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({pokeSearch: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchPokemonList(this.state.pokeSearch);
        this.setState({ pokeSearch: '' });
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="busca tu pokemon"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Poke Consulta</button>
                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPokemonList}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)