import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field } from "../conponents";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import * as yup from "yup";

const SignUpPage = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    fullName: yup.string().required("Input is required.").nullable(),
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
      .oneOf([yup.ref("passWord"), null], "Passwords must match.")
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const simulateEscKey = () => {
    const event = new KeyboardEvent("keydown", {
      key: "Escape",
      keyCode: 27,
    });
    console.log("Line: 50 - Here");

    document.dispatchEvent(event);
  };

  const onSubmit = async (data) => {
    if (!isValid) return;

    try {
      // Authentication with email and password from firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.passWord
      );
      // SignUp successfully
      const user = userCredential.user;

      await updateProfile(auth.currentUser, {
        displayName: data.fullName,
      });

      // Add a new document with a generated id.
      await addDoc(collection(db, "users"), {
        fullName: data.fullName,
        email: data.email,
        uid: user.uid,
        passWord: data.passWord,
      });
      // console.log("Document written with ID: ", docRef.id);

      reset();
      toast.success("The account has been successfully registered", {
        icon: "🚀",
      });
      console.log(`user:`, user.displayName);
      // Chuyển hướng sau khi hiển thị thông báo
      navigate("/");
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
    <>
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
        <Link className="link" onClick={() => simulateEscKey()}>
          Signin
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
