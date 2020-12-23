import { Component } from 'react'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrementCount = () => {
    this.setState({ count: this.state.count + 1})
  }

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrementCount}>Click Me</button>
      </div>
    )
  }
}

export default App
