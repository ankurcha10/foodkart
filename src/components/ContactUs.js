import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="How can we assist you?"
                            rows="6"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-green-500"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <footer className="mt-8 text-gray-600 text-center">
                &copy; {new Date().getFullYear()} Foodkart. All Rights Reserved.
            </footer>
        </div>
    );
};

export default ContactUs;
