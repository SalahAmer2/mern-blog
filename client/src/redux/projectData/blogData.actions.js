import { BlogDataActionTypes } from "./blogData.types";

export const currentBlogTitle = blogTitle => ({
    type: BlogDataActionTypes.TITLE,
    payload: blogTitle
})

export const currentBlogContent = blogContent => ({
    type: BlogDataActionTypes.TITLE,
    payload: blogContent
})

export const currentBlogContent = blogPosts => ({
    type: BlogDataActionTypes.POSTS,
    payload: blogPosts
})