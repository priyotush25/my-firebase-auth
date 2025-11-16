import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-blue-100 to-blue-200 p-4">
      <div className="max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Welcome to My Firebase Auth Project
        </h1>

        <Link
          to="/login"
          className="w-full px-4 py-3 bg-blue-500 text-white font-semibold text-xl text-center rounded-xl hover:bg-blue-600 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="w-full px-4 py-3 bg-green-500 text-white font-semibold text-xl text-center rounded-xl hover:bg-green-600 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
