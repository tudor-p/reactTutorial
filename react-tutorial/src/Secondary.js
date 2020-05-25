import React, {Component} from 'react'

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

export default Secondary