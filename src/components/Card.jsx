import React from 'react'

const Card = ({jobid, companyName, description, jobTitle, location, minExp, jdLink,logoUrl}) => {
  console.log(jobid);
  return (
    <div id='jobid' className='job-card-body'>
      <div className='info-wrapper d-flex'>
        <img src={logoUrl} alt={companyName}/>
        <div className='meta-wrapper'>
          <div className='companyname'>{companyName}</div>
          <div className='role'>{jobTitle[0].toUpperCase() + jobTitle.slice(1)}</div>
          <div className='location'>{location[0].toUpperCase() + location.slice(1)}</div>
        </div>
      </div>
      <div className='description'>{description}</div>
      <div className='exp-wrapper'>
        <div>Minimum Experience</div>
        <div className='minexp'>{minExp}</div>
      </div>
      <button className='apply' onClick={()=> {
        console.log("*********")
      }}>Apply</button>
    </div>
  )
}

export default Card;