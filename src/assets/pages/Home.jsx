import React from 'react'
import Navbar from '../components/Navbar'
import MentorCard from '../components/MentorCard'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, MessageCircle, Compass } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24 space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f43f5e]/10 via-[#db2777]/10 to-[#ef4444]/10 blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] bg-clip-text text-transparent">
          A Next Gen Community of Mentors and Toppers
        </h1>
        <h2 className="text-lg md:text-2xl max-w-4xl text-gray-600">
          Boost your NEET and IIT-JEE preparation with guidance from India’s top achievers. Exprto gives you direct access to the best mentors and toppers.
        </h2>

        <button className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-md">
          Get Started
        </button>
      </div>

      {/* Mentorship Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl md:text-5xl text-center font-semibold mb-12">
          What mentorship from{' '}
          <span className="font-bold bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] bg-clip-text text-transparent">
            Medico
          </span>{' '}
          will provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <GraduationCap className="mx-auto text-[#db2777] mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">1:1 Mentorship</h3>
            <p className="text-gray-600 text-sm">Learn directly from NEET & IIT-JEE toppers to improve your strategy.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <MessageCircle className="mx-auto text-[#db2777] mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">Live Doubt Solving</h3>
            <p className="text-gray-600 text-sm">Clear your doubts instantly with guided support.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <Users className="mx-auto text-[#db2777] mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">Friendly Mentors</h3>
            <p className="text-gray-600 text-sm">Supportive mentors who guide you like a friend.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <Compass className="mx-auto text-[#db2777] mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">Top Study Roadmaps</h3>
            <p className="text-gray-600 text-sm">Follow structured plans designed by toppers for guaranteed progress.</p>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <h2 className="text-center text-5xl font-bold mb-12">Meet Our Mentors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <MentorCard
            name="Dr. Priya Sharma"
            role="NEET Topper 2022"
            image="/images/mentor1.jpg"
            description="AIR 12 in NEET 2022, now mentoring future toppers with proven strategies."
          />
          <MentorCard
            name="Rohan Mehta"
            role="IIT Bombay, AIR 45 (JEE)"
            image="/images/mentor2.jpg"
            description="Helping students simplify Physics and improve problem-solving speed."
          />
          <MentorCard
            name="Ananya Patel"
            role="AIIMS Delhi"
            image="/images/mentor3.jpg"
            description="Expert in Biology & Chemistry with a passion for teaching."
          />
          <MentorCard
            name="Arjun Gupta"
            role="IIT Delhi, Mentor"
            image="/images/mentor4.jpg"
            description="Guiding JEE aspirants through smart learning & strategic revision."
          />
        </div>

        <div className="text-center mt-12">
          <Link
            to="/login"
            className="inline-block text-xl font-semibold bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white rounded-full px-8 py-3 shadow-md hover:scale-105 transition-all duration-300"
          >
            Connect Now
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-pink-50 via-white to-gray-100 py-20 px-8">
  <div className="text-center mb-12">
    <h1 className="text-4xl font-semibold text-gray-800">How to Get Started?</h1>
    <h2 className="text-lg text-gray-600 mt-3">
      In just 4 simple steps, you can start your own mentorship.
    </h2>
    <Link
            to="/login"
            className="inline-block mt-4 text-xl font-semibold bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white rounded-full px-8 py-3 shadow-md hover:scale-105 transition-all duration-300"
          >
            Take a free trial
          </Link>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="text-pink-500 text-3xl font-bold mb-2">1</div>
      <h3 className="text-xl font-semibold text-gray-800">Register / Login</h3>
      <p className="text-gray-600 mt-2">Fill the form and select your mentor.</p>
    </div>

    {/* Example for future steps */}
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="text-pink-500 text-3xl font-bold mb-2">2</div>
      <h3 className="text-xl font-semibold text-gray-800">Schedule a call</h3>
      <p className="text-gray-600 mt-2">Choose your preferred time slot easily.</p>
    </div>
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="text-pink-500 text-3xl font-bold mb-2">3</div>
      <h3 className="text-xl font-semibold text-gray-800">Make a payment</h3>
      <p className="text-gray-600 mt-2">Choose a payment method and pay</p>
    </div>
     <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="text-pink-500 text-3xl font-bold mb-2">4</div>
      <h3 className="text-xl font-semibold text-gray-800">Connect to mentor</h3>
      <p className="text-gray-600 mt-2">You will receive a call back from the ranker at the selected date.</p>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Home



