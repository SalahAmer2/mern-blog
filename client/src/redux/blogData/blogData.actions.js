import { BlogDataActionTypes } from "./blogData.types";

export const fetchCurrentBlogPosts = blogPosts => ({
    type: BlogDataActionTypes.FETCH_ALL_POSTS,
    payload: blogPosts
})

export const addNewBlogPosts = blogPosts => ({
    type: BlogDataActionTypes.ADD_NEW_POSTS,
    payload: blogPosts
})

export const getSingleBlogPost = blogPost => ({
    type: BlogDataActionTypes.GET_SINGLE_BLOG_POST,
    payload: blogPost
})

export const deleteSingleBlogPost = postId => ({
    type: BlogDataActionTypes.DELETE_SINGLE_BLOG_POST,
    payload: postId
})

// export const currentBlogTitle = blogData => ({
//     type: BlogDataActionTypes.BLOG_DATA,
//     payload: blogData
// }) <-This Instead?

// export const currentBlogTitle = blogTitle => ({
//     type: BlogDataActionTypes.TITLE,
//     payload: blogTitle
// })

// export const currentBlogContent = blogContent => ({
//     type: BlogDataActionTypes.CONTENT,
//     payload: blogContent
// })

// export const currentBlogPosts = blogPosts => ({
//     type: BlogDataActionTypes.POSTS,
//     payload: blogPosts
// })