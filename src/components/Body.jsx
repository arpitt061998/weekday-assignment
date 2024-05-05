import { useState, useEffect } from 'react';
import Card from './Card';
import "../assets/jobcard.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector,useDispatch} from 'react-redux';
import { addJobData } from '../utils/jobSlice';

const Body = () => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const jobList = useSelector( store => store.jobs)

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
    dispatch(addJobData([...jobList, ...newJobs]))
  };

  useEffect(() => {
    fetchData(12, 0).then(initialJobs => { // fetching initial data setting offset to 0 and limit to 12.
      dispatch(addJobData(initialJobs))
      setOffset(12);
    });
  }, []);

  return (jobList?.jobData && jobList.jobList.length === 0) ? (<div>Loading...</div>) : (
    <>
    <div className='cards-wrapper'>
      {jobList.map((job) => (
        <Card key={job.jdUid} jobid={job.jdUid} companyName={job.companyName} description={job.jobDetailsFromCompany} jobTitle={job.jobRole} location={job.location} minExp={job.minExp} jdLink={job.jdLink} logoUrl={job.logoUrl} />
      ))}
    </div>
    <InfiniteScroll  // implemented infinite scroll functionality using react-infinite-scroll-library
        dataLength={jobList.length} 
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
