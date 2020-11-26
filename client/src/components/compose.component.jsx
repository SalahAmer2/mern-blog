import React from 'react';
import axios from "axios";

import { connect } from "react-redux";

// import { currentBlogTitle, currentBlogContent, currentBlogPosts } from "../redux/blogData/blogData.actions";

// import { currentBlogTitle } from "../redux/blogData/blogData.actions";
// import { currentBlogContent } from "../redux/blogData/blogData.actions";
import { currentBlogPosts } from "../redux/blogData/blogData.actions";


class Compose extends React.Component {
    constructor() {
        super();

        this.title = React.createRef();
        this.content = React.createRef();
    }

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

    // componentDidMount = () => {
    //     this.getBlogPost();
    // };

    // getBlogPost = () => {
    //     axios.get('/api')
    //         .then((response) => {
    //             const data = response.data;
    //             this.props.currentBlogPosts(
    //                 [
    //                     ...this.props.currentBlogPosts,
    //                     ...data
    //                 ]
    //             )
    //             console.log('Data has been received.')
    //         })
    //         .catch(() => {
    //             alert('Error retrieving data.')
    //         });
    // }

    // handleChange = ({ target }) => {
    //     this.props.currentBlogTitle(
    //         target.value
    //     )
    // };

    submit = (event) => {
        event.preventDefault();

        // this.props.currentBlogTitle(
        //     this.title.current.value + ''
        // )

        // this.props.currentBlogContent({
        //     content: this.content.current.value + ''
        // })

        // this.props.currentBlogPosts_Action(
        //     [
        //         //...this.props.currentBlogPosts,
        //         {
        //             title: this.props.currentBlogTitle,
        //             content: this.props.currentBlogContent.content
        //         }
        //     ]
        // )

        this.props.currentBlogPosts_Action(
            [
                ...this.props.currentBlogPosts,
                {
                    title: this.title.current.value,
                    content: this.content.current.value
                }
            ]
        )

        // const payload = {
        //     title: this.props.currentBlogTitle,
        //     content: this.props.currentBlogContent
        // }

        // axios({
        //     url: '/api/save',
        //     method: 'POST',
        //     data: payload
        // })
        // .then(() => {
        //     console.log('Data has been sent to the server');
        //     // this.resetUserInputs();
        //     // this.getBlogPost();
        //     this.props.currentBlogPosts(
        //         payload
        //     )
        // })
        // .catch(() => {
        //     console.log('Internal server error');
        // });
    }

    // resetUserInputs = () => {
    //     this.props.currentBlogTitle('')

    //     this.props.currentBlogContent('')
    // }

    render() {

        console.log('State: ', this.props.currentBlogPosts);

        return(
            <div className="container">
                <h1>Compose</h1>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" ref={this.title} />
                        <label>Post</label>
                        <textarea className="form-control" name="content" rows="5" cols="30" ref={this.content}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" name="button">Publish</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentBlogTitle: state.blogData.currentBlogTitle,
    currentBlogContent: state.blogData.currentBlogContent,
    currentBlogPosts: state.blogData.currentBlogPosts
});

const mapDispatchToProps = dispatch => ({
    // currentBlogTitle: (blogTitle) => dispatch(currentBlogTitle(blogTitle)),
    // currentBlogContent: (blogContent) => dispatch(currentBlogContent(blogContent)),
    currentBlogPosts_Action: (blogPosts) => dispatch(currentBlogPosts(blogPosts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Compose);