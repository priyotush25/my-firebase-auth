import { Link } from "react-router";

const Home = () => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-sm p-7 space-y-6 flex flex-col items-center ">
      <h1 className="text-5xl font-bold text-blue-500">Welcome to my</h1>
      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        My Firebase Auth Project
      </h1>

      <Link
        to={"/login"}
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold text-xl cursor-pointer hover:bg-blue-600 transition-all delay-75 text-center"
      >
        Login
      </Link>

      <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold text-xl cursor-pointer hover:bg-blue-600 transition-all delay-75">
        Register
      </button>
    </div>
  );
};

export default Home;
