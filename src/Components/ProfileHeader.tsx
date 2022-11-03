import React, {FC} from "react";
import cat from "../Assets/cat.png";

interface Props {
  text: string;
}

const ProfileHeader:FC<Props> = ({text}) => {
  return (
    <div className="flex mb-3">
      <img src={cat} alt="cat" className="w-12 h-12 rounded-full mr-5"></img>
      <div>
        <span>Kueakun-K</span>
        <br />
        <span className="text-gray-500 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
