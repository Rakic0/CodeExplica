import { ReactComponent as SVG } from "../assets/sign-in-page-svg.svg";
import Button from "../components/Button";
import "./scss/SignInPage.scss";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div>
        <SVG className="sign-in-page__svg" />
      </div>
      <div className="sign-in-page__buttons__container">
        <Button>Sign in With Google</Button>
        <span className="sign-in-page__buttons__divider"> - OR - </span>
        <Button>Sign in as Guest</Button>
      </div>
    </div>
  );
};

export default SignInPage;
