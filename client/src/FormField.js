import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";

function FormField() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [moviewReviewList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert("Successful insert!");
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="my-5">
        <div className="mb-3">
          <label htmlFor="movieName" className="form-label">
            Movie Name
          </label>
          <input
            type="text"
            className="form-control"
            name="movieName"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="movieReview" className="form-label">
            Review
          </label>
          <input
            type="text"
            className="form-control"
            name="movieReview"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={submitReview}
        >
          Submit
        </button> <br></br><br></br>

        {moviewReviewList.map((val) => {
          return (
            <p>
              Movie Name: {val.movieName} | Movie Review: {val.movieReview}
            </p>
          );
        })}    

      </form>
    </div>
    
  );
}

export default FormField;
