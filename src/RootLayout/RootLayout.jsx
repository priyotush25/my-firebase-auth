import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <Navbar />
      <main className="flex-1 items-center justify-center border-2 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
