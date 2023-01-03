import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/fetchUse">Fetch</Link>
      <br />
      <Link to="/axiosUse">Axios</Link>
    </div>
  );
};

export default Home;
