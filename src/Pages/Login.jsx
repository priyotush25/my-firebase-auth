import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">Login</h1>
        <p className="text-center text-gray-500">
          Welcome back! Please login to your account.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Login Button */}
          <div>
            <input
              type="submit"
              value="Login"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition shadow-md"
            />
          </div>
        </form>

        {/* Or divider */}
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-12 bg-gray-300"></span>
          <span className="text-gray-400 font-medium">OR</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-300 hover:bg-blue-50 transition text-gray-700 font-semibold"
        >
          <FcGoogle className="text-3xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
