import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export const Search = ({selectedCategory, setSelectedCategory, setSearch}) => {
    const [showActionDropdown, setShowActionDropdown] = useState(false);
    const { state, getCategories } = useContext(ProductContext);
    const [categories, setCatgories] = useState([]);


    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        setCatgories(state.categories);
    }, [state.categories]);

    const init = () => {
        getCategories(); 
    };

    const toggleActionDropdown = () => {
        setShowActionDropdown(!showActionDropdown);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        toggleActionDropdown(); 
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value); 
    };


    return (
        <>
            <form className="max-w-lg mx-auto">
                <div className="flex">
                    <div>
                        <button onClick={toggleActionDropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                            {selectedCategory? selectedCategory : "Categorias" }
                            <svg className={`w-2.5 h-2.5 ms-2.5 ${showActionDropdown ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        {showActionDropdown && (
                                <div id="dropdownAction" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                        <li>
                                                <a onClick={() => handleCategorySelect('Todas')} className={`block px-4 py-2 ${selectedCategory === 'Todas' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Todas</a>
                                        </li>
                                        {categories.map((category, index) =>  (
                                            <li key={index}>
                                                <a onClick={() => handleCategorySelect(category)} className={`block px-4 py-2 ${selectedCategory === category ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>{category}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        )}
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown"
                         className="block p-2.5 w-full z-20 h-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                         placeholder="Buscar por nombre" 
                         onChange={handleSearchChange}/>
                    </div>
                </div>
            </form>
        </>
    );
};
