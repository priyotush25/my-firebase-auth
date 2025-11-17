const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4 text-center">
        <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
        {/* {user.photoURL && (
          <img src="" alt="User" className="w-24 h-24 rounded-full mx-auto" />
        )} */}
        <p className="text-xl font-semibold">Name: </p>
        <p className="text-lg text-gray-700">Email: </p>
        <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
