import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Authentication from "../../pages/Authentication";

const Header = () => {
  const [checkUser, setCheckUser] = useState(false);
  const [signinAndSignupFlag, setsigninAndSignupFlag] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`user:`, user);

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setCheckUser(true);
        // ...
      } else {
        // User is signed out
        setCheckUser(false);
        // ...
      }
    });
  }),
    [checkUser];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log(`Sign-out successful.:`);
        setCheckUser(false);
      })
      .catch((error) => {
        console.log(`error:`, error);

        // An error happened.
      });
  };

  const handleModalForm = (signal) => {
    document.getElementById("my_modal_7").checked = true;
    if (signal == "signin") {
      setsigninAndSignupFlag(true);
    }
    if (signal == "signup") {
      setsigninAndSignupFlag(false);
    }
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <img srcSet="./img/logo.png" alt="" className="logo" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {checkUser ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img srcSet="./img/avatar.jpg" alt="" className="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button className="btn" onClick={() => handleModalForm("signin")}>
                Signin
              </button>
              <button className="btn" onClick={() => handleModalForm("signup")}>
                Signup
              </button>
            </>
          )}
        </div>
        <Modal>
          <Authentication signinAndSignupFlag={signinAndSignupFlag} />
        </Modal>
      </div>
    </>
  );
};

export default Header;
