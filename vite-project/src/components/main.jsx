import React from "react";
import Card from "./card";
import "./main.css";

export default function Main({ posts }) {
  return (
    <>
      <main className="main">
        {posts
          .filter((post) => post.published)
          .map((post, index) => (
            <div key={index} className="main-div">
              <Card post={post} />
            </div>
          ))}
      </main>
    </>
  );
}
