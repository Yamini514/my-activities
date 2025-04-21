import React, { useState } from 'react';
import registerbg from '../assets/images/registerbackground.jpg';



function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        study: '',
        collegeName: '',
        yearOfPassingOut: '',
        resume: null,
        programType: 'free',
        track: '',
        duration: '',
        agreeTerms: false
    });

    const [activeTab, setActiveTab] = useState('personalDetails'); // Declare activeTab state
    const [errors, setErrors] = useState({}); // State for errors

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Validate field and update errors state
        if (value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            }));
        } else {
            setErrors((prevErrors) => {
                const { [name]: removedError, ...rest } = prevErrors;
                return rest;
            });
        }
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        // Add more validations as needed
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Handle form submission
        }
    };

    const handlePrev = () => {
        if (activeTab === 'educationBackground') {
            setActiveTab('personalDetails');
        } else if (activeTab === 'programSelection') {
            setActiveTab('educationBackground');
        }
    };

    const handleNext = () => {
        if (activeTab === 'personalDetails') {
            setActiveTab('educationBackground');
        } else if (activeTab === 'educationBackground') {
            setActiveTab('programSelection');
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-100"
            style={{
                backgroundImage: `url(${registerbg})`, // Use the imported background image
                backgroundSize: 'cover', // Adjust to 'contain' if you want the entire image visible without cropping
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
            }}
        >
            <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Internship Registration</h2>
                <p className="text-gray-600 mb-6">Join Srinishtha's internship program to kickstart your career</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-2 mb-4">
                        <button
                            type="button"
                            className={`flex-1 py-2 ${activeTab === 'personalDetails' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
                            onClick={() => setActiveTab('personalDetails')}
                        >
                            Personal Details
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-2 ${activeTab === 'educationBackground' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
                            onClick={() => setActiveTab('educationBackground')}
                        >
                            Education & Background
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-2 ${activeTab === 'programSelection' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
                            onClick={() => setActiveTab('programSelection')}
                        >
                            Program Selection
                        </button>
                    </div>
                    {activeTab === 'personalDetails' && (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
                                />
                                {errors.firstName && <p className="text-red-500 text-sm animate-pulse">{errors.firstName}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm animate-pulse">{errors.lastName}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
                                />
                                {errors.email && <p className="text-red-500 text-sm animate-pulse">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm animate-pulse">{errors.phoneNumber}</p>}
                            </div>
                            <div className="flex justify-between mt-4">
                                <button type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg" onClick={handlePrev} disabled>
                                    Prev
                                </button>
                                <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded-lg justify-end" onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'educationBackground' && (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700">Study *</label>
                                <input
                                    type="text"
                                    name="study"
                                    value={formData.study}
                                    onChange={handleChange}
                                    placeholder="Enter your field of study"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">College Name *</label>
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    placeholder="Enter your college name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Year of Passing Out *</label>
                                <input
                                    type="text"
                                    name="yearOfPassingOut"
                                    value={formData.yearOfPassingOut}
                                    onChange={handleChange}
                                    placeholder="Enter your year of passing out"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Resume *</label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleFileChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={handlePrev}>
                                    Prev
                                </button>
                                <button type="button" className="ml-auto py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'programSelection' && (
                        <div className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-700">Program Type *</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="programType"
                                            value="free"
                                            checked={formData.programType === 'free'}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Free Internship
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="programType"
                                            value="paid"
                                            checked={formData.programType === 'paid'}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Paid Mentorship (Premium)
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select Track *</label>
                                <select
                                    name="track"
                                    value={formData.track}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Choose your internship track</option>
                                    <option value="track1">Track 1</option>
                                    <option value="track2">Track 2</option>
                                    <option value="track3">Track 3</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Program Duration *</label>
                                <select
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select program duration</option>
                                    <option value="1month">1 Month</option>
                                    <option value="3months">3 Months</option>
                                    <option value="6months">6 Months</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    I agree to the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a> and <a href="#" className="text-blue-500 hover:underline">privacy policy</a>
                                </label>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={handlePrev}>
                                    Prev
                                </button>
                                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                                    Complete Registration
                                </button>
                            </div>
                        </div>
                    )}
                </form>
                <p className="mt-4 text-center text-gray-600">Already registered? <a href="/login" className="text-blue-500 hover:underline">Login here</a></p>
            </div>
        </div>
    );
}

export default Register;