import React from 'react';

import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCurrentBlogPosts } from "../redux/blogData/blogData.actions";

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

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <p>
                    Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.
                </p>
                {
                    this.props.currentBlogPosts.map((post, index) => (
                        <div key={index}>
                            <h1 >{post.title}</h1>
                            <p>
                                {post.content.substring(0, 100) + " ..."}
                                <Link to={`/post/${post._id}`}>Read More</Link>
                            </p>
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
    fetchCurrentBlogPosts_Action: (blogPosts) => dispatch(fetchCurrentBlogPosts(blogPosts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);