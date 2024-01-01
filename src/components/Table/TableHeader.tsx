import React from "react";

interface TableHeaderProps {
  onSort: (column: string) => void;
  sortedColumn: string | null;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSort, sortedColumn }) => {
  const isSorted = (column: string) => column === sortedColumn;

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th
          onClick={() => onSort("id")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("id") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            ID
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("name")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("name") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Name
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("type")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("type") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Type
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("hp")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("hp") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            HP
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("attack")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("attack") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Attack
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("defense")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("defense") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Defense
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("special_attack")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("special_attack") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Special Attack
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("special_defense")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("special_defense") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Special Defense
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("speed")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("speed") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Speed
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
        <th
          onClick={() => onSort("power")}
          className={`hover:bg-[#f1f1f1] px-1 py-1 ${
            isSorted("power") ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Power
            <span className="inline-flex items-center justify-center  ml-1 mb-1 text-lg">
              ↕️
            </span>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
