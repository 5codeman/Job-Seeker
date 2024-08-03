import React from 'react';
import JobListingCard from './JobListingCard';

const JobListings = () => {
    // Pending call api and fetch the job data and run a loop and send job data in component and component show accordingly
    // send 3 data from here for dfirst page thing how see all jobs and impliment
    
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListingCard  />
        </div>
      </div>
    </section>
  )
}

export default JobListings;