import React from "react";
import "./card.css";

export default function Card({ post }) {
  return (
    <>
      <div className="card">
        <img src={post.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <a href="#" className="btn btn-warning">
            Leggi di più
          </a>
        </div>
      </div>
    </>
  );
}
