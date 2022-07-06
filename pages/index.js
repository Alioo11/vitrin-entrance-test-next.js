import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts";
import { useEffect, useState } from "react";
import CustomCard from "../components/customCard/customCard";
import Wrapper from "../components/wrapper/wrapper";
import { Grid } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts?.posts);

  useEffect(() => {
    if (posts.length === 0) {
      //caching posts Data in redux
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={1}>
        {posts.map((post) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} key={post.id} item>
              <CustomCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}
