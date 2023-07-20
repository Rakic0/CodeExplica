import { ReactComponent as SVG } from "../assets/home-svg.svg";
import Form from "../components/Form";
import "./scss/HomePage.scss";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="home">
      <div>
        <SVG className="home__svg" />
      </div>
      <div className="home__form">
        <Form type="repo" />
        <span> - OR - </span>
        <Form type="code" />
      </div>
    </div>
  );
};

export default HomePage;
