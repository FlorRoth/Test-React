import React, { useContext, useEffect, useState } from 'react';
import { Search } from './Search';
import { ProductContext } from "../contexts/ProductContext"
import { Spinner } from './Spinner';
import { Pagination } from './Pagination';
import OrderType from '../config/OrderType';




export const Products = () => {

    const [showActionDropdown, setShowActionDropdown] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState("Ordernar por");
    const [selectedCategory, setSelectedCategory] = useState();
    const { state, getProducts, getProductsByCategory } = useContext(ProductContext);
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState(OrderType.ASC);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        setProducts(state.products);
        setIsLoading(false)
    }, [state.products]);

    useEffect(() => {
        if(selectedCategory && selectedCategory !=='Todas'){
            setIsLoading(true);
            setCurrentPage(1);
            getProductsByCategory(selectedCategory);
        }
        else init();
    }, [selectedCategory]);

    const init = () => {
        setIsLoading(true);
        getProducts(); 
    };

    const toggleActionDropdown = () => {
        setShowActionDropdown(!showActionDropdown);
    };

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        toggleActionDropdown(); 
        setSortOrder(order === "Menor Precio" ? OrderType.ASC : OrderType.DESC);
    };

    const sortedProducts = () => {
        let filteredProducts = [...products];
        if (search.trim() !== "") {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (sortOrder === "asc") {
            return filteredProducts.sort((a, b) => a.price - b.price);
        }
        return filteredProducts.sort((a, b) => b.price - a.price);
    };

    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;
        return sortedProducts().slice(startIndex, endIndex);
    };

    return (
        <>
            <div className='my-24 mx-5'>
                <Search selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearch={setSearch}/>
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
                                            <a onClick={() => handleOrderSelect("Mayor Precio")} className={`block px-4 py-2 ${selectedOrder === "Mayor Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Mayor Precio</a>
                                        </li>
                                        <li>
                                            <a onClick={() => handleOrderSelect("Menor Precio")} className={`block px-4 py-2 ${selectedOrder === "Menor Precio" ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}`}>Menor precio</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="w-full justify-center flex">
                            <Spinner/>
                        </div>
                            ) : ( 
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
                                    Precio ($)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCurrentPageProducts().length !== 0 ? (
                                getCurrentPageProducts().map((product, index) =>  (
                                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            <img src={product.image} className="w-16 max-w-full max-h-full" alt={`product-${product.id}`}/>
                                        </th>
                                        <td className="px-6 py-4 w-1/3" >
                                        {product.title}
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {product.category}
                                        </td>
                                        <td className="px-6 py-4">
                                        {product.price.toFixed(2)}
                                        </td>
                                    </tr>
                                ))
                            )
                            : 
                            (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4">
                                        <p className='w-full text-center'>Sin resultados.</p>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>

                    </table>
                )}
                <Pagination totalProducts={sortedProducts().length} currentPage={currentPage} setCurrentPage={setCurrentPage} getCurrentPageProducts={getCurrentPageProducts}/>
                </div>
            </div>

    
        </>
    )
}
