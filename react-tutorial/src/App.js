import React, {Component} from 'react'
import Secondary from './Secondary'

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
  
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <button onClick={this.handleTest}>Click me</button>
        {/*<Secondary name="Tudor Popescu" age="35"/> 
        You'll output the other react class instance, you can do this a lot of times, by copying it. A better method:*/
        }
        <Secondary elements={this.state.elements}/>


      </div>
    );
  }
  
}

export default App
