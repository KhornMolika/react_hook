import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import sportImage from "../../assets/recent_news1.jpg";

export default function NewsComponent2() {
  return (
    <>
      <div className="w-[280px] h-[430px] bg-white border-s-1 rounded-xl group ">
        <div className="w-full h-[250px] overflow-hidden rounded-t-xl ">
          <img
            src={sportImage}
            alt="sport image"
            className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="px-5 py-4 flex flex-col">
          <h3 className="text-xl font-bold font-kohSantepheap line-clamp-2 mb-3 group-hover:text-primary1">
            កែវ ស្រេងលីហួរ
            ប្រាប់​មូល​ហេតុ​គេ​ប៉ះសេ​មិន​បាន​ល្អ​ក្នុងជំនួប​មិត្តភាព U20
          </h3>
          <div className="flex justify-between items-center text-gray-500">
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 w-[12px]" /> 01-01-2024
            </p>
            <p>120.05k views</p>
          </div>
          <div className="flex items-center mt-3">
            <img
              src={sportImage}
              alt="sport"
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <p className="ml-4 text-md text-gray-800 font-kohSantepheap font-semibold group-hover:text-primary1">
              Um Sopheak
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
