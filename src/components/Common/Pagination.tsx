import React from "react";

interface PaginationProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
  pageSize: number;
  totalItems: number;
  handlePageSizeChange: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  pageSize,
  totalItems,
  handlePageSizeChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="flex flex-row w-full items-end justify-end -space-x-px text-sm">
      <span className="mx-2 text-white mb-[0.1rem]">Rows per page:</span>
      <select
        value={pageSize}
        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        className="border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {[5, 10, 25, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span className="px-2 mb-[0.1rem] text-white">
        Page {currentPage} of {totalPages}{" "}
      </span>

      <div className="flex flex-row">
        <button
          className="flex items-center mb-1 justify-center w-2 px-4 h-5 leading-tight text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>
        <button
          className="flex items-center mb-1 justify-center w-2 px-4 h-5 leading-tight text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= totalItems}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagination;
