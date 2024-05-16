import { Facebook } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", user);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  // remove error message
  setTimeout(() => {
    setErr("");
  }, 10000);

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <h1 className="logo">Instagram</h1>
          <h5 className="registerInfo">
            Sign up to see photos and videos from your friends
          </h5>
          <button className="loginFb">
            <Facebook className="fbIcon" /> Log in with facebook
          </button>
          <div style={{ textAlign: "center", color: "lightgray" }}>Or</div>
          <form action="submit" className="registerForm">
            <input
              onChange={handleInputs}
              required= {true}
              type="text"
              placeholder="Full name"
              name="fullname"
            />
            <input
              onChange={handleInputs}
              required= {true}
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              onChange={handleInputs}
              required= {true}
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              onChange={handleInputs}
              required= {true}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button type="submit" onClick={handleRegister} className="signUp">
              Sign up
            </button>
          </form>
        </div>
        <div className="registerBottom">
          <span>
            Have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "rgb(0, 149, 246)",
                fontWeight: "500",
              }}
              to="/login"
            >
              Log in
            </Link>
          </span>
        </div>
        {/* {err && <span className="error">{err}</span>} */}
      </div>
    </div>
  );
};

export default Register;
