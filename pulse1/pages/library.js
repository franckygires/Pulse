import PostTask from "../components/PostProfile";
//import styles from "../styles/Home.module.css";
import axios from "axios";

import Header from "../components/Header";
//import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <div className="d-flex flex-column min-vh-100">
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
                <PostTask post={post} key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  let data = [];
  await axios
    .get("http://localhost:3000/api/library")
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