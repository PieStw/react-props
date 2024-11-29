import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { posts } from "./data/posts";

function App() {
  const [postList, setPost] = useState(posts);

  return (
    <>
      <Header />
      <Main posts={postList} />
      <Footer />
    </>
  );
}

export default App;
