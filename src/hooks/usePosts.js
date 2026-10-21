import { useEffect, useState } from "react";
import { getPosts } from "../api/postApi"; 

function usePosts() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function fetchPosts() {
      try {
        const data = await getPosts(); 

        if (active) {
          setPosts(data || []); 
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      active = false;
    };
  }, []);

  return { posts, loading, error };
}

export default usePosts;