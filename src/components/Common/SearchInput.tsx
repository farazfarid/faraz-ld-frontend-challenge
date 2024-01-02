import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex items-center justify-center">
      <label>
        <input
          className="block p-2 mb-1 md:mr-1 md:mb-0 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default SearchInput;
