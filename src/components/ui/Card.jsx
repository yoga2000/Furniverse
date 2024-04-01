import React from "react";

const Card = ({ name, img }) => {
  return (
    <div className="max-w-xs md:max-w-sm lg:hover:-translate-y-10 transition-all duration-500 bg-amber-300   text-slate-950 lg:col-span-4 my-4 mx-auto p-4  shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 flex gap-y-2 flex-col items-center py-4">
        <img src={img} width={60} height={60} />
        <h1 className="text capitalize  font-bold font-[ubuntu] ">{name}</h1>
        <p className=" text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
          exercitationem! Laudantium enim voluptate itaque, necessitatibus optio
          ex dolorum rem perferendis ipsa amet eos quidem dignissimos, nihil
          dolores libero maxime pariatur?
        </p>
      </div>
    </div>
  );
};

export default Card;
