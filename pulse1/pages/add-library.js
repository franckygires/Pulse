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
  
  const handleLibrary = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

      axios
        .post("https://test-pulse.herokuapp.com/api/library", {
          name,
          company_name,
          email,
          telephone,
          username,
        })
        .then((response) => {
          console.log(response.data);
          response.data;
          window.location = "/library";
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container my-5">
        <form
          onSubmit={handleLibrary}
          style={{ width: "90%", maxWidth: "600px", margin: "3rem auto" }}
        >
          {error ? (
            <div className="mb-3">
              <h3 className="text-red">{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className="mb-3">
              <h3 className="text-red">{message}</h3>
            </div>
          ) : null}

          <h4>Business Card</h4>

          
          <div className="mb-3">
            <label htmlFor="firstnameInput1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="nameInput1"
              onChange={(e) => setName(e.target.value)}
              value={name}
              
            />
          </div>


          <div className="mb-3">
            <label htmlFor="firstnameInput1" className="form-label">
              Company Name
            </label>
            <input
              name="company_name"
              type="text"
              className="form-control"
              id="nameInput1"
              onChange={(e) => setCompany_name(e.target.value)}
              value={company_name}
              
            />
          </div>


          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Telephone
            </label>
            <input
              name="telephone"
              type="tel"
              className="form-control"
              id="exampleInputtelephone1"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              
            />
           
          </div>

          <button type="submit" className="btn btn-primary">
            Add Business Card
          </button>
        </form>
      </div>
    </div>
  );
}
