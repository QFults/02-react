import { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    name: '',
    pokemon: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchPokemon = event => {
    event.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(({ data: pokemon }) => {
        this.setState({ 
          pokemon,
          name: ''
        })
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(({ data: pokemon }) => {
        this.setState({ pokemon })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">name</label>
          <input 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <button onClick={this.handleSearchPokemon}>Search Pokemon</button>
        </form>
        <h1>Pokemon</h1>
        <hr/>
        <h1>Name: {this.state.pokemon.name}</h1>
        <h2>Height: {this.state.pokemon.height}</h2>
        <h3>Weight: {this.state.pokemon.weight}</h3>
      </>
    )
  }
}

export default App
