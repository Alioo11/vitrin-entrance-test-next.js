import React from "react";
import customAxios from "../../custom/customAxios";
import Head from "next/head";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Wrapper from "../../components/wrapper/wrapper";
import { CssBaseline } from "@mui/material";

const Post = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.body} />
      </Head>
      <CssBaseline>
        <Wrapper>
          <Link href="/">
            <Button>home</Button>
          </Link>
          <Card sx={{ minWidth: 275, height: 200 }}>
            <CardContent sx={{ height: 70 }}>
              <Typography variant="h6" component="div">
                {data.title}
              </Typography>
            </CardContent>
            <CardContent sx={{ height: 80 }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {data.body}
              </Typography>
            </CardContent>
          </Card>
        </Wrapper>
      </CssBaseline>
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await customAxios("/posts");
  const paths = data.map((item) => {
    return {
      params: {
        postId: item.id.toString(),
      },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const { data } = await customAxios(`/posts/${postId}`);

  return {
    props: {
      data,
    },
  };
}

export default Post;
