import React from 'react'
import { Link } from 'react-router-dom'

// ============= Images ================
import PriceOne from "../../assets/price-1.jpg"
import PriceTwo from "../../assets/price-2.jpg"
import PriceThree from "../../assets/price-3.jpg"
import PriceFour from "../../assets/price-4.jpg"



export default function Pricing() {
    return (
      
        <div className="bg-gray-100 my-5">
                <div className="max-w-7xl m-auto">
                    <section className='my-24'>
                        <header className="text-center">
                            <h3 className="text-5xl font-bold mb-5 text-gray-900">
                                Our Pricing Plan
                            </h3>
                            <p className="text-xl text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, natus?
                            </p>
                            <p className="text-xl font-bold text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, natus?
                            </p>
                            <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 justify-between">
                                <div className="flex-1">
                                    <div className="bg-white p-10 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <h4 className="text-2xl font-bold text-gray-900">
                                                    Basic
                                                </h4>
                                                <p className="text-xs text-gray-500">Most Popular</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-2 rounded-lg text-center">
                                            <h4 className="text-2xl font-bold text-gray-900">Basic</h4>
                                            <p className="text-xs text-gray-500">Per Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white p-10 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <h4 className="text-2xl font-bold text-gray-900">
                                                    Basic
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white p-10 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <h4 className="text-2xl font-bold text-gray-900">
                                                    Basic
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </header>
                    </section>
                </div>
        </div>
      
    )
}
