import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        {posts.length > 0 ? (
          <div>{posts.map((post)=>
            <div className="my-4" key={post.id}>
              <div className="d-flex mb-1 mx-2">
                <img className="dp rounded-circle me-2" src={post.user.profile_pic} alt="Profile Pic" />
                <h6 className="mt-1">{post.user.username}</h6>
              </div>
              <div>
                <img className="post rounded-3" src={post.image} alt="Post Pic" />
              </div>
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div><b>{post.likes} Likes</b></div>
              <p>{post.caption}</p>
            </div>
          )}</div>
        ) : (
          <div>Loading Posts</div>
        )}
      </div>
    </>
  );
}

export default Posts;
