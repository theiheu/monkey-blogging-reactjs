import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field } from "../conponents";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase-app/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInPageLayout = styled.div`
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
  .link {
    display: inline-block;
    font-size: 16px;
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
  }
`;

const SingUpForm = styled.form`
  max-width: 420px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.grayLight};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
`;

const schema = yup
  .object({
    email: yup
      .string()
      .nullable()
      .email("Input must be a valid email.")
      .required("Input is required."),
    passWord: yup
      .string()
      .min(8, "Password must be at least 8 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
      ),
  })
  .required();

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.passWord
      );

      const user = userCredential.user;
      toast.success(`Login success, welcome ${user.displayName}!`);
      navigate("/");
      // ...
    } catch (error) {
      const errorCode = error.code;
      console.log(`errorCode:`, errorCode);

      switch (errorCode) {
        case "auth/invalid-login-credentials":
          toast.error("Invalid account");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email");
          break;
        case "auth/user-disabled":
          toast.error("User disabled");
          break;
        case "auth/user-not-found":
          toast.error("User not found");
          break;
        case "auth/wrong-password":
          toast.error("Wrong password");
          break;
        case "auth/missing-password":
          toast.error("Missing password");
          break;
        default:
      }

      const errorMessage = error.message;
    }
  };

  return (
    <div className="container">
      <SignInPageLayout>
        <img srcSet="./img/logo.png" alt="" className="logo" />
        <h1 className="header">Monkey Blogging</h1>
        <SingUpForm>
          <Field
            name={"email"}
            label={"Email"}
            error={errors.email?.message}
            register={register}
            placeholder="Please input your email."
            type="email"
          />
          <Field
            name={"passWord"}
            label={"Password"}
            error={errors.passWord?.message}
            register={register}
            placeholder="Please input your password."
            type="password"
            hasIcon
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>

          <div>
            <span>Do you already have an account? </span>
            <Link className="link" to={"/signup"}>
              Signup
            </Link>
          </div>
        </SingUpForm>
        <ToastContainer />
      </SignInPageLayout>
    </div>
  );
};

export default SignInPage;
