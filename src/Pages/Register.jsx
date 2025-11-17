import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";

import { auth } from "../Firebase/firebase.config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // sign up in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("signup successfully");

        // update profile
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e.message);
          });

        setName("");
        setPhoto("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        let msg = "";

        switch (error.code) {
          case "auth/email-already-in-use":
            msg = "This email is already in use.";
            break;

          case "auth/invalid-email":
            msg = "Invalid email address.";
            break;

          case "auth/weak-password":
            msg = "Password must be at least 6 characters.";
            break;

          case "auth/user-not-found":
            msg = "No account found with this email.";
            break;

          case "auth/wrong-password":
            msg = "Incorrect password.";
            break;

          case "auth/network-request-failed":
            msg = "Network error. Please check your internet connection.";
            break;

          case "auth/too-many-requests":
            msg = "Too many attempts. Please try again later.";
            break;

          default:
            msg = error.message;
        }

        toast.error("Signup Fail");
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="bg-white shadow-sm p-7 rounded-lg min-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-semibold text-center">Sing up</h1>

        {/* name */}
        <div>
          <p className="text-xl font-semibold mb-2">Name</p>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>

        {/* photo url */}
        <div>
          <p className="text-xl font-semibold mb-2 mt-4">PhotURL</p>
          <input
            type="text"
            value={photo}
            placeholder="Enter your photo url"
            onChange={(e) => setPhoto(e.target.value)}
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>

        {/* email */}
        <div>
          <p className="text-xl font-semibold mb-2 mt-4">Email</p>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>

        {/* password */}
        <div>
          <p className="text-xl font-semibold mb-2 mt-4">Password</p>
          <input
            type={active ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border-2 border-gray-500 w-full relative"
          />
          <button
            type="button"
            className="absolute mt-3 -ml-8"
            onClick={() => setActive(!active)}
          >
            {active ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>

        <div>
          <button className="my-btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
