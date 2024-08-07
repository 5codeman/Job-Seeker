import React from 'react'
import { FaMapMarker } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobListingCard = () => {
  // let description = job.description; // do this after api call
  let description = "We are seeking talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...";

  let temp = description;
  
  const [showFullDescription, setShowFullDescription] = useState(false);
  if(!showFullDescription) {
      temp = description.slice(0, 93) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full-Time</div>
                <h3 className="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div className="mb-5">
               {temp}
              </div>

              <button className='text-indigo-500 mb-5 hover:text-indigo-600' onClick={() => {
                // We can dirctly paas value instead of function
                setShowFullDescription((prevState) => {
                  prevState = !prevState;
                  return prevState;
                })
              }}>{showFullDescription ? "Less" : "More"}</button>

              <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                <FaMapMarker className='inline text-lg mb-1 mr-1' />
                  Boston, MA
                </div>
                <Link
                  to="/pending"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

export default JobListingCard