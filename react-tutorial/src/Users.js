import React, {Component} from 'react'

const Users = ({elements, deleteUser}) => { //destructuring can be done in the argument paratheses (which are compulsory)
    
    // const {elements} = props // This is the destructuring made in the previous example
    // notice how render () is no longer used 
    const elementsList = elements.map(item => {
        if (item.age > 40) { // you can throw in conditionals as well
            return (
                <section className="list" key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <div>Id: {item.id}</div>
                    <button onClick={() => {deleteUser(item.id)}}>Delete User</button> 
                    {/* you wrap deleteUSer in an annonymous arrow function so that it doesn't fire straight away*/}
                </section>
            )
        } else return null
    })

    return (
        <div>
            {elementsList}
        </div>
    )

}




/* this used to be a class component but since it is stateless (doesn't have a state), it is good practice to turn it into a functional component—
written as a function. Below is the previous way of writing this as a class 

class Secondary extends Component { 
    
    render () {
        // use destructuring to assign values, also shorten the code (so you don't have to write this.props... everywhere)
        const {elements} = this.props
        const elementsList = elements.map(item => {
            return (
                <section className="list" key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <div>Id: {item.id}</div>
                </section>
            )
        })

        return (
            <div>
                {elementsList}
            </div>
        )

    } 
}
*/
        

export default Users