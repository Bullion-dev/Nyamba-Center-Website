// src/pages/AboutAll.jsx
import Fullstory from '../pages/Fullstory';


function AboutAll() {
  return (
    <div className="animate-fadeIn">
      {/* Introduction Hero Area */}
      <section className="bg-[#16221A] text-[#F3E9D4] py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-montserrat font-medium mb-4">About Our Organization</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-md opacity-80 leading-relaxed">
          Discover our history, our core convictions, and the foundational pillars guiding our work across the Northern Region of Ghana.
        </p>
      </section>

      {/* Reusing structural content sections */}
      <Fullstory/>
  
      {/* Leadership / Vision Statement Block */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl font-montserrat font-medium text-[#16221A] mb-6">Our Vision</h2>
        <blockquote className="text-xl md:text-2xl italic font-montserrat text-[#C3601E] max-w-2xl mx-auto">
          "To foster an inclusive society where women and children are empowered, rights are protected, and communities sustainably thrive."
        </blockquote>
      </section>
    </div>
  );
}

export default AboutAll;