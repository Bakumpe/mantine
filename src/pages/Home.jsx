import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <ul>
        <h1>My Links to Pages Designed with Mantine Library</h1>
        <li>
          <Link to={"./formValidation"}>
           Preview Form Validation UI designed with Mantine
          </Link>
        </li>
        <li>
          <Link to={"./useRef"}>
           Preview Mantine UseRef hook
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Home;
