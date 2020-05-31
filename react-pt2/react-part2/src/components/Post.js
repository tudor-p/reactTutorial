import React , {Component} from 'react'

class Post extends Component {
    
    state = {
        post: null
    }

    componentDidMount () {

        let id = this.props.match.params.post_id

        const request = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts/" + id)
            const data = await response.json()
            this.setState({
                post: data
            })
            console.log(this.state)
        }

        request()
    }
    
    render() {

        const post = this.state.post ? (
            (
                <div className="post-content">
                    <h4>{this.state.post.title}</h4>
                    <p>{this.state.post.body}</p>
                </div>
            )
        ) : (<div> No posts yet </div>)

        return (
            <div>
            {post}
            </div>
        )

    }
}

export default Post