import React, { useState } from 'react';

export const Search = () => {
    const [showActionDropdown, setShowActionDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Categorias");

    const toggleActionDropdown = () => {
        setShowActionDropdown(!showActionDropdown);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        toggleActionDropdown(); 
    };


    return (
        <>
            <form className="max-w-lg mx-auto">
                <div className="flex">
                    <div>
                        <button onClick={toggleActionDropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                            {selectedCategory}
                            <svg className={`w-2.5 h-2.5 ms-2.5 ${showActionDropdown ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        {showActionDropdown && (
                                <div id="dropdownAction" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                        <li>
                                            <a href="#" onClick={() => handleCategorySelect("Mayor Precio")} className={`block px-4 py-2 ${selectedCategory === "Mayor Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Mayor Precio</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleCategorySelect("Menos Precio")} className={`block px-4 py-2 ${selectedCategory === "Menos Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Menos precio</a>
                                        </li>
                                    </ul>
                                </div>
                        )}
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 h-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Buscar por Nombres, Categorias..." required />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Buscar</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
