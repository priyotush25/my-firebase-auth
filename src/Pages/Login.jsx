import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { auth } from "../Firebase/firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const [user, setUser] = useState(null);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      Swal.fire("Error", "Email and password cannot be empty.", "error");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("sign up successfully");
        Swal.fire({
          icon: "success",
          text: "Login successfully",
        });
        setUser(res.user);
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

  // logout
  const handleLogout = () => {
    signOut(auth).then((res) => {
      console.log(res);

      setUser(null);
      Swal.fire({
        icon: "success",
        text: "Logout successfully",
      }).catch((err) => {
        console.log(err.message);
      });
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      {user ? (
        <div className="bg-white flex-col gap-4 shadow-sm p-7 rounded-lg min-w-md flex items-center justify-center">
          <div>
            <img
              className="h-20 w-20 rounded-full border-2 border-blue-300"
              src={user?.photoURL || "https://vai.palceholder.com/88"}
              alt=""
            />
          </div>
          <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
          <h1 className="text-2xl font-semibold">{user?.email}</h1>
          <button onClick={handleLogout} className="my-btn">
            Logout
          </button>
        </div>
      ) : (
        <form
          className="bg-white shadow-sm p-7 rounded-lg min-w-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center">Login</h1>
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
              placeholder="Enter your password"
              value={password}
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
            <button className="my-btn">Login</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
