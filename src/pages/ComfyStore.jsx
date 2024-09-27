import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ComfyStore() {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        setCard(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div className=" container  flex flex-wrap gap-4 pt-12 ml-[200px]">
      {loader && <h3 className="ml-[450px]">Loading...</h3>}
      {card.length > 0 &&
        card.map(function (value, index) {
          return (
            <div
              className="shadow-xl rounded-lg p-4 hover:shadow-2xl transition duration-300"
              key={index}
            >
              <img
                className="rounded-lg w-80 h-48"
                src={value.attributes.image}
                alt=""
              />{" "}
              <div className=" pt-6 text-center">
                <h3 className=" font-sans font-semibold text-xl text-gray-700 capitalize tracking-wider">
                  {value.attributes.title}
                </h3>
                <h3 className="pt-2 text-base text-blue-900 font-sans">
                  {value.attributes.price}
                </h3>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ComfyStore;
