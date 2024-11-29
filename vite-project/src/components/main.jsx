import React from "react";
import Card from "./card";
import "./main.css";

export default function Main({ posts }) {
  const tags = [];

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  return (
    <>
      <main className="main">
        <div className="filter">
          {tags.map((tag, index) => (
            <div key={index} className="filter-div">
              <button className="btn btn-primary">{tag}</button>
            </div>
          ))}
        </div>

        <div className="main-div">
          {posts
            .filter((post) => post.published)
            .map((post, index) => (
              <div key={index} className="main-div">
                <Card post={post} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
