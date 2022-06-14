import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Home() {
  const LIST_USERS_API = "https://reqres.in/api/users/";

  const [cardInfo, setCardInfo] = useState({
    id: 0,
    email: "coolguy@gmail.com",
    first_name: "Cool",
    last_name: "Guy",
    avatar:
      "https://www.pngfind.com/pngs/m/518-5183747_cool-guy-smaller-than-128x128-pixels-hd-png.png",
  });

  const [responseData, setResponseData] = useState({});
  const { page, per_page, total, total_pages, data } = responseData;

  const dispatch = useDispatch();

  async function getUsers() {
    try {
      const response = await axios.get(LIST_USERS_API);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUser(userId) {
    try {
      const response = await axios.get(LIST_USERS_API + userId);
      console.log(response.data.data);
      const { avatar, email, first_name, last_name, id } = response.data.data;
      setCardInfo({
        id: id,
        email: email,
        first_name: first_name,
        last_name: last_name,
        avatar: avatar,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="pt-10 w-1/2 m-auto text-4xl font-bold text-black">
        Users
      </h1>

      <div>
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      </div>

      <div className="w-1/2 m-auto flex flex-row justify-center">
        {total
          ? [...Array(total)].map((e, i) => (
              <button
                className="text-col5 cursor-pointer bg-col3	hover:bg-col2	rounded-sm pt-0.5 pb-0.5 pl-3 pr-3 m-2"
                onClick={(e) => getUser(parseInt(e.target.innerHTML))}
              >
                {i + 1}
              </button>
            ))
          : "null"}
      </div>
    </div>
  );
}

function Card({ cardInfo }) {
  var today = new Date();

  return (
    <div className=" h-1/2 w-1/2 m-auto flex flex-row justify-items-stretch my-8 bg-col4 rounded-3xl">
      {/* Avatar */}
      <div className="mx-10 my-16">
        <img
          className="h-auto w-60 aspect-square rounded-3xl"
          src={cardInfo.avatar}
          alt={cardInfo.first_name + " " + cardInfo.last_name}
        />
      </div>

      {/* User Info */}
      <div className="px-10 my-16">
        <div className="break-words text-col5 text-5xl">
          {cardInfo.first_name}
          <br />
          {cardInfo.last_name}
        </div>
        <div className="pt-10 text-col5 text-2xl">{cardInfo.email}</div>
        <div className="pt-6 text-col5 text-xs">
          {today.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
}

export default Home;
