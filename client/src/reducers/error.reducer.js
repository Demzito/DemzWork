import { GET_POSTS_ERRORS } from "../actions/post.action";

const initialState = {postError: []};

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_ERRORS:
            return {
                postError: action.payload,
                userError: []
            }
            default:
                return state;
    }
}