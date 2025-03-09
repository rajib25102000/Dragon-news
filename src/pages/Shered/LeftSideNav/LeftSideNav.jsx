import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="border-2 rounded-lg p-4 space-y-4">
      <h1 className="text-3xl font-semibold">All Categories</h1>
      {categories.map((category) => (
        <Link
          className="block ml-4 font-semibold text-xl"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
