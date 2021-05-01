import "../styles/Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="home">
      <h1>Odo Glasses Out Now!</h1>
      <Link to="/shop">Check What's Available {">"}</Link>
    </div>
  );
}

export default Home;
