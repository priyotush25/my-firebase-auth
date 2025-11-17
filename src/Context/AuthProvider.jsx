import { AuthContext } from "./CreateContex";

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "priyotush" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
