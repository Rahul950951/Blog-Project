import React from 'react'

const Services = () => {
  return (
    <div>
      <section className="py-16 mt-6 bg-gray-100 text-gray-800 px-4">
        <div className="max-w-screen-md mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">What We Offer</h3>
          <p className="text-lg leading-relaxed mb-6 text-center">
            At DesignRK, we are dedicated to providing valuable content and services that cater to your needs and interests. Our goal is to enhance your experience and provide you with the resources you need to succeed.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <img src="https://picsum.photos/600/400?random=1" alt="Content Creation" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-4">Content Creation</h4>
              <p className="text-lg leading-relaxed">
                Our team specializes in creating high-quality, engaging content tailored to your interests. From in-depth articles and insightful blog posts to creative multimedia, we ensure every piece delivers value and resonates with our audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <img src="https://picsum.photos/600/400?random=2" alt="Consulting" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-4">Consulting</h4>
              <p className="text-lg leading-relaxed">
                Looking for expert advice or personalized recommendations? Our consulting services offer one-on-one sessions to help you navigate challenges, set goals, and achieve your objectives in your field of interest.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg">
              <img src="https://picsum.photos/600/400?random=3" alt="Workshops & Webinars" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-4">Workshops & Webinars</h4>
              <p className="text-lg leading-relaxed">
                Join our interactive workshops and webinars to gain new skills, stay updated on industry trends, and connect with like-minded individuals. Our events are designed to provide practical knowledge and foster community engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg">
              <img src="https://picsum.photos/600/400?random=4" alt="Collaborations" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-4">Collaborations</h4>
              <p className="text-lg leading-relaxed">
                We welcome opportunities for collaboration with other creators, brands, and businesses. If you’re interested in partnering with us for content creation, sponsored posts, or other projects, we’d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
