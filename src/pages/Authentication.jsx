import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../conponents/modal/Modal";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const AuthenticationLayout = styled.div`
  min-height: 70vh;
  .logo {
    margin: auto;
    padding: 16px;
    font-size: 32px;
  }
  .header {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    margin-bottom: 40px;
  }
  .link {
    display: inline-block;
    font-size: 16px;
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
  }
  /* form {
    max-width: 420px;
    margin: 0 auto;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.grayLight};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 50px 30px;
  } */
`;

const Authentication = ({ checkUser, children }) => {
  return (
    <AuthenticationLayout>
      {/* <Modal> */}
      <div className="container">
        <Link to="/">
          <img srcSet="./img/logo.png" alt="" className="logo" />
        </Link>

        <h1 className="header">Monkey Blogging</h1>

        {checkUser ? <SignUpPage /> : <SignInPage />}
      </div>
      {/* </Modal> */}
    </AuthenticationLayout>
  );
};

export default Authentication;
