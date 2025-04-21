import React, { useState, useEffect } from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaLaptopCode, FaProjectDiagram, FaHandshake, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import background from '../assets/images/backgroundimage.jpg'
import technical from '../assets/images/technical.jpg'
import sales from '../assets/images/sales.jpg'

const Home = () => {
  const [counts, setCounts] = useState({
    interns: 0,
    mentors: 0,
    placements: 0
  });

  const [navbarBg, setNavbarBg] = useState('rgba(0,0,0,0)'); // State for navbar background

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarBg('rgba(0, 0, 0, 0.5)'); // Change color based on scroll position
      } else {
        setNavbarBg('rgba(0, 0, 0, 0.8)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const finalCounts = {
    interns: 150,
    mentors: 45,
    placements: 120
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        interns: prev.interns < finalCounts.interns ? prev.interns + 1 : prev.interns,
        mentors: prev.mentors < finalCounts.mentors ? prev.mentors + 1 : prev.mentors,
        placements: prev.placements < finalCounts.placements ? prev.placements + 1 : prev.placements
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const courses = [
    {
      icon: <FaLaptopCode className="text-4xl text-indigo-600 mb-4" />,
      title: "Technical Studies",
      description: "Explore in-depth technical courses designed to enhance your skills in software development and engineering.",
      image: technical // Use the imported technical image
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-indigo-600 mb-4" />,
      title: "Sales Studies",
      description: "Learn effective sales strategies and techniques to boost your career in sales and marketing.",
      image: sales // Use the imported sales image
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "This program has transformed my career. The mentors are top-notch!",
      position: "Software Engineer at TechCorp"
    },
    {
      name: "Jane Smith",
      feedback: "I gained invaluable skills and landed my dream job thanks to this internship.",
      position: "Data Scientist at DataWorks"
    },
    {
      name: "Sam Wilson",
      feedback: "The hands-on projects were challenging but rewarding. Highly recommend!",
      position: "Product Manager at Innovate Inc."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const [visibleCourseIndex, setVisibleCourseIndex] = useState(null); // State to track visible course

  const toggleVisibility = (index) => {
    setVisibleCourseIndex(visibleCourseIndex === index ? null : index);
  };

  return (
    <div>
        <Navbar style={{ backgroundColor: navbarBg, zIndex: 3 }} />

        <div className="relative w-full px-3">
            <img src={background} className="w-full min-h-[300px] md:h-[600px] lg:h-screen object-center object-cover transition-all duration-300" alt="Background" loading="eager" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-6 text-center opacity-0 animate-[fadeIn_1s_ease-in_forwards] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                  Empowering Future Tech Leaders
                </h1>
                <p className="text-base md:text-xl mb-8 text-center max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                  Join our comprehensive training programs and kickstart your career in technology
                </p>
              </div>
              <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-[fadeInUp_1s_ease-in_1s_forwards]">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <a href='/login'> Get Started</a>
                </button>
              </div>
            </div>
        </div>
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-950"> With us </h1>
            <p className="text-xl mb-12 text-gray-700">Transforming businesses through innovative digital solutions</p>
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-950">Digital Strategy</h3>
                <p className="text-gray-600">Comprehensive digital transformation strategies tailored to your business needs</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-950">Technical Solutions</h3>
                <p className="text-gray-600">Custom software development and technical infrastructure optimization</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-950">Business Growth</h3>
                <p className="text-gray-600">Accelerate your business growth with our proven digital methodologies</p>
              </div>
            </div>
          </div>
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-950 mb-12 relative">
              Our Achievements
              <span className="block h-1 w-40  mx-auto mt-4"></span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Interns Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-50">
                <FaUserGraduate className="text-5xl text-indigo-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-indigo-950 mb-2">Total Interns</h3>
                <p className="text-4xl font-bold text-indigo-600">{counts.interns}+</p>
                <p className="text-gray-600 mt-2">Active Learners</p>
              </div>

              {/* Mentors Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-50">
                <FaChalkboardTeacher className="text-5xl text-indigo-600 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-indigo-950 mb-2">Expert Mentors</h3>
                <p className="text-4xl font-bold text-indigo-600">{counts.mentors}+</p>
                <p className="text-gray-600 mt-2">Industry Experts</p>
              </div>

              {/* Placements Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-50">
                <FaBriefcase className="text-5xl text-indigo-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-indigo-950 mb-2">Successful Placements</h3>
                <p className="text-4xl font-bold text-indigo-600">{counts.placements}+</p>
                <p className="text-gray-600 mt-2">Career Launches</p>
              </div>

              {/* Why Choose Our Internship Program */}
              
            </div >
            {/* Our Studies Section */}
            <div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-950 mb-12 relative">
               We provide 
              <span className="block h-1 w-40  mx-auto mt-4"></span>
            </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-xl" /> {/* Adjusted to rounded-t-xl for top corners */}
                  <div className="p-4 flex flex-col items-center justify-center">
                    {course.icon}
                    <h3 className="text-xl font-bold text-indigo-950 mb-3">{course.title}</h3>
                    <p className="text-gray-600 text-center">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-950 mb-12 relative">
              Testimonials
              <span className="block h-1 w-40  mx-auto mt-4"></span>
            </h1>
            <div className="flex justify-center">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md max-w-xl text-center">
                <p className="text-lg italic text-gray-700 mb-4">
                  "{testimonials[currentTestimonial].feedback}"
                </p>
                <h3 className="text-xl font-bold text-indigo-950">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Hero Content */}
         
        <FooterSection/>
    </div>
    </div>
  )
}

export default Home