import { useState } from "react";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import React from "react";
import "reactjs-popup/dist/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateProfile(postId) {
  //console.log(postId);
  const post = postId.postId;
  const [name, setName] = useState(post.name);
  const [company_name, setCompany_name] = useState(post.company_name);
  const [email, setEmail] = useState(post.email);
  const [telephone, setTelephone] = useState(post.telephone);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");
    
    axios
      .put(`https://test-pulse.herokuapp.com/api/library/${post._id}`, {
          
        name,
        company_name,
        email,
        telephone,
      })
      .then((response) => {
        console.log(response.data);
        response.data;
        //localStorage.setItem("data", JSON.stringify(response.data));

        window.location = "/library";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleUpdate}
          className="d-flex justify-content-center w-50"
          style={{ flexWrap: "wrap" }}
        >
          {error ? (
            <div className={styles.formItem}>
              <h3 className={styles.error}>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className={styles.formItem}>
              <h3 className={styles.message}>{message}</h3>
            </div>
          ) : null}


          <div className={styles.formItem}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="name"
            />
          </div>


          <div className={styles.formItem}>
            <label>Company Name</label>
            <input
              type="text"
              name="company_name"
              onChange={(e) => setCompany_name(e.target.value)}
              value={company_name}
              placeholder="Company name"
            />
          </div>

          <div className={styles.formItem}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email.."
            />
          </div>

          <div className={styles.formItem}>
            <label>Telephone</label>
            <input
              name="telephone"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              placeholder="Phone Number"
            />
          </div>


          <div className={styles.formItem}>
            <button type="submit" className="btn btn-success">
              <span className="me-3">update</span>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 20, color: "white" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const url = `https://test-pulse.herokuapp.com/api/library/${context.params.id}`;
    let data = [];
  try {
    const response = await axios.get(url);
    data = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      postId: data, 
    },
  };
}
