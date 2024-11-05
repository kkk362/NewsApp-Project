import React, { useState, useEffect } from "react";
import Axios from "axios";

const TopNews = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("National");
  const [subcategory, setSubcategory] = useState("Entertainment");

  useEffect(() => {
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const changeCategory = (cat) => {
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        const filteredNews = res.data.filter((item) => item.category === cat);
        setNews(filteredNews);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const changeSubCategory = (subcat) => {
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        const filteredNews = res.data.filter(
          (item) => item.subcategory === subcat
        );
        setNews(filteredNews);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const clearFilters = () => {
    Axios.get("https://localhost:44393/api/News")
      .then((res) => {
        setNews(res.data);  // Show all news items
        setCategory("");    // Reset category
        setSubcategory(""); // Reset subcategory
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="row mt-5 ms-5">
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h6>Category: {category}</h6>
            <button
              className="badge badge-light text-dark me-2"
              onClick={() => {
                setCategory("National");
                changeCategory("National");
              }}
              id="national"
            >
              National
            </button>
            <button
              className="badge badge-light text-dark"
              onClick={() => {
                setCategory("International");
                changeCategory("International");
              }}
              id="international"
            >
              International
            </button>
            <hr />
            <h6>SubCategory: {subcategory} </h6>
            <button
              className="badge badge-light text-dark me-2"
              onClick={() => {
                setSubcategory("Entertainment");
                changeSubCategory("Entertainment");
              }}
              id="entertainment"
            >
              Entertainment
            </button>
            <button
              className="badge badge-light text-dark me-2"
              onClick={() => {
                setSubcategory("Technology");
                changeSubCategory("Technology");
              }}
              id="technology"
            >
              Technology
            </button>
            <button
              className="badge badge-light text-dark"
              onClick={() => {
                setSubcategory("Business");
                changeSubCategory("Business");
              }}
              id="business"
            >
              Business
            </button>
            <hr />
            {/* Clear Filters Button */}
            <button
              className="btn btn-warning"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-9">
        {news.map((item) => (
          <div key={item.id} className="col-sm-9 mb-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" id="newsTitle">
                  {item.title}
                </h5>
                <small className="text-muted" id="newsCreatedAt">
                  Created on {item.date},{" "}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
