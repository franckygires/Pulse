import PostProfile from "../components/PostProfile";
//import styles from "../styles/Home.module.css";
import axios from "axios";

import Header from "../components/Header";
//import Footer from "../components/Footer";

import Head from "next/head";

export default function Profile({ posts }) {
  return (

    <div>

      <Head>

      <meta name="viewport" content="width=device-width, initial-scale=1"/>


      </Head>
    <div className="d-flex flex-column min-vh-100 @media (max-width: 600px)">
      <Header />
      <main>
        <div className="card">
          {!posts || posts.length === 0 ? (
            <h2>No added profile</h2>
          ) : (
            <div
              className="d-flex w-100 justify-content-center"
              style={{ flexWrap: "wrap" }}
            >
              {posts.map((post, i) => (
                <PostProfile post={post} key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
    </div>
  );
}


export async function getServerSideProps(context) {
  let data = [];
  await axios
    .get("https://test-pulse.herokuapp.com/api/profils")
    .then((response) => {
      console.log(response.data.data);
      data = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      posts: data,
    },
  };
}
