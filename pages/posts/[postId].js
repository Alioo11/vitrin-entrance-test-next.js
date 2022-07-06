import React from "react";
import customAxios from "../../custom/customAxios";
import Head from "next/head";

const Post = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.body} />
      </Head>
      <div>
        {data.title}
        <p>{data.body}</p>
      </div>
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
