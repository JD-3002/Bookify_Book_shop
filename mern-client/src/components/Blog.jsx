import React from 'react'

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-8">
    <div className="max-w-6xl bg-white shadow-lg rounded-lg p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Blog</h1>
      
      <div className="space-y-12">
        {/* Blog Post 1 */}
        <article>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">The Joy of Reading: How Books Enrich Our Lives</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Reading has always been one of the most fulfilling activities a person can undertake. Whether you’re diving into the depths of a mystery novel, soaking up knowledge from non-fiction, or getting lost in the beauty of poetic verses, books offer something that enriches our minds, sharpens our imagination, and brings a profound sense of joy.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In today’s fast-paced digital world, taking the time to sit down with a good book is an act of self-care. Books allow us to escape reality for a little while and enter worlds filled with endless possibilities. The mental stimulation and relaxation from reading are essential for a balanced, fulfilling life.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Bookify</strong>, we’re passionate about spreading the joy of reading and making quality literature accessible to all. Whether you’re a seasoned reader or just getting started, we’ve got the perfect selection to spark your curiosity and inspire you.
          </p>
        </article>

        {/* Blog Post 2 */}
        <article>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Top 10 Books Every Avid Reader Should Own</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Building a personal library is one of the most exciting journeys for any book lover. A well-curated collection speaks to your tastes and passions. But what are the must-haves for any book collection? Here are ten timeless books every reader should consider adding to their shelves:
          </p>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-2">1. <em>To Kill a Mockingbird</em> by Harper Lee</li>
            <li className="mb-2">2. <em>1984</em> by George Orwell</li>
            <li className="mb-2">3. <em>Pride and Prejudice</em> by Jane Austen</li>
            <li className="mb-2">4. <em>The Catcher in the Rye</em> by J.D. Salinger</li>
            <li className="mb-2">5. <em>The Great Gatsby</em> by F. Scott Fitzgerald</li>
            <li className="mb-2">6. <em>Moby-Dick</em> by Herman Melville</li>
            <li className="mb-2">7. <em>The Lord of the Rings</em> by J.R.R. Tolkien</li>
            <li className="mb-2">8. <em>The Road</em> by Cormac McCarthy</li>
            <li className="mb-2">9. <em>Jane Eyre</em> by Charlotte Brontë</li>
            <li>10. <em>The Odyssey</em> by Homer</li>
          </ol>
          <p className="text-gray-700 text-lg leading-relaxed">
            These are just a few of the books that have left an indelible mark on literature. Each one offers a unique journey into the human experience, with themes that resonate across time and cultures. Start building your ultimate collection today at <strong>Bookify</strong>!
          </p>
        </article>

        {/* Blog Post 3 */}
        <article>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">How to Create a Reading Habit That Sticks</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Developing a consistent reading habit can be challenging, especially with the distractions of modern life. But don’t worry—we’ve got a few tips to help you make reading a regular part of your daily routine:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2"><strong>Set a Time:</strong> Designate a specific time each day for reading, whether it’s in the morning, during your lunch break, or before bed.</li>
            <li className="mb-2"><strong>Start Small:</strong> Don’t overwhelm yourself with long books. Begin with shorter reads and gradually build up.</li>
            <li className="mb-2"><strong>Eliminate Distractions:</strong> Find a quiet place to read where you can focus without interruptions.</li>
            <li className="mb-2"><strong>Join a Book Club:</strong> Joining a community of readers can motivate you to stay on track and discover new books.</li>
            <li className="mb-2"><strong>Track Your Progress:</strong> Use a reading journal or app to track the books you’ve read and set future reading goals.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            By following these simple tips, you’ll be well on your way to building a sustainable and enjoyable reading habit. At <strong>Bookify</strong>, we’re here to support your journey by providing a vast collection of books to choose from.
          </p>
        </article>
      </div>

      <div className="mt-12 text-center">
      <button 
  onClick={() => window.location.href = "https://blog.reedsy.com/book-review-blogs/"} 
  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
  Explore More Blogs
</button>

      </div>
    </div>
  </div>
  )
}

export default Blog