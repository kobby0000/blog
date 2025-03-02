import React, { useEffect, useState } from "react";
import "./randonCartegories.css";
import RandomCategoriesItems from "../randomCategoriesItems/RandomCategoriesItems";
import Loader from "../loader/Loader";
import axios from "axios";

function RandomCartegories() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
        const allPosts = response?.data || [];

        if (allPosts.length > 0) {
          // Extract unique categories
          const uniqueCategories = [...new Set(allPosts.map(post => post.category))];

          // Randomly select three categories
          const randomCategories = uniqueCategories
            .sort(() => 0.5 - Math.random()) // Shuffle categories
            .slice(1, 3); // Pick first 3

          // Filter posts that match the selected categories
          const filteredPosts = allPosts.filter(post => randomCategories.includes(post.category));

          setPosts(filteredPosts);
        }
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="latest_posts">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h2 className="center error-message">{error}</h2>
      ) : posts.length > 0 ? (
        <div className="random_posts_wrapper">
          {posts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) => (
            <RandomCategoriesItems
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={creator}
              createdAt={createdAt}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
}

export default RandomCartegories;
