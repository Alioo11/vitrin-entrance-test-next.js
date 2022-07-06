import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST } from "./postTypes";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (users) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: users,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess };
