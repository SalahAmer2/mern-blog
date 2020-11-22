const express = require('express');

const router = express.Router();

const Post = require('../models/blogPost');

// router.get("/", function (req, res) {
//     Post.find({}, function (err, posts) {
//         res.render("home", {
//             startingContent: homeStartingContent,
//             posts: posts
//         });
//     });
// });

// router.get("/about", function (req, res) {
//     res.render("about", { aboutContent: aboutContent });
// });

// router.get("/contact", function (req, res) {
//     res.render("contact", { contactContent: contactContent });
// });

// router.get("/compose", function (req, res) {
//     res.render("compose");
// });

// Routes
router.get('/', (req, res) => {

    Post.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post("/save", function (req, res) {
    
    const data = req.body;

    const newBlogPost = new Post(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error' });
            return;
        }

        //Blogpost
        return res.json({
            msg: 'Your data has been saved.'
        });
    });
    
    // const post = new Post({
    //     title: req.body.postTitle,
    //     content: req.body.postBody
    // });

    // post.save(function (err) {

    //     if (!err) {
    //         res.redirect("/");
    //     }
    // });
});

// router.get("/posts/:postId", function (req, res) {
//     const requestedPostId = req.params.postId;//For some reason using lodash here for lowercase causes an error

//     Post.findOne({ _id: requestedPostId }, function (err, post) {
//         res.render("post", {
//             title: post.title,
//             content: post.content
//         });
//     });

// //     // posts.forEach(function(post){
// //     //   const storedTitle = _.lowerCase(post.title);
// //     //
// //     //   if (storedTitle === requestedTitle) {
// //     //     res.render("post", {
// //     //       title: post.title,
// //     //       content: post.content
// //     //     });
// //     //   }
// //     // });

// });

module.exports = router;