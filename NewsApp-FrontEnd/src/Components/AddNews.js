import React, { useState } from "react";
import Axios from "axios";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("National");
  const [subcategory, setSubcategory] = useState("Entertainment");
  const [isAdded, setIsAdded] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "subcategory":
        setSubcategory(value);
        break;
      default:
        break;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const date = new Date().toISOString();
    Axios.post("https://localhost:44393/api/News", {
      title,
      description,
      author,
      date,
      category,
      subcategory,
    })
      .then((res) => {
        if (res) {
          setIsAdded("News Details added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <div className="d-flex justify-content-center align-items-center vh-200">
      <div className="card mt-5 w-75">
        <div className="card-header">Add News</div>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="newsTitle"
                  value={title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News Description</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="newsDescription"
                  value={description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News Author</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="newsAuthor"
                  value={author}
                  onChange={handleInputChange}
                  name="author"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News Category</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  value={category}
                  id="newscategory"
                  onChange={handleInputChange}
                  name="category"
                >
                  <option value="National">National</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News SubCategory</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  value={subcategory}
                  id="newssubcategory"
                  onChange={handleInputChange}
                  name="subcategory"
                >
                  <option value="Entertainment">Entertainment</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="addNewsBtn"
                >
                  Add News
                </button>
              </div>
            </div>
          </form>
          {isAdded && <div className="alert alert-success">{isAdded}</div>}
        </div>
      </div>
    </div>
  );
};

export default AddNews;

