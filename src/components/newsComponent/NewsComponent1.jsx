import React from "react";
import sportImage from "../../assets/sport-1.jpg";
import { FaCalendarAlt } from "react-icons/fa";

export default function NewsComponent1({ large }) {
  return (
    <>
      <div className="w-full h-auto">
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
          <img
            src={sportImage}
            alt="sport news image"
            className="w-full h-full rounded-xl transform transition-transform duration-500"
          />
          <div className="absolute text-white left-0 bottom-0 w-full h-0 bg-gradient-to-b from-transparent to-gray-800 rounded-xl overflow-hidden flex flex-col pl-4 text-left transition-[height,opacity] duration-500 group-hover:h-full group-hover:opacity-100 opacity-0 pb-2">
            <h3 className="text-xl font-bold mb-1 mt-auto tracking-wider line-clamp-1">
              កែវ ស្រេងលីហួរ
              ប្រាប់​មូល​ហេតុ​គេ​ប៉ះសេ​មិន​បាន​ល្អ​ក្នុងជំនួប​មិត្តភាព U20
            </h3>
            <p className="mb-2 text-sm font-light flex items-center">
              <FaCalendarAlt className="inline mr-2 w-[12px] h-[12px]" />
              01-01-2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
