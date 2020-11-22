import React from 'react';
import axios from "axios";

class Compose extends React.Component {
    state = {
        title: '',
        content: '',
        posts: []
    };

    // componentDidMount = () => {
    //     this.getBlogPost();
    // };

    // getBlogPost = () => {
    //     axios.get('/api/posts')
    //         .then((response) => {
    //             Post.findOne({ _id: requestedPostId }, function (err, post) {
    //                 res.render("post", {
    //                     title: post.title,
    //                     content: post.content
    //                 });
    //             });
    //         })
    //         .catch(() => {
    //             alert('Error retrieving data.')
    //         });
    // }

    componentDidMount = () => {
        this.getBlogPost();
    };

    getBlogPost = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data })
                console.log('Data has been received.')
            })
            .catch(() => {
                alert('Error retrieving data.')
            });
    }

    getBlogPost = () => {
        axios({
            url: '/api',
            method: 'GET'
        })
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data })
                console.log('Data has been received.')
            })
            .catch(() => {
                alert('Error retrieving data.')
            });
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            content: this.state.content
        }

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
        })
        .catch(() => {
            console.log('Internal server error');//HERE'S The problem
        });
    }

    resetUserInputs = () => {
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {

        console.log('State: ', this.state);

        return(
            <div className="container">
                <h1>Compose</h1>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        <label>Post</label>
                        <textarea className="form-control" name="content" rows="5" cols="30" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" name="button">Publish</button>
                </form>
            </div>
        )
    }
}

export default Compose;