import { BlogDataActionTypes } from "./blogData.types";

const INITIAL_STATE = {
    posts: [],
    currentPost: {}
};

const BlogDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BlogDataActionTypes.FETCH_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case BlogDataActionTypes.ADD_NEW_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case BlogDataActionTypes.GET_SINGLE_BLOG_POST:
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state;
    }
}

export default BlogDataReducer;

// import { BlogDataActionTypes } from "./blogData.types";

// const INITIAL_STATE = {
//     title: '',
//     content: '',
//     posts: []
// };

// const BlogDataReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case BlogDataActionTypes.TITLE:
//             return {
//                 ...state, 
//                 title: action.payload 
//             }
//         case BlogDataActionTypes.CONTENT:
//             return {
//                 ...state,
//                 content: action.payload
//             }
//     case BlogDataActionTypes.POSTS:
//             return {
//                 ...state,
//                 posts: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default BlogDataReducer;