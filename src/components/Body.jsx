import { useState, useEffect } from 'react';
import Card from './Card';
import "../assets/jobcard.css"

const Body = () => {
  const [jobs, setJobs] = useState([ ]);

  const fetchData = async () => {
    const body = JSON.stringify({
      limit: 10,
      offset: 0
    });

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    });

    const jobData = await response.json();
    setJobs(jobData.jdList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (jobs && jobs.length === 0)  ? (<div>Loading ...</div>) : (
    <div className='cards-wrapper'>
      {jobs.map((job) => (
        <Card key = {job.jdUid} jobid = {job.jdUid} companyName = {job.companyName} description = {job.jobDetailsFromCompany} jobTitle = {job.jobRole} location ={job.location} minExp = {job.minExp} jdLink = {job.jdLink} logoUrl = {job.logoUrl}/>
      ))}
    </div>
  );
};

export default Body;