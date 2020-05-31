import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount () {
        const request = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            this.setState({
                posts: data.slice(0,5)
            })
        }

        request()
    }

    render() {
        const { posts } = this.state
       
        const postList = posts.length ? posts.map(post => {
            return (
                <div className="Something" key={post.id}>
                    <Link to={'/' + post.id}><h4>{post.title}</h4></Link>
                    <p>{post.body}</p>
                </div>
            )
        }) : null

        return (
            <div className="Home">
                <h4>This is the home page</h4>
                <p>LAnim officia esse quis amet veniam amet nisi exercitation irure. Eiusmod eu eiusmod exercitation pariatur labore est commodo sit. Ea eu aliquip ipsum dolor. Commodo sint laborum aute commodo labore enim.</p>
                {postList}
            </div>              
        )
    }
    
}

export default Home 
