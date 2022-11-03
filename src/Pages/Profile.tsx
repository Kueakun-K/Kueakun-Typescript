import React from "react";

import kueaCrop from "../Assets/kueaCrop.jpg";
import TC from "../Assets/TC.jpg";

import ProfileHeader from "../Components/ProfileHeader";
import IconFooter from "../Components/IconFooter";

const Profile = () => {
  return (
    <div>
      {/* Block 1 */}
      <div className="p-3 dark:text-white">
        <ProfileHeader text="now" />
        {/* text */}
        <div className="mb-3 mx-5">
          <span>
            Hello world! I am{" "}
            <span className="font-medium text-orange-500 dark:text-yellow-500">
              Kueakun Niyomsit.
            </span>{" "}
            Now I am studying computer engineering 3<sup>rd</sup> year at
            <span className="font-medium text-yellow-500 dark:text-orange-600">
              {" "}
              KMITL.
            </span>{" "}
            I am willing to learn new things and improve myself
            <br />
            <span className="font-medium text-orange-500 dark:text-yellow-500">
              {" "}
              happy hacking :)
            </span>
          </span>
        </div>
        {/* text */}

        {/* img */}
        <div className="flex mb-3 justify-between mx-5">
          <img src={kueaCrop} alt="Kuea" className="w-[49%] rounded " />
          <img src={TC} alt="KueaT" className="w-[49%]  rounded " />
        </div>
        {/* img */}
        <IconFooter />
      </div>
      {/* Block 1 */}
    </div>
  );
};

export default Profile;
