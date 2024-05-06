import { useState, useEffect } from 'react';
import Card from './Card';
import "../assets/jobcard.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector,useDispatch} from 'react-redux';
import { addJobData,updateFilteredJobData } from '../utils/jobSlice';

const Body = () => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const {jobData:jobList,filteredJob:filteredJob} = useSelector( store => store.jobs)
  const filtersList = useSelector(store => store.filters);
  
  const fetchData = async (limit, offset) => {
    const body = JSON.stringify({
      limit: limit,
      offset: offset
    });

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    });

    const jobData = await response.json();
    return jobData.jdList;
  };

  const fetchMoreData = async () => {
    const newJobs = await fetchData(12, offset);
    setOffset(offset + 12); // Increment offset for the next fetch
    const updatedJobList = [...jobList, ...newJobs];
    const filteredJobs = Object.values(filtersList).some(value => value !== "") ? updatedJobList.filter(job => {
      // Check each filter condition
      return Object.entries(filtersList).every(([key, value]) => {
        if (key === "jobRole" && value !=="") {
          return job.jobRole.toLowerCase() === value.toLowerCase()
        }
        else if (key === "minExp" && value !=="") {
          return job.minExp >= parseInt(value);
        }
        else if(key === "searchedText" && value!=""){
          return job.companyName.toLowerCase().includes(value.toLowerCase());
        }

        // Handle additional filters if needed
        return true; // Return true for unhandled filters
      });
    }) : updatedJobList;

    dispatch(addJobData(updatedJobList));
    dispatch(updateFilteredJobData(filteredJobs))
  };

  useEffect(() => {
    fetchData(12, 0).then(initialJobs => { // fetching initial data setting offset to 0 and limit to 12.
      dispatch(addJobData(initialJobs))
      dispatch(updateFilteredJobData(initialJobs));
      setOffset(12);
    });
  }, []);

  useEffect(()=> {
    const filteredJobs = Object.values(filtersList).some(value => value !== "") ? jobList.filter(job => {
      // Check each filter condition
      return Object.entries(filtersList).every(([key, value]) => {
        if (key === "jobRole" && value !=="") {
          return job.jobRole.toLowerCase() === value.toLowerCase()
        }
        else if (key === "minExp" && value !=="") {
          return job.minExp >= parseInt(value);
        }
        else if(key === "searchedText" && value!="") {
          return job.companyName.toLowerCase().includes(value.toLowerCase());
        }

        // Handle additional filters if needed
        return true; // Return true for unhandled filters
      });
    }) : jobList;
    dispatch(updateFilteredJobData(filteredJobs))
  },[filtersList]);

  return (filteredJob && filteredJob.length === 0) ? (<div>Loading...</div>) : (
    <>
    <div className='cards-wrapper'>
      {filteredJob.map((job) => (
        <Card key={job.jdUid} jobid={job.jdUid} companyName={job.companyName} description={job.jobDetailsFromCompany} jobTitle={job.jobRole} location={job.location} minExp={job.minExp} jdLink={job.jdLink} logoUrl={job.logoUrl} maxJdSalary = {job.maxJdSalary} minJdSalary={job.minJdSalary} />
      ))}
    </div>
    <InfiniteScroll  // implemented infinite scroll functionality using react-infinite-scroll-library
      dataLength={filteredJob.length} 
      next={fetchMoreData}
      hasMore={true}
      loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
    </InfiniteScroll>
    </>
  );
};

export default Body;
