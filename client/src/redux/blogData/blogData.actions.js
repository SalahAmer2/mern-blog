import { BlogDataActionTypes } from "./blogData.types";

export const currentBlogPosts = blogPosts => ({
    type: BlogDataActionTypes.POSTS,
    payload: blogPosts
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