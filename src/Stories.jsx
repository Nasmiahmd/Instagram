import React, { useState } from 'react'
import useFetch from './customHooks/useFetch';

function Stories() {

  const {data:stories, loading: storiesLoading, error: storiesError} = useFetch("http://localhost:3000/story");

  console.log(stories)
  return (
    <>
      <div className="d-flex">
        {stories && stories.map((story)=>(
          <div className="mx-2 text-center" key={story.id}>
            <div className="story-gradient">
              <img className="rounded-circle dp-story" src={story.user.profile_pic} alt="Story Pic" />
            </div>
            <small className="text-truncate" style={{width: "50px"}}>{story.user.username}</small>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default Stories