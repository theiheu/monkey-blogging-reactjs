import styled from "styled-components";

const SignUpPageLayout = styled.div`
  min-height: 100vh;
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
`;

const SingUpForm = styled.form`
  max-width: 420px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.grayLight};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;

  label {
    display: block;
    font-size: 20px;
    /* font-weight: 600; */
    color: ${(props) => props.theme.grayDark};
  }

  input {
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 8px;
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.theme.grayLight};
    border: 1px solid ${(props) => props.theme.grayf1};
  }
  input:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.secondary};
  }
`;

const Field = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Button = styled.button`
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  padding: 8px 16px;
  border: none;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: ${(props) => props.theme.primary};
`;

const SignUpPage = () => {
  return (
    <div className="container">
      <SignUpPageLayout>
        <img srcSet="./public/img/logo.png" alt="" className="logo" />
        <h1 className="header">Monkey Blogging</h1>
        <SingUpForm>
          <Field>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="fullName"
              placeholder="Please input your full name."
            />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Please input your email."
            />
          </Field>
          <Field>
            <label htmlFor="passWord">PassWord</label>
            <input
              type="text"
              id="passWord"
              placeholder="Please input your password."
            />
          </Field>
          <Button type="button">Submit</Button>

          <div>
            <p>Do you already have an account?</p>
            <span>
              <a href="">Signin</a>
            </span>
          </div>
        </SingUpForm>
      </SignUpPageLayout>
    </div>
  );
};

export default SignUpPage;
