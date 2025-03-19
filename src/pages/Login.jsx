import { useContext } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function Login() {
  const {
    setAttemptLogin,
    userName,
    setUserName,
    password,
    setPassword,
  } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (userNameValidation() && passwordValidation()) {
      setAttemptLogin(true);
    }
  }

  //username and password validation to match the pattern

  function userNameValidation() {
    const regex = /^[0-9A-Za-z]{6,16}$/;

    if (regex.test(userName)) {
      return true;
    } else {
      toast.warning("Please enter correct User Name");
      return false;
    }
  }

  function passwordValidation() {
    const regex = /^(?=.*?[a-z]).{8,}$/;

    if (regex.test(password)) {
      return true;
    } else {
      toast.warning("Please enter correct Password");
      setPassword("");
      return false;
    }
  }

  return (
    <div className="flex justify-center h-screen w-full gap-8">
      <div
        className={`hidden md:block w-1/2 bg-loginImg bg-cover bg-center bg-no-repeat m-4 rounded-xl`}
      ></div>
      <div className="flex flex-col w-1/2 h-full justify-center">
        <div>
          <h1 className="text-4xl font-bold my-8">Fitness Booking</h1>
          <h2 className="text-2xl my-4">Sign into your account</h2>
        </div>
        <form action="post" onSubmit={handleSubmit} className="flex flex-col">
          <label
            for="userName"
            class="block text-sm/6 my-2 font-medium text-gray-900 dark:text-white"
          >
            User Name
          </label>
          <input
            class="block dark:bg-gray-800 dark:border-none dark:focus:outline dark:text-white w-full md:w-2/3 border rounded-md mb-4 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 dark:focus:outline-blue-800 focus:outline-yellow-600"
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <label
            for="password"
            class="block text-sm/6 my-2 font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>

          <input
            class="block dark:bg-gray-800 dark:border-none dark:focus:outline dark:text-white w-full md:w-2/3 border rounded-md mb-4 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 dark:focus:outline-blue-800 focus:outline-yellow-600"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="w-full dark:text-black md:w-2/3 bg-yellow-400 rounded-xl my-5 p-2">
            Login
          </button>
          <Link className="w-full md:w-2/3">Forget Password?</Link>
        </form>
      </div>
    </div>
  );
}
