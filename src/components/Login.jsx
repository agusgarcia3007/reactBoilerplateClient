import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/Login.png";
import authContext from "../context/authContext";

const Alert = ({ alert }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!</strong>
      <span className="block sm:inline">{alert}</span>
    </div>
  );
};

const Login = () => {
  let navigate = useNavigate();
  //auth context
  const Authcontext = useContext(authContext);
  const { msg, authenticated, login } = Authcontext;

  useEffect(() => {
    if (authenticated) navigate("/dashboard");
    if (msg) setAlert(msg);
  }, [authenticated, msg]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const { email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-64 w-auto" src={img} alt="Workflow" />
          {alert !== "" ? <Alert alert={msg} /> : null}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <p className="mt-2 text-center text-sm text-gray-600">
              First time?{" "}
              <Link
                to={"/signup"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
