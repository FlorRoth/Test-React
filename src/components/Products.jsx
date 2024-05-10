import React, { useState } from 'react';
import { Search } from './Search';


export const Products = () => {

    const [showActionDropdown, setShowActionDropdown] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState("Ordernar por");

    const toggleActionDropdown = () => {
        setShowActionDropdown(!showActionDropdown);
    };

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        toggleActionDropdown(); 
    };

    return (
        <>
            <div className='ml-20 sm:ml-64 mt-5'>
                <Search/>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 mx-5">
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                        <div>
                            <button onClick={toggleActionDropdown} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                {selectedOrder}
                                <svg className={`w-2.5 h-2.5 ms-2.5 ${showActionDropdown ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            {showActionDropdown && (
                                <div id="dropdownAction" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                        <li>
                                            <a href="#" onClick={() => handleOrderSelect("Mayor Precio")} className={`block px-4 py-2 ${selectedOrder === "Mayor Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Mayor Precio</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleOrderSelect("Menos Precio")} className={`block px-4 py-2 ${selectedOrder === "Menos Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Menos precio</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Imagen
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Categoria
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Precio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    Phone
                                </td>
                                <td className="px-6 py-4">
                                    $799
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    Wearables
                                </td>
                                <td className="px-6 py-4">
                                    $999
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

    
        </>
    )
}
