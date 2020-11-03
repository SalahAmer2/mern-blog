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

// router.post("/compose", function (req, res) {
//     const post = new Post({
//         title: req.body.postTitle,
//         content: req.body.postBody
//     });

//     post.save(function (err) {

//         if (!err) {
//             res.redirect("/");
//         }
//     });

// });

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