import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex m-5 mt-6 justify-around'>
        <div>
           <h1 className="font-bold text-2xl "> Medico-guide</h1>
        </div>
        <div className=''>
            <ul className="flex gap-8 items-center text-xl font-semibold">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mentor">Become a Mentor</Link>
                </li>
                <li className='bg-rose-500 rounded-md px-3 py-1 border hover:bg-rose-600'>
                    <Link className='text-white' to="/guide">Get Mentorship</Link>
                </li>
                <li className='bg-rose-500 rounded-md px-3 py-1 border hover:bg-rose-600'>
                    <Link className="text-white" to="/login">Login</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar