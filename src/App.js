import { Component } from 'react'

class App extends Component {

  state = {
    name: '',
    displayName: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitName = event => {
    event.preventDefault()
    this.setState({ displayName: this.state.name, name: '' })
  }

  render () {
    return (
      <>
        <h1>Name: {this.state.displayName}</h1>
        <form>
          <label htmlFor="name">name</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name}
            onChange={this.handleInputChange} />
          <button onClick={this.handleSubmitName}>Submit</button>
        </form>
      </>
    )
  }
}

export default App
