import { useContext, useEffect, useState } from "react";
import { FaCalendarDays, FaClock, FaUser } from "react-icons/fa6";
import { GlobalContext } from "../context/context";
import { BounceLoader } from "react-spinners";

export default function Personal() {
  const { classes, setClasses } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  function handleCancel(id) {
    setLoading(true);

    Object.filter = (obj, predicate) =>
      Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => predicate(value))
      );

    let filtered = Object.filter(classes, (value) => value.id != id);

    setClasses(filtered);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-full h-80  bg-personalPageImg bg-cover">
          <div className="w-full h-full bg-blackOverlay flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl my-4 font-bold mb-8 text-white">
              Your Upcoming Class
            </h1>
          </div>
        </div>

        {loading ? (
          <div>
            <div className="h-screen w-full flex justify-center items-center">
              <BounceLoader size={200} color="#c5a900"></BounceLoader>
            </div>
          </div>
        ) : Object.entries(classes).length == 0 ? (
          <div className="w-full flex justify-center pt-32">
            <p className="text-2xl font-semibold">
              Currently, there are no classes
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center md:flex md:flex-wrap md:flex-row md:justify-center md:gap-8 ">
            {Object.entries(classes).map(([key, subject]) => (
              <div
                id={subject.id}
                className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
              >
                <h2 className="p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                  {subject.name}
                </h2>
                <div
                  className={`bg-${subject.image} mb-4 w-full h-4/5 bg-cover bg-no-repeat`}
                ></div>

                <div className="flex w-full justify-around items-center">
                  <div className="flex items-center gap-1">
                    <FaCalendarDays />
                    <span>{subject.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{subject.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{subject.instructor}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCancel(subject.id)}
                  className="p-2 my-2 w-fit rounded-lg bg-yellow-400 text-md transition duration-150 ease-in-out 
                    hover:bg-yellow-500 hover:scale-105"
                >
                  Cancel booking
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
