import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { auth } from "../Firebase/firebase.config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // sign up in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("sign up successfully");

        Swal.fire({
          icon: "success",
          text: "Registration successfully",
        });

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

        Swal.fire({
          icon: "error",
          text: msg,
        });
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="bg-white shadow-sm p-7 rounded-lg min-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-semibold text-center">Sing up</h1>
        <div>
          <p className="text-xl font-semibold mb-2">Email</p>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>
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
          <button className="px-4 py-3 cursor-pointer font-semibold bg-blue-500 text-white border-2 mt-5 w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
