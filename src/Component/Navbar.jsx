import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-blue-950 px-4 py-4 w-full text-white font-semibold">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1>My Firebase Auth</h1>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li className="hover:bg-blue-600 px-4 py-2 bg-blue-500 rounded-lg border-none">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="hover:bg-blue-600 px-4 py-2 bg-blue-500 rounded-lg border-none">
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
