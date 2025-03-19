import { createContext, useEffect, useRef, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const checkFirstRender = useRef(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [attemptLogin, setAttemptLogin] = useState();
  const [classes, setClasses] = useState([]);
  const [login, setLogin] = useState(false);

  async function fetchLoginInfo() {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });
      const json = await response.json();
      if (json.message) {
        setError(json.message);
      } else {
        const response = await import("../files/fitness-json.json");
        const users = response.users;
        users.forEach((user) => {
          if (user.username === userName) {
            setClasses(user.classes);
          }
        });
        setLogin(true);
      }
    } catch (error) {
      setError(error);
    }
  }

  function handleResize() {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (checkFirstRender.current) {
      checkFirstRender.current = false;
      return;
    }
    fetchLoginInfo();
    setAttemptLogin(false);
  }, [attemptLogin]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <GlobalContext.Provider
      value={{
        screenSize,
        error,
        setError,
        setAttemptLogin,
        userName,
        setUserName,
        password,
        setPassword,
        classes,
        setClasses,
        login,
        setLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
