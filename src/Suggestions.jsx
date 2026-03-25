import React, { useState } from 'react'
import useFetch from './customHooks/useFetch'

function Suggestions() {
    const {data: profile, loading: profileLoading, error: profileError} = useFetch("http://localhost:3000/profile");
    const {data: suggestions, loading: suggestionsLoading, error: suggestionsError} = useFetch("http://localhost:3000/suggestions");
  
  return (
    <>
    <div className='suggestion ms-10 mt-5 '>
      {profile &&  
      <div className='my-4 d-flex'>
        <img className='rounded-circle dp-suggestion me-2' src={profile.profile_pic} alt="Profile Pic" />
        <h6 className='mt-1'>{profile.username}</h6>
        <small className='ms-auto text-primary'>Switch</small>
      </div>}

      <div className='d-flex'>
        <p>Suggested for You</p>
        <b className='ms-auto'>See all</b>
      </div>

      {suggestions && suggestions.map((sug)=>(
        <div className='d-flex my-3'>
          <img className='dp-suggestion rounded-circle me-2' src={sug.profile_pic} alt="" />
          <h6 className='mt-1'>{sug.username}</h6>
          <small className='ms-auto text-primary'>Follow</small>
        </div>
      ))}
    </div>

    
    </>
  )
}

export default Suggestions