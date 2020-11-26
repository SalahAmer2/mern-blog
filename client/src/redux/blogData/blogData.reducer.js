import { BlogDataActionTypes } from "./blogData.types";

const INITIAL_STATE = {
    title: '',
    content: '',
    posts: []
};

const BlogDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BlogDataActionTypes.TITLE:
            return {
                ...state, 
                title: action.payload 
            }
        case BlogDataActionTypes.CONTENT:
            return {
                ...state,
                content: action.payload
            }
    case BlogDataActionTypes.POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default BlogDataReducer;