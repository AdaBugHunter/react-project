import { useState } from "react";
import usePosts from "../../hooks/usePosts";

function PostsList() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const { posts, loading, error } = usePosts();

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <section>
      <form>
        <div>
          <input
            type="text"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input
            type="text"
            placeholder="UserId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      </form>

      {error && (
        <p role="alert" style={{ color: "red" }}>
          Error: {error}
        </p>
      )}

      <div>
        {posts?.slice(0, 5).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
