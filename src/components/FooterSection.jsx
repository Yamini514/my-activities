import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const FooterSection = () => {
  return (
    <footer className="bg-indigo-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ADB Digital Solutions</h3>
            <p className="mb-2">Transforming businesses through digital innovation</p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> 123 Business Avenue, Tech Park
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> +1 234 567 8900
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> contact@adbdigital.com
              </p>
            </div>
          </div>

          {/* Author Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>Established in 2023</p>
            <p>Leading digital transformation partner</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p>© 2023 ADB Digital Solutions. All rights reserved.</p>
          <p className="text-sm mt-1">Designed & Developed by Your Name</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection