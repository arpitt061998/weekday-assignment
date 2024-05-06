import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({jobid, companyName, description, jobTitle, location, minExp, jdLink,logoUrl, maxJdSalary,minJdSalary}) => {
  const notify = () => toast("Applied!");

  return (
    <>
    <div id='jobid' className='job-card-body'>
      <div className='info-wrapper d-flex'>
        <img src={logoUrl} alt={companyName}/>
        <div className='meta-wrapper'>
          <div className='companyname'>{companyName}</div>
          <div className='role'>{jobTitle[0].toUpperCase() + jobTitle.slice(1)}</div>
          <div className='location'>{location[0].toUpperCase() + location.slice(1)}</div>
        </div>
      </div>
      {maxJdSalary && minJdSalary && <div className='est-salary'>Estimated salary: ₹{minJdSalary} - ₹{maxJdSalary} LPA </div>}
      
      {description && <><h4>About Company:</h4><div className='description'>{description}</div></>}
      <a href = {jdLink} className='view-jobs'>View Jobs</a>
      {
        minExp && <div className='exp-wrapper'>
          <div className='minexp-label'>Minimum Experience</div>
          <div className='minexp'>{minExp} years</div>
        </div>
      }
      <div className='apply-btn-wrapper'>
        <button className='apply' onClick={()=> {
          notify()
        }}>⚡ Easy Apply</button>
      </div>
    </div>
          <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="dark"
          transition: Bounce
        />
        </>
  )
}

export default Card;