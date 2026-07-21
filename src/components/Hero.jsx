import { Link } from "react-router-dom";

function Hero() {
  return (
    /* 1. Full-width Section Background */
    <section className="w-full bg-[#16221A] text-[#F3E9D4] py-16 lg:py-24 overflow-hidden relative">

      {/* 2. Main Content Container (Bounded & Centered) */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
        
        {/* Left Block: Core Messaging (Spans 3/5ths or 60% of desktop space) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-2">
            {/*the orange line*/}
            <span className="w-6 h-0.5 bg-[#C3601E]"></span>
            {/* tracking-widest It determines how much horizontal space sits between each individual letter or character in a word */}
            <span className="text-sm uppercase font-semibold tracking-widest text-[#C3601E]">
              Northern Region, Ghana
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-medium text-white leading-[1.1]">
            Rooted in community, <br />
            <span className="italic text-[#C3601E] font-normal">growing</span> toward justice.
          </h1>
          
          {/* leading-relaxed means the space between the lines will be exactly 1.625 times the size of the font itself. */}
          <p className="text-base sm:text-lg text-[#F3E9D4]/80 leading-relaxed max-w-xl font-light">
            Nyamba Centre builds inclusive platforms that equip rural women and youth with skills, 
            resources, and standing to drive economic empowerment, climate justice, and an end 
            to gender-based violence.
          </p>
           <Link to="/allprograms">
          <button className="text-md font-medium bg-[#C3601E] px-4 py-2 text-white hover:bg-[#a84f16] transition-colors 
          rounded-md cursor-pointer">Our programs
          </button>
          </Link>
        </div>

        {/* Right Block: Stats Counter (Spans 2/5ths or 40% of desktop space) */}
        <div className="lg:col-span-2 space-y-10 border-l border-[#F3E9D4]/20 pl-0 lg:pl-12 pt-6 lg:pt-0">
          <div className="space-y-1">
            <h2 className="text-4xl font-montserrat text-[#C3601E] font-semibold">5</h2>
            <p className="text-sm text-[#F3E9D4]/70 max-w-xs font-light">
              Core focus areas across the Northern Region, driving community leadership and energy justice
            </p>
          </div>
          
          {/* Instead of going to every single text element and manually adding top or bottom margins 
          (like mb-1 or mt-1), you apply space-y-1 to the parent wrapper, 
          and it automatically injects a top margin onto all child elements beneath it except for the very first one. */}
          <div className="space-y-1">
            <h2 className="text-4xl font-montserrat text-[#C3601E] font-semibold">1,000s</h2>
            <p className="text-sm text-[#F3E9D4]/70 max-w-xs font-light">
              Of women & youth reached through targeted skills training and livelihood development programs
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-4xl font-montserrat text-[#C3601E] font-semibold">3</h2>
            {/* This element can shrink to be as small as it needs to be, but it can never grow wider than 320 pixels. */}
            <p className="text-sm text-[#F3E9D4]/70 max-w-xs font-light">
              pillars: economy, climate and rights
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-4xl font-montserrat text-[#C3601E] font-semibold">300M+</h2>
            {/* This element can shrink to be as small as it needs to be, but it can never grow wider than 320 pixels. */}
            <p className="text-sm text-[#F3E9D4]/70 max-w-xs font-light">
              Native Shea Trees
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default Hero;