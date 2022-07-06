import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Provider, useSelector } from "react-redux";
import store from "../redux";

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
      console.log("fetching the posts");
      dispatch(fetchPosts());
    }
  }, []);

  const dummyArray = Array.from(Array(100).keys());

  return (
    <Wrapper>
      <Grid container spacing={1}>
        {posts.map((post) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={post.id} item>
              <CustomCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}
