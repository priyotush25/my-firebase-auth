const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="bg-white shadow-sm p-7 rounded-lg min-w-md">
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <div>
          <p className="text-xl font-semibold mb-2">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>
        <div>
          <p className="text-xl font-semibold mb-2 mt-4">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 border-2 border-gray-500 w-full"
          />
        </div>
        <div>
          <button className="px-4 py-3 cursor-pointer font-semibold bg-blue-500 text-white border-2 mt-5 w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
