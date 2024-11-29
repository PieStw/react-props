import React from "react";
import img from "../assets/img.jpg";
import "./card.css";

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Titolo del post</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero,
            consequatur nisi optio quidem quae dignissimos quibusdam ab dicta
            voluptatibus perspiciatis, error, cumque quod distinctio nostrum
            ratione earum deleniti illo!
          </p>
          <a href="#" className="btn btn-warning">
            Leggi di più
          </a>
        </div>
      </div>
    </>
  );
}
