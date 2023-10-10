import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;

const Authentication = ({ signinAndSignupFlag, children }) => {
  console.log(`signinAndSignupFlag:`, signinAndSignupFlag);

  return (
    <AuthenticationLayout>
      <div className="container">
        <Link to="/">
          <img srcSet="./img/logo.png" alt="" className="logo" />
        </Link>

        <h1 className="header">Monkey Blogging</h1>

        {signinAndSignupFlag ? <SignInPage /> : <SignUpPage />}
      </div>
    </AuthenticationLayout>
  );
};

export default Authentication;
