import { Component } from 'react'

class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    user: { }
  }
  
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogIn = event => {
    event.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.setState({ 
      user,
      username: '',
      email: '',
      password: ''
     })
  }

  render () {
    return (
      <>
        <form>
          <p>
            <label htmlFor="username">username</label>
            <input
              type="text" 
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="email">email</label>
            <input
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="password">password</label>
            <input
              type="password" 
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </p>
          <button onClick={this.handleLogIn}>Log In</button>
        </form>
        <div>
          <h1>Username: {this.state.user.username}</h1>
          <h1>Email: {this.state.user.email}</h1>
          <h1>Password: {this.state.user.password}</h1>
        </div>
      </>
    )
  }
}

export default App
