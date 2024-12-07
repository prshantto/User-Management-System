import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartTwoTone,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";

function ShowUser({ name, email, phone, website }) {

  const [showCard,setShowCard] = useState(false)
  
  const randomNumber = () => {
    const number = Math.floor(Math.random() * 18) + 1;
    return number < 10 ? `0${number}` : `${number}`;
  };

  return (
    <>
      <div className=" border border-gray-500 m-2 mt-12">

        <div className="h-50% bg-gray-100 text-center flex items-center justify-center">
          <img
            className="rounded-full p-3 cursor-pointer"
            src={`https://api.dicebear.com/9.x/lorelei/svg?size=150&hair=variant${randomNumber()}&eyes=variant${randomNumber()}&mouth=happy${randomNumber()}&nose=variant04`}
            alt="Avatar"
          />
        </div>

        <div className="h-40%">
          <h3 className="ml-2  font-semibold text-lg">{name}</h3>

          <div className="grid grid-cols-2 w-11 m-1 text-gray-600 text-[15px]">
          <MailOutlined/>
          <span className="px-1 pb-1 ">{email}</span>
          <PhoneOutlined/>
          <span className="px-1 pb-1 ">{phone}</span>
          <GlobalOutlined/>
          <span className="px-1 pb-1 "> {website}</span>
          </div>

        </div>

        <div className="h-10% bg-gray-200 flex items-center justify-around cursor-pointer border-t border-gray-500">
          <HeartTwoTone twoToneColor={"#eb2f96"} />
          <EditOutlined onClick={()=>setShowCard(true)} className="hover:text-blue-600" />
          {showCard && <UpdateUser onclose={()=>setShowCard(false)}/>}
          <DeleteFilled className="hover:text-blue-600" />
        </div>

      </div>
    </>
  );
}

export default ShowUser;
