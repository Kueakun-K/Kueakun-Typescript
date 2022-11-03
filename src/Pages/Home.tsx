import { useState, useEffect } from "react";

import cat from "../Assets/cat.png";
import kuea from "../Assets/kueaCrop.jpg";
import gmail from "../Assets/gmail.png";
import instagram from "../Assets/instagram.png";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface DayType{
  day: Date;
}

const Home = () => {
  const locale = "en";
  const [today, setDate] = useState<DayType["day"]>(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${today.getDate()}/${today.toLocaleDateString(locale, {
    month: "numeric",
  })}/${today.toLocaleDateString(locale, { year: "numeric" })}  `;
  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && hour >= 5 && "Morning 🌄") ||
    (hour < 17 && hour >= 12 && "Afternoon ☀️") ||
    (hour < 21 && hour >= 17 && "Evening 🌅") ||
    "night 🌙"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div>
      {/* Header */}
      <div className="pt-2 pl-5 text-xl font-bold text-red-500 dark:text-yellow-500">
        <span>Home</span>
      </div>
      {/* Header */}

      {/* Text Welcome */}
      <div className="p-3 border-b-2 border-gray-500">
        <div className="flex dark:bg-gray-800 bg-gray-300 rounded-2xl">
          <img src={cat} alt="cat" className="w-12 h-12 rounded-full m-4"></img>
          <div className="flex font-medium text-orange-500 dark:text-yellow-500 justify-center items-center">
            Hello {day}. {wish} &nbsp;{date} {time}
          </div>
        </div>
      </div>
      {/* Text Welcome */}

      {/* Block 1 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white">
        <ProfileHeader text="1 DEC 2001" />
        {/* text */}
        <div className="mb-3 mx-5">
          <span>
            Hello world! I am{" "}
            <span className="font-medium text-orange-500 dark:text-yellow-500">
              Kueakun Niyomsit.
            </span>{" "}
            Now I'm studying computer engineering 3<sup>rd</sup> year at
            <span className="font-medium text-yellow-500 dark:text-orange-600">
              {" "}
              KMITL.
            </span>{" "}
            <br />
            <span className="font-medium text-orange-500 dark:text-yellow-500">
              {" "}
              happy hacking :)
            </span>
          </span>
        </div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-center mx-5">
          <img src={kuea} alt="Kuea" className="w-9/12 rounded-lg " />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 1 */}

      {/* Block 2 */}
      <div className="p-3 border-b-2 border-gray-500 dark:text-white ">
        <ProfileHeader text="now" />
        {/* text */}
        <div className=" ml-6 mb-3">
          <div className="flex">
            <img src={gmail} alt="Gmail" className="w-5 h-5" />
            <span className="mx-2">Contact : </span>
            <div className="group">
              <a
                href="mailto:Kueakun0112@gmail.com"
                className="font-medium text-orange-500 dark:text-yellow-500 cursor-pointer"
              >
                Kueakun0112@gmail.com
              </a>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            <span className="mx-2">Github :</span>
            <a
              href="https://github.com/Kueakun-K"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-500 dark:text-yellow-500"
            >
              Kueakun-K
            </a>
          </div>
          <div className="flex">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
            <span className="mx-2">Instagram :</span>
            <a
              href="https://www.instagram.com/kueakun.k/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-500 dark:text-yellow-500"
            >
              kueakun.k
            </a>
          </div>
        </div>
        {/* text */}
        <IconFooter />
      </div>
      {/* Block 2 */}
    </div>
  );
};
export default Home;
