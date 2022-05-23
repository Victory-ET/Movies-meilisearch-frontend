import React from "react";
import Cards from "./Cards";

const List = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-5/6 px-6 pt-24 grid grid-cols-3 gap-2">
        <Cards />
      </div>
    </div>
  );
};

export default List;
