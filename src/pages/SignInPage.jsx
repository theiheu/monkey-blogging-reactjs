import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field } from "../conponents";
import { Link } from "react-router-dom";
import { auth } from "../firebase-app/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import { toast } from "react-toastify";

const SignInPage = () => {
  const checkbox = document.getElementById("my_modal_7");
  const schema = yup.object({
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
  });

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.passWord
      );

      const user = userCredential.user;
      toast.success(`Login success, welcome ${user.displayName}!`);
      reset();
      checkbox.checked = false;
      // navigate("/");
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
      console.log(`errorMessage:`, errorMessage);
    }
  };

  return (
    <>
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
        <Link className="link" to={"/signup"}>
          Signup
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
