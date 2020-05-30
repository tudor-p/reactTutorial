import React, {Component} from 'react'
import Users from './Users'
import AddUser from './AddUser'

class App extends Component {
  
  state = {
    elements: [
      {name: "Tudor", age: 24, id: 1},
      {name: "John", age: 40, id: 2},
      {name: "Garry", age: 60, id: 3}
    ]
  }
  
  handleTest = e => {
    console.log(this.state.name)
  }
  
  // this function takes the state from AddUser as an argument and updates the 
  // state of the App component--
  addUser = user => { 
    user.id = Math.random() // this assigns a random id to a user, 

    // the difficulty here is that it is bad practice to just do elements.push(user).
    // therefore, one solution is to copy the state using the spread operator as below--
    let elements = [...this.state.elements, user]
    // and then to replace the state using the setState({})
    this.setState({
      elements: elements
    })
  }

  // this funciton deletes data (in state)
  deleteUser = id => {
    let elements = this.state.elements.filter(user => {
      return id !== user.id
    }) // filters the elements that have the same ID as the ones we clicked delete on. 

    this.setState({
      elements: elements
    })
  }

  // Lifecycle methods 
  componentDidMount() {
    console.log("Component mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <button onClick={this.handleTest}>Click me</button>
        {/*<Secondary name="Tudor Popescu" age="35"/> 
        You'll output the other react class instance, you can do this a lot of times, by copying it. A better method:*/
        }
        <Users deleteUser={this.deleteUser} elements={this.state.elements}/>
        <AddUser addUser={this.addUser}/> {/* adding a funciton as a prop*/}

      </div>
    );
  }
  
}

export default App

