import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Provider } from "react-redux";
import store from "../redux";

import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts";

export default function Home() {
  return (
    <Provider store={store}>
      <div> my app </div>
    </Provider>
  );
}
