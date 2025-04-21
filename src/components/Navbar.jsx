
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import { CiLight } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";



const Menu =
[
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Programs',
        link: '/programs',
          
        
    },
    {
        id: 4,
        title: 'Features',
        link: '/features', // Ensure this path matches the route for your Features page
    }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-item')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className={`text-2xl font-bold ${
            isScrolled ? 'text-indigo-950' : 'text-white'
          }`}>
            ADB Digital
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {Menu.map((item) => (
              <div key={item.id} className="relative navbar-item">
                <a
                  href={item.link}
                  className={`font-medium hover:opacity-50 transition-opacity ${
                    isScrolled ? 'text-indigo-950' : 'text-white'
                  }`}
                  onClick={() => setActiveDropdown(item.id === activeDropdown ? null : item.id)}
                >
                  {item.title}
                </a>
                {item.submenu && activeDropdown === item.id && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                    {item.submenu.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.link}
                        className="block px-4 py-2 text-indigo-950 hover:bg-indigo-100"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <button  className='bg-blue-950' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX className="text-white" /> : <HiMenu className="text-white" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center md:hidden space-y-4 mt-4 bg-white p-4 rounded-lg shadow-lg">
            {Menu.map((item) => (
              <div key={item.id} className="relative">
                <a
                  href={item.link}
                  className="font-medium text-indigo-950 hover:opacity-75 transition-opacity"
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <div className="mt-2">
                    {item.submenu.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.link}
                        className="block px-4 py-2 text-indigo-950 hover:bg-indigo-100"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar