import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object) }

export default Pokedex;
