import React from 'react';
import axios from "axios";

import { connect } from "react-redux";

import { fetchCurrentBlogPosts } from "../redux/blogData/blogData.actions";

class Post extends React.Component {

    componentDidMount = () => {
        this.getBlogPost();
    };

    getBlogPost = () => {
        axios.get('/posts/:postId')
            .then((response) => {
                const data = response.data;
                this.props.fetchCurrentBlogPosts_Action(
                    data
                )
                console.log(data);
                console.log('Data has been received.');
                alert('Data has been received.');
            })
            .catch(() => {
                alert('Error retrieving data.');
            });
    }

    render(){
        return (
            <div className="container">
                <h1>{this.props.currentBlogPosts.title}</h1>
                <p>{this.props.currentBlogPosts.content}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);

// import React, { useEffect } from 'react';
// import axios from "axios";

// import { connect } from "react-redux";

// import { fetchCurrentBlogPosts } from "../redux/blogData/blogData.actions";

// const Post = (props) => {

//     const fetchingForGetBlogPost = (data) => {
//         props.fetchCurrentBlogPosts_Action(
//             data
//         )
//     }

//     useEffect(() => {

//         const getBlogPost = () => {
//             axios.get('/posts/:postId')
//                 .then((response) => {
//                     const data = response.data;
//                     // props.fetchCurrentBlogPosts_Action(
//                     //     data
//                     // )
//                     fetchingForGetBlogPost(data);
//                     console.log(data);
//                     console.log('Data has been received.');
//                 })
//                 .catch(() => {
//                     alert('Error retrieving data.');
//                 });
//         }

//         getBlogPost();
//     }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


//     // componentDidMount = () => {
//     //     getBlogPost();
//     // };

//     return (
//         <div className="container">
//             <h1>{props.currentBlogPosts.title}</h1>
//             <p>{props.currentBlogPosts.content}</p>
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     currentBlogPosts: state.blogData.posts
// });

// const mapDispatchToProps = dispatch => ({
//     fetchCurrentBlogPosts_Action: (blogPosts) => dispatch(fetchCurrentBlogPosts(blogPosts))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Post);