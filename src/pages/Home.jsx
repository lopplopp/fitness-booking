import { useContext, useEffect, useState } from "react";
import { FaCalendarDays, FaClock, FaUser } from "react-icons/fa6";
import { GlobalContext } from "../context/context";
import { BounceLoader } from "react-spinners";

export default function Home() {
  const { login, classes, setClasses } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  //Getting all the datas needed with querySelector and put it into a single object
  //add object into classes object and set new state with setClasses 

  function handleAddBooking(e) {
    let parent = e.target.parentNode;
    let id = parent.id;

    let name = parent.querySelector(".name").innerHTML;
    let duration = parent.querySelector(".duration").innerHTML;
    let date = parent.querySelector(".date").innerHTML;
    let instructor = parent.querySelector(".instructor").innerHTML;
    let image = name.toLowerCase().replace(/ /g, "") + "Img";

    let object = {
      name: name,
      duration: duration,
      date: date,
      instructor: instructor,
      image: image,
      id: id,
    };

    let newClasses = { ...classes };
    newClasses[id] = object;

    console.log(object);

    setClasses(newClasses);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <>
      <div className="">
        <div className="bg-landingImg bg-cover bg-center bg-no-repeat">
          <div className="w-full h-screen flex items-center bg-blackOverlay">
            <div className="mx-24 text-center text-white">
              <h1 className="text-5xl font-bold mb-8">
                Find Your Perfect Workout Class
              </h1>
              <p>
                Looking for a fun and effective way to stay fit? Join our
                dynamic group classes and train with expert instructors in a
                motivating environment! Whether you’re into high-intensity
                workouts, strength training, yoga, or dance, we have a variety
                of classes designed for all fitness levels. Push yourself, meet
                like-minded fitness enthusiasts, and stay accountable to your
                goals. Sign up today and make every workout count!
              </p>
            </div>
          </div>
        </div>
        {loading ? (
          <>
            <div className="h-screen w-full flex justify-center items-center">
              <BounceLoader size={200} color="#c5a900"></BounceLoader>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl my-4 font-bold mb-8">
                Book a class with us now
              </h1>
              <div className="w-full flex flex-col items-center md:flex md:flex-wrap md:flex-row md:justify-center md:gap-8 ">
              

              {/* Classes available to book */}
                
                <div
                  id="5"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Crossfit
                  </h2>
                  <div className="bg-crossfitImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    A high-intensity, 60-minute workout combining strength,
                    cardio, and functional movements. Scalable for all levels,
                    guided by coaches.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 transition-all duration-200 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out  hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    } `}
                  >
                    Book now
                  </button>
                </div>
                <div
                  id="6"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Boxing
                  </h2>
                  <div className="bg-boxingImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    A fast-paced, 60-minute workout focusing on technique,
                    strength, and cardio. Build power, agility, and endurance
                    with expert coaching.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    }`}
                  >
                    Book now
                  </button>
                </div>
                <div
                  id="7"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Personal Trainer
                  </h2>
                  <div className="bg-personaltrainerImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    Customized workouts tailored to your goals. Gain strength,
                    improve fitness, and stay motivated with expert one-on-one
                    coaching.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    }`}
                  >
                    Book now
                  </button>
                </div>
                <div
                  id="8"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Body building
                  </h2>
                  <div className="bg-bodybuildingImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    Sculpt muscle, build strength, and achieve your ideal
                    physique with structured training and expert guidance.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    }`}
                  >
                    Book now
                  </button>
                </div>
                <div
                  id="9"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Yoga
                  </h2>
                  <div className="bg-yogaImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    Find balance, flexibility, and inner peace with guided yoga
                    sessions for all levels. Breathe, stretch, and strengthen
                    your body.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    }`}
                  >
                    Book now
                  </button>
                </div>
                <div
                  id="10"
                  className="flex flex-col items-center w-2/3 border border-black h-[450px] my-8 md:w-1/4 bg-white text-black"
                >
                  <h2 className="name p-4 py-6 w-full bg-yellow-400 text-xl text-center font-bold text-black ">
                    Additional
                  </h2>
                  <div className="bg-additionalImg w-full h-4/5 bg-cover bg-no-repeat"></div>
                  <p className="text-center m-3">
                    Explore more ways to train! From mobility and conditioning
                    to specialty workouts, there's something for everyone.
                  </p>
                  <div className="flex w-full justify-around items-center">
                    <div className="flex items-center gap-1">
                      <FaCalendarDays />
                      <span className="date">Mon 13:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="duration">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span className="instructor">David Chow</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBooking}
                    className={`p-2 my-2 w-fit rounded-lg ${
                      login ? null : "cursor-not-allowed"
                    } ${login ? "bg-yellow-400" : "bg-gray-400"} text-md ${
                      login
                        ? "transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                        : "disabled"
                    }`}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
