import React from 'react'
import Cart from '../components/Cart'
// Shirin
export default function Home() {
  return (
    <main className='bg-white py-10 dark:bg-black'>
      <div className="container mx-auto px-5">

        <div className="carousel w-full mb-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://lesailes.uz/_next/image?url=https%3A%2F%2Fcdn.lesailes.uz%2Fstorage%2Fsliders%2F2025%2F05%2F02%2FE5V6pNonS4REOrif2K7PVPPBvW3gGmTplxJdyTKT.webp&w=1920&q=75"
              className="w-362 mx-auto rounded-2xl" />
            <div className="absolute -left-0.5 -right-0.5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className=" btn-circle text-orange-400 text-[40px] font-bold">❮</a>
              <a href="#slide2" className=" text-orange-400 text-[40px] font-bold btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://lesailes.uz/_next/image?url=https%3A%2F%2Fcdn.lesailes.uz%2Fstorage%2Fsliders%2F2022%2F02%2F23%2FllV4mAmT7G0Azwl2iY4YcStsHdW0sJtW2lAM7y3K.webp&w=1920&q=75"
              className="w-362 mx-auto rounded-2xl" />
            <div className="absolute -left-0.5 -right-0.5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className=" text-orange-400 text-[40px] font-bold btn-circle">❮</a>
              <a href="#slide3" className=" text-orange-400 text-[40px] font-bold btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://lesailes.uz/_next/image?url=https%3A%2F%2Fcdn.lesailes.uz%2Fstorage%2Fsliders%2F2025%2F08%2F05%2Fi4GF6yUKAN4udlwQAShv0RdG8ZJQ7hUijhtwilt9.webp&w=1920&q=75"
              className="w-362 mx-auto rounded-2xl" />
            <div className="absolute -left-0.5 -right-0.5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className=" text-orange-400 text-[40px] font-bold btn-circle">❮</a>
              <a href="#slide4" className=" text-orange-400 text-[40px] font-bold btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://lesailes.uz/_next/image?url=https%3A%2F%2Fcdn.lesailes.uz%2Fstorage%2Fsliders%2F2025%2F08%2F06%2F8EeVvJbxXw0Z2asoJt4uFo12XXEo8N2WEj6UzNys.webp&w=1920&q=75"
              className="w-362 mx-auto rounded-2xl" />
            <div className="absolute -left-0.5 -right-0.5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className=" text-orange-400 text-[40px] font-bold btn-circle">❮</a>
              <a href="#slide1" className=" text-orange-400 text-[40px] font-bold btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Сеты</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Курочка</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Снеки</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Лестеры</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Бургеры</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Лонгеры / Хот-дог</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Напитки</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Салаты</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Десерты</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Детям</p>
          <p className="bg-[#dbdbdb] text-black py-2 px-3 rounded-[10px]">Соусы</p>
        </div>
        <Cart />
      </div>
    </main>
  )
}
