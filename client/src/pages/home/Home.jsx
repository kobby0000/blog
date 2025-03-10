import React, { useState, useEffect } from 'react';
import "./home.css";
// import Post from '../../components/post/Post';
// import PostItem from '../../components/postitem/PostItem';
// import LatestPostItems from '../../components/latestpostsitems/LatestPostItems';
import RandomCartegories from '../../components/randomCartigories/RandomCartegories';
import Loader from '../../components/loader/Loader';
import axios from 'axios';
const LatestPostItems = React.lazy(() => import('../../components/latestpostsitems/LatestPostItems'));
const Post = React.lazy(() => import('../../components/post/Post'))

function Home() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
        
        // Ensure posts are sorted by date (newest first) before slicing the first 5
        const sortedPosts = response?.data
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sorting
          .slice(0, 3); // Get only the latest 5

        setLatestPosts(sortedPosts || []);
      } catch (err) {
        console.error("Failed to fetch latest posts:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id='home'>
      <div className="container home_wapper">

      {/* Full blog posts section */}
      <div className="left">
      <RandomCartegories />
      <div className="all_posts">
        <p>All Posts</p>
      <Post />
      </div>
      </div>

      <article className='right'>
        <h2 className="right_title">Latest Posts</h2>
        {latestPosts.length > 0 ? (
          <div >
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
      </article>
      </div>    
    </div>
  );
}

export default Home;
