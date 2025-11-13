import React from 'react'

// @ts-ignore
const MentorCard = ({ name, role, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full border-4 border-pink-500 mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default MentorCard
