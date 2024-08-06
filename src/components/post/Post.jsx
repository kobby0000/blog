import React, { useState } from 'react';
import "./post.css";
import PostItem from '../postitem/PostItem';

// images
import image1 from "../../assets/images/clubbing.jpg";
import image2 from "../../assets/images/music.jpg";


const DummyPosts = [
{
  id: "1",
  image: image1,
  category: "Entertainment",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
{
  id: "2",
  image: image1,
  category: "Education",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
{
  id: "3",
  image: image1,
  category: "Agriculture",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
{
  id: "4",
  image: image2,
  category: "Politics",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
{
    id: "5",
    image: image1,
    category: "Politics",
    title:"This is the title of the first post",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
    authorId:"3"
  },
{
  id: "6",
  image: image1,
  category: "Art",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
{
  id: "7",
  image: image1,
  category: "Projects",
  title:"This is the title of the first post",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore animi nemo laudantium est sint alias quidem neque odio molestiae.",
  authorId:"3"
},
]

function Post() {
    const [posts, setPosts] = useState(DummyPosts)

  return (
    <section id="posts">
            <div className="post_wrapper">
            {posts.map((post) => (
        <PostItem
          key={post.id}
          postID={post.id}
          image={post.image}
          category={post.category}
          title={post.title}
          description={post.desc}
          authorID={post.authorId}
        />
      ))}
            </div>
       
    </section>
  )
}

export default Post