import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field } from "../conponents";
import { Link, redirect, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { useToast } from "../contexts/toast-context";

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
  const showToast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!isValid) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.passWord
      );
      // Đăng ký thành công
      const user = userCredential.user;

      reset();
      toast.success("The account has been successfully registered", {
        icon: "🚀",
      });
      // Chuyển hướng sau khi hiển thị thông báo
      navigate("/signin");
      // ...
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        reset();
        toast.error("The email address is already in use by another account", {
          icon: "😱",
        });
      }
      const errorMessage = error.message;
      console.log(`errorMessage:`, errorMessage);

      // Xử lý lỗi tại đây
    }
  };

  return (
    <div className="container">
      <SignUpPageLayout>
        <Link to="/">
          <img srcSet="./public/img/logo.png" alt="" className="logo" />
        </Link>
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
            disabled={isSubmitting}
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
