import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postTypes";

const initialState = {
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        posts: [],
        error: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
