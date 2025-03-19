import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Header({ toggleDark, mode }) {
  const [openNav, setOpenNav] = useState(false);

  const {
    screenSize,
    login,
    userName,
    setPassword,
    setUserName,
    setClasses,
    setLogin,
  } = useContext(GlobalContext);

  function handleLogout() {
    setUserName("");
    setPassword("");
    setClasses([]);
    setLogin(false);
  }

  useEffect(() => {
    setOpenNav(false);
  }, [screenSize]);
  return (
    <div>
      <div
        className={
          screenSize.width < 800
            ? "relative w-full h-fit px-2 py-3  flex-col items-center"
            : "relative w-full h-fit px-32 py-3  flex-col items-center"
        }
      >
        <div className="flex justify-between items-center">
          <Link to={"/"} onClick={() => {setOpenNav(false)}}>
            <h2 className="font-bold text-2xl">Fitness Booking</h2>
          </Link>

          {screenSize.width < 800 ? (
            openNav ? (
              <div className="flex justify-center items-center gap-2">
                <FaX size={"24px"} onClick={() => setOpenNav(false)} />
                <div
                  onClick={() => toggleDark()}
                  className="rounded-full p-2 transition-all duration-100 hover:bg-gray-300"
                >
                  {mode === "light" ? (
                    <MdOutlineLightMode size={"20px"} />
                  ) : (
                    <MdOutlineDarkMode size={"20px"} />
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <FaBars
                  className=""
                  size={"24px"}
                  onClick={() => setOpenNav(true)}
                />
                <div
                  onClick={() => toggleDark()}
                  className="rounded-full p-2 transition-all duration-100 hover:bg-gray-300"
                >
                  {mode === "light" ? (
                    <MdOutlineLightMode size={"20px"} />
                  ) : (
                    <MdOutlineDarkMode size={"20px"} />
                  )}
                </div>
              </div>
            )
          ) : (
            <div className="flex">
              <div className="flex gap-8">
                <Link to={"/"}>
                  <div className="text-lg hover:bg-gray-800 hover:scale-105 px-2 py-1 rounded-lg">
                    Home
                  </div>
                </Link>
                {login ? (
                  <Link to={`/${userName}`}>
                    <div className="text-lg hover:bg-gray-800 hover:scale-105 px-2 py-1 rounded-lg">
                      My class
                    </div>
                  </Link>
                ) : null}
                {login ? (
                  <Link to={"/"}>
                    <div
                      onClick={handleLogout}
                      className="text-lg hover:bg-gray-800 hover:scale-105 px-2 py-1 rounded-lg"
                    >
                      Logout
                    </div>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <div className="text-lg hover:bg-gray-800 hover:scale-105 px-2 py-1 rounded-lg">
                      Login
                    </div>
                  </Link>
                )}
              </div>
              <div
                onClick={() => toggleDark()}
                className="rounded-full p-2 transition-all duration-100 hover:bg-gray-300"
              >
                {mode === "light" ? (
                  <MdOutlineLightMode size={"20px"} />
                ) : (
                  <MdOutlineDarkMode size={"20px"} />
                )}
              </div>
            </div>
          )}
        </div>

        {openNav ? (
          <div className="text-lg w-1/3 absolute right-2 ">
            <Link to={"/"} onClick={() => setOpenNav(!openNav)}>
              {" "}
              <div className="my-2 py-2 px-2 bg-gray-200 dark:bg-gray-400 rounded-md  hover:bg-gray-700 transition-all duration-200">
                Home
              </div>
            </Link>

            {login ? (
              <Link to={`/${userName}`} onClick={() => setOpenNav(false)}>
                <div className="my-2 py-2 px-2 bg-gray-200 dark:bg-gray-400 rounded-md  hover:bg-gray-700 transition-all duration-200">
                  My class
                </div>
              </Link>
            ) : null}

            {login ? (
              <Link to={"/"} onClick={() => setOpenNav(false)}>
                <div
                  onClick={handleLogout}
                  className="my-2 py-2 px-2 bg-gray-200 dark:bg-gray-400 rounded-md  hover:bg-gray-700 transition-all duration-200"
                >
                  Logout
                </div>
              </Link>
            ) : (
              <Link to={"/login"} onClick={() => setOpenNav(false)}>
                <div className="my-2 py-2 px-2 bg-gray-200 dark:bg-gray-400 rounded-md  hover:bg-gray-700 transition-all duration-200">
                  Login
                </div>
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
