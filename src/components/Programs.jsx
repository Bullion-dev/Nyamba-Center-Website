import { Link } from "react-router-dom";

function Programs(){
    return(
        <section className="w-full py-15 lg:py-24 overflow-hidden relative">
        <h2 className="mb-4 text-5xl items-center gap-2 max-w-6xl mx-auto px-9 grid grid-cols-1">
            Our Core Programs & Initiatives 
            </h2>

<div className="mb-4 items-center gap-2 max-w-6xl mx-auto px-9 grid grid-cols-1">
            {/*the orange line*/}
            <span className="w-6 h-0.5 bg-[#C3601E]"></span>
            {/* tracking-widest It determines how much horizontal space sits between each individual letter or character in a word */}
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] ">
              Featured Programs
            </span>
          </div>

       <div className="max-w-6xl mx-auto px-9 grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center">
       {/* card 1 */}
    <div className="border space-y-4 space-x-4 px-4 py-4 border-[#C3601E] h-auto">
        <h2 className="font-montserrat text-4xl">The Shea Future</h2>
        <img src="/logos/sheatree.jpg" alt="Shea tree nursery" className="object-cover "/>
        <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
            Halt ecosystem depletion by nursing and planting trees while educating local farming communities
            </p>
            <Link to="/allprograms" className="text-[#C3601E]">View Project</Link>
    </div>

       {/* card 2 */}
      <div className="border space-y-4 space-x-4 px-4 py-4 border-[#C3601E] h-auto">
        <h2 className="font-montserrat text-4xl">Women Of Glory</h2>
        <img src="/logos/leadership.jpg" alt="women in leadership" className="object-cover "/>
        <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
            Empowering Women to run for high public office, politics,
            and community leadership roles to ensure gender justice
            </p>
            <Link to="/allprograms" className="text-[#C3601E]">View Project</Link>
    </div>

       {/* card 3 */}
       <div className="border space-y-4 space-x-4 px-4 py-4 border-[#C3601E] h-auto ">
        <h2 className="font-montserrat text-4xl">Mining & Climate</h2>
        <img src="/logos/ironore.jpg" alt="iron ore enclave" className="object-cover "/>
        <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
            Combating Bushfores and promoting environmental restoration in vulnerable rural zones.
            </p>
            <Link to="/allprograms" className="text-[#C3601E]">View Project</Link>
    </div>

        </div>
        </section>
    );
}

export default Programs;