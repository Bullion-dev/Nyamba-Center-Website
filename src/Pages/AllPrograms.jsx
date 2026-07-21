// src/pages/AllPrograms.jsx
import Programs from '../components/Programs'
import Focusgrid from '../components/Focusgrid'
import Partner from '../components/Partner'
import Projects from '../components/Projects';

function AllPrograms() {
  return (
    <div className="animate-fadeIn">
      {/* Programs Hero Area */}
      <section className="bg-[#C3601E] text-[#F3E9D4] py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-montserrat font-medium mb-4">Our Programs & Initiatives</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-md opacity-90 leading-relaxed">
          Exploring community-driven solutions designed to advance human rights, promote education, and unlock socio-economic independence.
        </p>
      </section>

      {/* Core focus pillars and grid */}
      <Projects/>
      <Programs />
      <Focusgrid />

      {/* Strategic Call to Action Section */}
      <Partner />
    </div>
  );
}

export default AllPrograms;