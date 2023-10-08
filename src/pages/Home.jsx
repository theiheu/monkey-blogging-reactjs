import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Authentication from "./Authentication";
import Modal from "../conponents/modal/Modal";
const Home = () => {
  document.title = "Monkey blogging";
  const [checkUser, setCheckUser] = useState(false);
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
      })
      .catch((error) => {
        console.log(`error:`, error);

        // An error happened.
      });
  };

  const modalForm = document.getElementById("my_modal_7");

  return (
    <div>
      <h1>Home</h1>
      <button className="btn btn-primary">Button</button>
      <NavLink className="btn" onClick={() => (modalForm.checked = true)}>
        Signin
      </NavLink>
      <NavLink className="btn" onClick={handleSignOut}>
        Sign Out
      </NavLink>
      <NavLink className="btn" onClick={() => (modalForm.checked = true)}>
        Signup
      </NavLink>

      <Modal>
        <Authentication checkUser={checkUser} />
      </Modal>
    </div>
  );
};

export default Home;
