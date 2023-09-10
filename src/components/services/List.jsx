import React from "react";

const List = ({ icon, para }) => {
  return (
    <div>
      <li className="p-4 flex  gap-2 ">
        <div className="text-blue-300 mt-1"> {icon}</div>

        <p className="text-sm">{para}</p>
      </li>
    </div>
  );
};

export default List;
