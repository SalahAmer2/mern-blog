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
            // console.log('Data: ', data);
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
            console.log('There is an error I guess')
            return;
        }

        console.log('It is reaching here')

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

router.get("/post/:postId", function (req, res) {
    const requestedPostId = req.params.postId;//For some reason using lodash here for lowercase causes an error
    console.log(requestedPostId);

    Post.findById(requestedPostId)
        .then((data) => {
            console.log('Data: ', data);
            console.log('requestedPostId: ', requestedPostId);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.delete("/post/:postId/delete", function (req, res) {
    const requestedPostId = req.params.postId;//For some reason using lodash here for lowercase causes an error
    console.log(requestedPostId);

    Post.deleteOne({_id: requestedPostId})
        .then(() => {
            res.json("Post deleted successfully");
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

module.exports = router;