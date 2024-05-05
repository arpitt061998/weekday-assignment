import { useState, useEffect } from 'react';

const useJobs = (limit, offset) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
      setJobs(jobData);
    };

    fetchData();
  }, [limit, offset]);

  return jobs;
};

export default useJobs;
