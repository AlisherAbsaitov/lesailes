import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import data from "../data/cart.json"
export default function Cart() {
    const [cartData, setCartData] = useState(data)
    console.log(cartData);
    return (
        <ul className='py-10 flex flex-wrap gap-10 justify-center items-center'>
            {
                cartData.map((value,index) => {
                    return (
                        <li key={index} className="w-70 bg-white rounded-2xl shadow-md hover:shadow-2xl p-4 relative">
                            {/* Image */}
                            <img
                                src={value.img}
                                alt="Food"
                                className="w-55 h-45"
                            />

                            {/* Content */}
                            <div className="mt-4">
                                <h3 className="text-2xl font-normal text-black">
                                    {value.title}
                                </h3>

                                <p className="text-pink-500 text-2xl font-medium mt-3">
                                    {value.desc}
                                </p>
                            </div>

                            {/* Add Button */}
                            <button className="absolute bottom-4 right-4 p-2 bg-pink-500 hover:bg-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                                <FaPlus />
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
