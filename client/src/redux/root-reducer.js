import { combineReducers } from "redux";

import BlogDataReducer from "./blogData/blogData.reducer";

export default combineReducers({
    blogData: BlogDataReducer
})