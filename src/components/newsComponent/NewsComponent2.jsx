import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import sportImage from "../../assets/recent_news1.jpg";

export default function NewsComponent2({image, title, released_date, view, publicer_image, publicer_name}) {
  return (
    <>
      <div className="card mx-3 bg-white border-s-1 rounded-xl group ">
        <div className="w-full h-[230px] overflow-hidden rounded-t-xl ">
          <img
            src={image}
            alt="sport image"
            className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="px-5 py-4 flex flex-col">
          <h3 className="text-xl font-bold font-kohSantepheap line-clamp-2 mb-3 group-hover:text-[#222162]">
            {title}
          </h3>
          <div className="flex justify-between items-center text-gray-500">
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 w-[12px]" /> {released_date}
            </p>
            <p>{view}k views</p>
          </div>
          <div className="flex items-center mt-3">
            <img
              src={publicer_image}
              alt="sport"
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <p className="ml-4 text-md text-gray-800 font-kohSantepheap font-semibold group-hover:text-[#222162]">
              {publicer_name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
