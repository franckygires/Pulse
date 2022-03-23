import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function AddProfile() {

  const [name, setName] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      const users = JSON.parse(localStorage.getItem("data"));
      //console.log(users)
      setUser(users);
    }
  }, [user]);

  const username = user.name
  
  const handleProfile = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

      axios
        .post("http://localhost:3000/api/library", {
          name,
          company_name,
          email,
          telephone,
          username,
        })
        .then((response) => {
          console.log(response.data);
          response.data;
          window.location = "/";
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleProfile} className={styles.form}>
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
              required
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
            <button type="submit">Add Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
