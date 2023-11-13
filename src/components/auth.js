const useAuth = () => {
  const login = (email, password) => {
    const correctEmail = "admin@gmail.com";
    const correctPassword = "Admin_1";

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
  };

  return { login, logout };
};

export default useAuth;
