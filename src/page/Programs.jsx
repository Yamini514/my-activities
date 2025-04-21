import React from 'react'
import technical from '../assets/images/technical.jpg'
import sales from '../assets/images/sales.jpg'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'

const Programs = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
    <div className="container mx-auto px-4 py-16">
     
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Our Programs</h1>
      
      {/* Alternating Text and Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center animate-slideInLeft">
          <h2 className="text-2xl font-semibold mb-4">Technical Studies</h2>
          <p className="text-gray-600 mb-4">
            Explore in-depth technical courses designed to enhance your skills in software development and engineering.
          </p>
        </div>
        <img src={technical} alt="Technical Studies" className="w-full h-48 object-cover rounded-lg animate-slideInRight" />
        
        <img src={sales} alt="Sales Studies" className="w-full h-48 object-cover rounded-lg animate-slideInLeft" />
        <div className="flex flex-col justify-center animate-slideInRight">
          <h2 className="text-2xl font-semibold mb-4">Sales Studies</h2>
          <p className="text-gray-600 mb-4">
            Learn effective sales strategies and techniques to boost your career in sales and marketing.
          </p>
        </div>
      </div>
      
      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-950">Technical Studies</h3>
          <p className="text-gray-600">Explore in-depth technical courses designed to enhance your skills in software development and engineering.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-950">Sales Studies</h3>
          <p className="text-gray-600">Learn effective sales strategies and techniques to boost your career in sales and marketing.</p>
        </div>
      </div>
      
      {/* Join Now Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-gray-600 mb-8">Enroll in our programs today and take the first step towards a successful career.</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <a href="/login">Join Now</a>
        </button>

      </div>
    </div>
    <div className="bg-gray-100 py-8">
    <FooterSection />
    </div>
    </div>
  )
}

export default Programs