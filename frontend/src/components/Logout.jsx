import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove stored user data
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token"); // if you are storing a token

    // Redirect to login page
    navigate("/");
  }, [navigate]);

  return null;
}

export default Logout;