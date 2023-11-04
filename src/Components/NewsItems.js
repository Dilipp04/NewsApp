import React from "react";

const NewsItems =(props)=> {
    let { title, desc, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card m-2 " style={{ width: "22rem" }}>
          <span
            className="position-absolute top-0 start-100 badge rounded-pill bg-danger"
            style={{ transform: "translate(-108%,-50%)" }}
          >
            {source}
          </span>
          <img src={imageUrl} className="img-fluid card-img-top"></img>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toDateString()}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Details
            </a>
          </div>
        </div>
      </>
    );
  }


export default NewsItems;