import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/index";
import { getUsers, getUser } from "../redux/action";

function Home() {
  const dispatch = useDispatch();
  const { loading, allUsersData } = useSelector((state) => state.ListUsersData);
  const { cardData } = useSelector((state) => state.SingleUserData);

  if (allUsersData !== undefined) var mainData = allUsersData.data;
  if (mainData !== undefined)
    var { page, per_page, total, total_pages, data } = mainData;
  if (cardData !== undefined)
    var { id, avatar, email, first_name, last_name } = cardData;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {loading ? (
        <Loading> </Loading>
      ) : (
        <div>
          <h1 className="pt-10 w-1/2 m-auto text-4xl font-bold text-black">
            Users
          </h1>

          <div>
            <Card
              key={id}
              avatar={avatar}
              email={email}
              first_name={first_name}
              last_name={last_name}
            />
          </div>

          <div className="w-1/2 m-auto flex flex-row justify-center">
            {total
              ? [...Array(total)].map((e, i) => (
                  <button
                    className="text-col5 cursor-pointer bg-col3	hover:bg-col2	rounded-sm pt-0.5 pb-0.5 pl-3 pr-3 m-2"
                    onClick={(e) =>
                      dispatch(getUser(parseInt(e.target.innerHTML)))
                    }
                  >
                    {i + 1}
                  </button>
                ))
              : "null"}
          </div>
        </div>
      )}
    </>
  );
}

function Card({ avatar, email, first_name, last_name }) {
  var today = new Date();
  return (
    <div className=" h-1/2 w-1/2 m-auto flex flex-row justify-items-stretch my-8 bg-col4 rounded-3xl">
      {/* Avatar */}
      <div className="mx-10 my-16">
        <img
          className="h-auto w-60 aspect-square rounded-3xl"
          src={avatar}
          alt={first_name + " " + last_name}
        />
      </div>

      {/* User Info */}
      <div className="px-10 my-16">
        <div className="break-words text-col5 text-5xl">
          {first_name}
          <br />
          {last_name}
        </div>
        <div className="pt-10 text-col5 text-2xl">{email}</div>
        <div className="pt-6 text-col5 text-xs">
          {today.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
}

export default Home;
