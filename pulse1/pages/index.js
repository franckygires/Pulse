import PostProfile from "../components/PostProfile";
//import styles from "../styles/Home.module.css";
import axios from "axios";

import Header from "../components/Header";
//import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
        {/* Welcome */}
        <img src="pulse.jpeg" alt="" />
    </div>
  );
}

