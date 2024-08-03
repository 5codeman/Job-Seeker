import React from 'react';
// Here we use Both props and content of wrapper component 
const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card;