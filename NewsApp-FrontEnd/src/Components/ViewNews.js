import React, { useState, useEffect } from "react";
import { Navigate, useParams ,useNavigate} from "react-router-dom";
import Axios from "axios";

const ViewNews = () => {
  const [news, setNews] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();  // Add useNavigate hook

  useEffect(() => {
    setIsLoaded(true);
    display();
  }, [id]);

  const display = () => {
    Axios.get(`https://localhost:44393/api/News/${id}`)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const deleteNews = () => {
    Axios.delete(`https://localhost:44393/api/News/${id}`)
      .then(() => {
        setIsDeleted(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  if (isDeleted) {
    return <Navigate to="/allNews" />;
  }

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div className="card w-85 m-5">
        <div className="card-body">
          <h5 className="card-title" id="newsTitle">
            {news.title}
          </h5>
          <small className="text-muted" id="newsCreatedAt">
            Created on {news.date},{" "}
          </small>
          <small className="text-muted" id="newsCategory">
            Category: {news.category},{" "}
          </small>
          <small className="text-muted" id="newsSubCategory">
            SubCategory: {news.subcategory},{" "}
          </small>
          <small className="text-muted" id="newsAuthor">
            Author: {news.author}
          </small>
          <p>{news.description}</p>
        </div>
        <div className="card-footer">
        <button
              type="button"
              className="btn btn-success me-2"
              id="newsUpdate"
              onClick={() => navigate(`/updateNews/${id}`)}  // Navigate to update route
            >
              Update news
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="newsDelete"
              onClick={() => deleteNews(id)}  // Correct button to delete news
            >
              Delete news
            </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNews;
