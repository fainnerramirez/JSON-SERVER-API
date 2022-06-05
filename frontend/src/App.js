import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:3000/posts");
      let data = await response.json();
      setPosts(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>List of Post</h1>
      <div>
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
}

export default App;
