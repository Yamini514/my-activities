
import React, { useState } from 'react'
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
        link: '#',
        submenu: [
            {
                title: 'Technical',
                link: '/technical'
            },
            {
                title: 'Sales',
                link: '/sales'
            }
        ]
    },
    {
        id: 4,
        title: 'Features',
        link: '/features', 
    }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  return (
    <div className='bg-indigo-950'>
        <div className='container flex justify-between place-items-center dark:bg-white dark: text-black relative z-40'>
            {/* Logo  */}
            <div className='w-25 px-3 py-3'>
                <img src={logo} alt="logo" />
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-5 justify-between'>
                {
                    Menu.map((item, index) => (
                        <div key={index} className='text-white relative'>
                            {item.submenu ? (
                                <div>
                                    <button 
                                        className='hover:text-blue-700 transition-colors duration-300'
                                        onMouseEnter={() => setActiveDropdown(index)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {item.title}
                                    </button>
                                    {activeDropdown === index && (
                                        <div 
                                            className='absolute top-full left-0 bg-indigo-900 py-2 min-w-[150px] rounded-md shadow-lg z-50'
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.link}
                                                    className='block px-4 py-2 text-white hover:bg-indigo-800 transition-colors duration-300'
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a 
                                    href={item.link} 
                                    className='hover:text-blue-700 transition-colors duration-300 active:text-green-400'
                                >
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))
                }
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white text-2xl'>
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Theme change */}
            <div className='hidden md:block'>
                <CiLight className='text-white' />
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className='md:hidden bg-indigo-900'>
                <div className='flex flex-col items-center py-4 space-y-4'>
                    {Menu.map((item, index) => (
                        <div key={index} className='w-full text-center'>
                            {item.submenu ? (
                                <div className='flex flex-col items-center'>
                                    <button 
                                        className='text-white hover:text-blue-700 transition-colors duration-300 py-2'
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === index ? null : index)}
                                    >
                                        {item.title}
                                    </button>
                                    {activeMobileDropdown === index && (
                                        <div className='flex flex-col items-center bg-indigo-800 w-full py-2'>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.link}
                                                    className='text-white hover:text-blue-700 transition-colors duration-300 py-2'
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setActiveMobileDropdown(null);
                                                    }}
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    href={item.link}
                                    className='text-white hover:text-blue-700 transition-colors duration-300 block py-2'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))}
                    <CiLight className='text-white text-2xl' />
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar