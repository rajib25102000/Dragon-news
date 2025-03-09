import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details,id } = news;
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto mb-16 border-b-4">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)} <Link to={`/news/${id}`} className="text-purple-700 font-bold">Read More...</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
