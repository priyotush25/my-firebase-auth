import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-purple-100 to-purple-200 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-purple-600">
          Register
        </h1>
        <p className="text-center text-gray-500">
          Create your account to get started
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
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Register Button */}
          <div>
            <input
              type="submit"
              value="Register"
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition shadow-md cursor-pointer"
            />
          </div>
        </form>

        {/* Or divider */}
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-12 bg-gray-300"></span>
          <span className="text-gray-400 font-medium">OR</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Google Register */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-300 hover:bg-purple-50 transition text-gray-700 font-semibold cursor-pointer"
        >
          <FcGoogle className="text-3xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
