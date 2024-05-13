import React from 'react';

export const Pagination = ({ totalProducts, currentPage, setCurrentPage }) => {

    const totalPages = Math.ceil(totalProducts / 10);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center mt-2">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Mostrando <span className="font-semibold text-gray-900 dark:text-white">{((currentPage - 1) * 10) + 1}</span> al <span className="font-semibold text-gray-900 dark:text-white">{Math.min(currentPage * 10, totalProducts)}</span> de <span className="font-semibold text-gray-900 dark:text-white">{totalProducts}</span> productos
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button onClick={goToPreviousPage} className={`flex items-center justify-center px-4 h-10 me-3 text-base font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'}`} disabled={currentPage === 1}>
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                        Anterior
                    </button>
                    <button onClick={goToNextPage} className={`flex items-center justify-center px-4 h-10 text-base font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'}`} disabled={currentPage === totalPages}>
                        Siguiente
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
