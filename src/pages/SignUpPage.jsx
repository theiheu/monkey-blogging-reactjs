import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field } from "../conponents";
import { Link } from "react-router-dom";

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
    fullName: yup.string().required("Input is required."),
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
      )
      .required("Input is required."),
    confirmPassWord: yup
      .string()
      .required("Input is required.")
      .oneOf([yup.ref("passWord"), null], "Passwords must match."),
  })
  .required();

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      return setTimeout(() => {
        reset();
        // console.log(resolve());
        console.log("data :>> ", data);
      }, 3000);
    });
  };

  return (
    <div className="container">
      <SignUpPageLayout>
        <img srcSet="./public/img/logo.png" alt="" className="logo" />
        <h1 className="header">Monkey Blogging</h1>
        <SingUpForm>
          <Field
            name={"fullName"}
            label={"Full Name"}
            error={errors.fullName?.message}
            register={register}
            placeholder="Please input your full name."
            type="text"
          ></Field>
          <Field
            name={"email"}
            label={"Email"}
            error={errors.email?.message}
            register={register}
            placeholder="Please input your email."
            type="email"
          ></Field>
          <Field
            name={"passWord"}
            label={"Password"}
            error={errors.passWord?.message}
            register={register}
            placeholder="Please input your password."
            type="password"
            hasIcon
          ></Field>
          <Field
            name={"confirmPassWord"}
            label={"Confirm Password"}
            error={errors.confirmPassWord?.message}
            register={register}
            placeholder="Please input your confirm passWord."
            type="password"
            hasIcon
          ></Field>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            isLoading={isSubmitting}
            // disabled
          >
            Submit
          </Button>

          <div>
            <span>Do you already have an account? </span>
            <Link className="link" to={"/signin"}>
              Signin
            </Link>
          </div>
        </SingUpForm>
      </SignUpPageLayout>
    </div>
  );
};

export default SignUpPage;
