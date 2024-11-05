import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

const AllNews = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();  // Add useNavigate hook

  useEffect(() => {
    display();
  }, []);

  useEffect(() => {
    if (location.state === 1) {
      Axios.get("https://localhost:44393/api/News")
        .then((res) => {
          setNews(res.data);
        })
        .catch((err) => {
          console.warn(err);
        });
      location.state = 0;
    }
  }, [location.state]);

  const display = () => {
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const deleteNews = (id) => {
    Axios.delete(`https://localhost:44393/api/News/${id}`)
      .then((res) => {
        display();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const searchSpace = (event) => {
    const value = event.target.value;
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        const filteredNews = res.data.filter((item) =>
          [item.title, item.author, item.category, item.subcategory]
            .some(field => field.toLowerCase().includes(value.toLowerCase()))
        );
        setNews(filteredNews);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // Function to navigate to ViewNews page with the news ID
  const viewNews = (id) => {
    navigate(`/viewNews/${id}`);  // Navigate to the ViewNews component
  };

  return (
    <div>
      <div className="card m-5">
        <div className="card-body">
          <input
            onChange={searchSpace}
            name="searchbar"
            id="searchBar"
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      {news.map((item) => (
        <div key={item.id} className="card w-85 m-5">
          <div className="card-body">
            <h5 className="card-title" id="newsTitle">
              {item.title}
            </h5>
            <small className="text-muted" id="newsCreatedAt">
              Created on: {item.date},{" "}
            </small>
            <small className="text-muted" id="newsCategory">
              Category: {item.category},{" "}
            </small>
            <small className="text-muted" id="newsSubCategory">
              SubCategory: {item.subcategory},{" "}
            </small>
            <small className="text-muted" id="newsAuthor">
              Author: {item.author}
            </small>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-primary me-2"
              id="newsView"
              onClick={() => viewNews(item.id)}  // Corrected to navigate instead of deleting
            >
              View news
            </button>
            <button
              type="button"
              className="btn btn-success me-2"
              id="newsUpdate"
              onClick={() => navigate(`/updateNews/${item.id}`)}  // Navigate to update route
            >
              Update news
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="newsDelete"
              onClick={() => deleteNews(item.id)}  // Correct button to delete news
            >
              Delete news
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNews;

