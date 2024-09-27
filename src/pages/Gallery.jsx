import React, { useEffect, useState } from "react";

const image =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

function Gallery() {
  const [pictures, setPictures] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        const datas = [];
        while (datas.length < 200) {
          datas.push(...data);
        }
        setPictures(datas.slice(0, 200));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      {" "}
      {loader && <h3>Loading...</h3>}
      {pictures.map((value, index) => (
        <div
          key={index}
          className="border p-4 rounded-md shadow w-full md:w-1/2 lg:w-1/3 hover:shadow-lg transition-all duration-500 scale-105"
        >
          <img
            src={image}
            alt={value.title}
            className="w-full h-48 object-cover mb-2"
            onLoad={(e) => (e.target.src = value.url)}
            onError={(e) => (e.target.src = image)}
          />
          <h2 className="font-bold">{value.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
