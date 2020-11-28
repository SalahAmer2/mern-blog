import React from 'react';

import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCurrentBlogPosts } from "../redux/blogData/blogData.actions";
import { deleteSingleBlogPost } from "../redux/blogData/blogData.actions";

class Home extends React.Component {

    componentDidMount = () => {
        this.getBlogPost();
    };

    getBlogPost = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.props.fetchCurrentBlogPosts_Action(
                    data
                )
                console.log(data)
                console.log('Data has been received.')
            })
            .catch(() => {
                alert('Error retrieving data.')
            });
    }

    handleDelete = (postId) => {
        axios.delete(`/api/post/${postId}/delete`)
            .then((response) => {
                // const data = response.data;
                console.log(response);
                this.props.deleteSingleBlogPost_Action(postId);
            })
            .catch((err) => {
                console.log('error: ' + err);
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <p>
                    This is a MERN Stack Blog Website.
                    You can add posts through the /compose path <strong><Link to={'/compose'}>here</Link></strong>.
                    Posts are persistent since they are stored in the database.
                    You can also click on "Read More" to see individual posts.
                    You can delete posts with the "Delete" button as well.
                    Furthermore, you can navigate to "HOME", "ABOUT US", and "CONTACT US" through their respective buttons in the Navigation Bar.
                </p>
                {
                    this.props.currentBlogPosts.map((post, index) => (
                        <div key={index}>
                            <h1 >{post.title}</h1>
                            <p>
                                {post.content.substring(0, 100) + " ..."}
                                <Link to={`/post/${post._id}`}>Read More</Link>
                            </p>
                            <button className="btn btn-primary" onClick={() => this.handleDelete(post._id)} name="button">Delete</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentBlogPosts: state.blogData.posts
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentBlogPosts_Action: (blogPosts) => dispatch(fetchCurrentBlogPosts(blogPosts)),
    deleteSingleBlogPost_Action: (postId) => dispatch(deleteSingleBlogPost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);