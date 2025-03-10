import React, { useEffect, useState } from 'react';
import './latestPosts.css';
import LatestPostItems from '../latestpostsitems/LatestPostItems';
import Loader from '../loader/Loader';
import axios from 'axios';

function LatestsPosts() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);

        // Ensure posts are sorted by date (newest first) before slicing the first 3
        const sortedPosts = response?.data
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        setLatestPosts(sortedPosts || []);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <section id="latest_posts">
      <h2 className="right_title">Latest Posts</h2>
      {latestPosts.length > 0 ? (
        <div className="latest_posts_wrapper">
          {latestPosts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) => (
            <LatestPostItems
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

export default LatestsPosts;
