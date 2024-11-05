import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams, Navigate } from "react-router-dom";

const UpdateNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("National");
  const [subcategory, setSubcategory] = useState("Entertainment");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate(); // Updated: useNavigate instead of useHistory

  useEffect(() => {
    Axios.get(`https://localhost:44393/api/News/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setAuthor(res.data.author);
        setCategory(res.data.category);
        setSubcategory(res.data.subcategory);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

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
    Axios.put(`https://localhost:44393/api/News/${id}`, {
      id,
      title,
      description,
      author,
      category,
      subcategory,
    })
      .then(() => {
        setIsUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isUpdated) {
    return <Navigate to="/all-news" state={1} />; // Updated: Navigate instead of Redirect
  }

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-200">
      <div className="card mt-5 w-75">
        <div className="card-header">Update News</div>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">News Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="newsTitle"
                  placeholder="News Title"
                  value={title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">
                News Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="newsDescription"
                  placeholder="News Description"
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
                  placeholder="News Author"
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
                  id="newscategory"
                  value={category}
                  onChange={handleInputChange}
                  name="category"
                >
                  <option value="National">National</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">
                News SubCategory
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="newssubcategory"
                  value={subcategory}
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
                  id="updateNews"
                >
                  Update News
                </button>
              </div>
            </div>
          </form>
          {isUpdated && (
            <div className="alert alert-success" role="alert">
              News updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateNews;
