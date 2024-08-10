import React from 'react';
import JobListingCard from './JobListingCard';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    // Doubt 1-: We paas dependency array as empty in useEffeect, so what does it mean and when use effect work.
    // Doubt 2-: Suppose we add a job then array will update after adding job, so how it render new job in real time. beacuse APIs call for fetching all jobs is inside useEffect and useEffect is passing a empty dependency array so how it is possible to call that APIs

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.log('Error while fetching data from JSON Server', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchJobs();
    }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListingCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListings;