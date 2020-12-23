import { Component } from 'react'
import Button from './components/Button'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleCountReset = () => {
    this.setState({ count: 0 })
  }

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <Button
          label='+' 
          handleBtnClick={this.handleIncrementCount} />
        <Button
          label='-' 
          handleBtnClick={this.handleDecrementCount} />
        <Button
          label='RESET' 
          handleBtnClick={this.handleCountReset} />
      </div>
    )
  }
}

export default App
