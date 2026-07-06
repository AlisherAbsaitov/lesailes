import React from 'react'
import { NavLink } from 'react-router-dom';
// Doniyor
export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] flex flex-col items-center justify-center p-4 font-sans select-none transition-colors duration-300">
      <div className="text-center max-w-md w-full flex flex-col items-center">
        
        {/* 404 Raqami va xafa emojisi */}
        <div className="flex items-center justify-center text-[#ff0055] font-black text-[120px] sm:text-[160px] leading-none tracking-tight select-none">
          <span>4</span>
          <div className="w-[85px] h-[85px] sm:w-[115px] sm:h-[115px] bg-[#ff0055] rounded-full flex items-center justify-center mx-1 relative">
            {/* Ko'zlar */}
            <div className="absolute top-[35%] left-[30%] w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            <div className="absolute top-[35%] right-[30%] w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            {/* Xafa og'iz chizig'i */}
            <div className="absolute bottom-[30%] w-7 h-3 sm:w-10 sm:h-4 border-t-4 sm:border-t-default border-white rounded-t-full transform rotate-180"></div>
          </div>
          <span>4</span>
        </div>

        {/* Asosiy matn */}
        <h1 className="mt-8 text-2xl sm:text-3xl font-bold text-[#2c3e50] dark:text-[#f1f2f6] transition-colors duration-300">
          Страница не найдена
        </h1>

        {/* Yordamchi matn */}
        <p className="mt-3 text-sm sm:text-base text-gray-400 dark:text-gray-500 font-normal leading-relaxed px-4 transition-colors duration-300">
          Похоже, эта страница была перемещена или не существует
        </p>

        {/* NavLink (Bosh sahifaga havola) */}
        <NavLink
          to="/"
          className="mt-8 inline-block bg-[#ff0055] hover:bg-[#e6004c] text-white font-medium py-3 px-8 rounded-xl shadow-md shadow-red-200 dark:shadow-none transition duration-200 text-sm sm:text-base active:scale-95 text-center"
        >
          На главную
        </NavLink>
        
      </div>
    </div>
  );
}
