import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        color={"blue"}
        maxRating={10}
        size={40}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={0}
    />
    <StarRating color={"red"} size={34} className="test" />
    <StarRating color={"pink"} size={38} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
