import React, {Component} from 'react'

class AddUser extends Component {
    state = { //start with the state set to null
        name: null, 
        age: null
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value  
            // the [] notation refers to the <input> id below-- 
            // this enables the app to recognise which input field corresponds to which state key
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state) 
        // When the the form is filled in  handleChange() updates the state of AddUser
        // When the the form is submitted, handleSubmit() passes the (updated) state of AddUser as an argument
        // inside the function addUser(), which has been passed through this line on App.js: 
        //<AddUser addUser={this.addUser} />
        //
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <label htmlFor="name">Name:</label>
                   <input type="text" id="name" onChange={this.handleChange} />
                   <label htmlFor="age">Age:</label>
                   <input type="text" id="age" onChange={this.handleChange} />
                   <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser