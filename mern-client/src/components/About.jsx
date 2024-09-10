import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-8">
    <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to <strong>Bookify</strong>, your one-stop destination for finding the best books across genres and interests. We are passionate about connecting readers with books that inspire, educate, and entertain. Whether you're a fiction enthusiast, a non-fiction devotee, or just love collecting knowledge, we have something for everyone.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        At <strong>Bookify</strong>, we believe that reading has the power to change lives. Our carefully curated collection includes everything from timeless classics to contemporary bestsellers. Our mission is to provide a seamless and enjoyable experience for book lovers around the world, offering easy access to a diverse range of titles at competitive prices.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        We are more than just a book store; we are a community of readers and writers. Stay connected with us to discover new arrivals, top recommendations, and exclusive deals.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Thank you for choosing <strong>Bookify</strong> to embark on your reading journey. Let's explore the world of books together!
      </p><p className='text-center'text-center>Built with 💛 by JAGADISH SINGH PUNDIR</p>
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
         Happy Shopping !
        </button>

      </div>
    </div>
  </div>
  )
}

export default About