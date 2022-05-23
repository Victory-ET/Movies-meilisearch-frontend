import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <>
      <div className=" text-white">
        <Image
          className=" rounded-md"
          src=""
          height="300px"
          width="200px"
          alt="image here"
        />
        <h2 className=" font-semibold">In the heart of the sea</h2>
        <h3 className=" opacity-50">Drama, Action</h3>
      </div>
    </>
  );
};

export default Cards;
