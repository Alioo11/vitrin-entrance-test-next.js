import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from "./postActions";
import customAxios from "../../custom/customAxios";

const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostsRequest());
    customAxios("/posts")
      .then((res) => {
        const posts = res.data;
        dispatch(fetchPostsSuccess(posts));
        return posts;
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err));
        return err;
      });
  };
};

export { fetchPosts };
