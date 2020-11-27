import React, { useRef, useState } from 'react';
import axios from "axios";

import { connect } from "react-redux";

// import { currentBlogTitle, currentBlogContent, currentBlogPosts } from "../redux/blogData/blogData.actions";

// import { currentBlogTitle } from "../redux/blogData/blogData.actions";
// import { currentBlogContent } from "../redux/blogData/blogData.actions";
import { addNewBlogPosts } from "../redux/blogData/blogData.actions";

import { useHistory } from "react-router-dom";

const Compose = ( props ) => {
    // const buttonRef = useRef(null)

    let history = useHistory();

    const submit = (event) => {
        event.preventDefault();

        props.addNewBlogPosts_Action(
            [
                ...props.currentBlogPosts,
                {
                    // title: title.current.value,
                    // content: content.current.value
                    title: values.title,
                    content: values.content
                }
            ]
        )

        const payload = {
            // title: title.current.value,
            // content: content.current.value
            title: values.title,
            content: values.content
        }

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                // this.resetUserInputs();
                // getBlogPost();
            })
            .catch(() => {
                console.log('Internal server error');
            });

        history.push('/')

    }

    // resetUserInputs = () => {
    //     this.props.currentBlogPosts_Action(

    //     )
    // }

    const [values, setValues] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    console.log(values)

    console.log('State: ', props.currentBlogPosts);

    return (
        <div className="container">
            <h1>Compose</h1>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        // ref={this.title}
                        value={values.title}
                        onChange={handleChange}
                    />
                    <label>Post</label>
                    <textarea
                        className="form-control"
                        name="content"
                        rows="5"
                        cols="30"
                        // ref={this.content}
                        value={values.content}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <button className="btn btn-primary" type="submit" name="button">Publish</button>
            </form>
        </div>
    )
}    

const mapStateToProps = state => ({
    currentBlogPosts: state.blogData.posts
});

const mapDispatchToProps = dispatch => ({
    addNewBlogPosts_Action: (blogPosts) => dispatch(addNewBlogPosts(blogPosts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Compose);

// class Compose extends React.Component {
//     constructor() {
//         super();

//         this.title = React.createRef();
//         this.content = React.createRef();
//     }

//     // getBlogPost = () => {
//     //     axios.get('/api/posts')
//     //         .then((response) => {
//     //             Post.findOne({ _id: requestedPostId }, function (err, post) {
//     //                 res.render("post", {
//     //                     title: post.title,
//     //                     content: post.content
//     //                 });
//     //             });
//     //         })
//     //         .catch(() => {
//     //             alert('Error retrieving data.')
//     //         });
//     // }

//     // componentDidMount = () => {
//     //     this.getBlogPost();
//     // };

//     // getBlogPost = () => {
//     //     axios.get('/api')
//     //         .then((response) => {
//     //             const data = response.data;
//     //             this.props.currentBlogPosts_Action(
//     //                 data
//     //             )
//     //             console.log('Data has been received.')
//     //         })
//     //         .catch(() => {
//     //             alert('Error retrieving data.')
//     //         });
//     // }

//     // handleChange = ({ target }) => {
//     //     this.props.currentBlogTitle(
//     //         target.value
//     //     )
//     // };

//     submit = (event) => {
//         event.preventDefault();

//         // this.props.currentBlogTitle(
//         //     this.title.current.value + ''
//         // )

//         // this.props.currentBlogContent({
//         //     content: this.content.current.value + ''
//         // })

//         // this.props.currentBlogPosts_Action(
//         //     [
//         //         //...this.props.currentBlogPosts,
//         //         {
//         //             title: this.props.currentBlogTitle,
//         //             content: this.props.currentBlogContent.content
//         //         }
//         //     ]
//         // )

//         this.props.currentBlogPosts_Action(
//             [
//                 ...this.props.currentBlogPosts,
//                 {
//                     title: this.title.current.value,
//                     content: this.content.current.value
//                 }
//             ]
//         )

//         const payload = {
//             title: this.title.current.value,
//             content: this.content.current.value
//         }

//         axios({
//             url: '/api/save',
//             method: 'POST',
//             data: payload
//         })
//         .then(() => {
//             console.log('Data has been sent to the server');
//             // this.resetUserInputs();
//             this.getBlogPost();
//         })
//         .catch(() => {
//             console.log('Internal server error');
//         });

//         let history = useHistory();

//         history.push('/')

//     }

//     // resetUserInputs = () => {
//     //     this.props.currentBlogPosts_Action(

//     //     )
//     // }

//     render() {

//         console.log('State: ', this.props.currentBlogPosts);

//         return(
//             <div className="container">
//                 <h1>Compose</h1>
//                 <form onSubmit={this.submit}>
//                     <div className="form-group">
//                         <label>Title</label>
//                         <input 
//                             className="form-control" 
//                             type="text" 
//                             name="title" 
//                             ref={this.title} 
//                             //value={this.props.currentBlogPosts.title}
//                         />
//                         <label>Post</label>
//                         <textarea 
//                             className="form-control" 
//                             name="content" 
//                             rows="5" 
//                             cols="30" 
//                             ref={this.content} 
//                             //value={this.props.currentBlogPosts.title}
//                         >
//                         </textarea>
//                     </div>
//                     <button className="btn btn-primary" type="submit" name="button">Publish</button>
//                 </form>
//                 {/* {
//                     this.props.currentBlogPosts.map((post, index) => (
//                         <div key={index}>
//                             <h1 >{post.title}</h1>
//                             <p>
//                                 {post.content.substring(0, 100) + " ..."}
//                                 <a href={`/posts/${index}`}>Read More</a>
//                             </p>
//                         </div>
//                     ))
//                 } */}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     currentBlogPosts: state.blogData.posts
// });

// export default connect(mapStateToProps)(Compose);