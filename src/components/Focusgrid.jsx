function Focusgrid(){
    return(
<section className="bg-[#F3E9D4] px-9 w-full py-16 lg:py-24 overflow-hidden relative border-t border-[#C3601E]/20">
<div className="max-w-6xl mx-auto mb-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <h2 className="text-4xl font-montserrat font-medium ">Five Areas We Focus On</h2>
    <div className="space-y-6">
  <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
    Each focus area meets a different point of pressure on women and youth in the Northern Region.
  </p>
</div>  
 </div>

<div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-px bg-[#26392A]/20 border border-[#26392A]/20">
    {/*card 1*/}
    <div className="bg-[#F3E9D4] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#E3D9C2] transition-colors cursor-pointer">
<span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] block">
  Economic
</span>
<div className="w-8 h-8 rounded-full border border-[#C3601E] flex items-center justify-center text-[#C3601E]">
  {/* This is a temporary placeholder circle icon */}
  ◯ 
</div>
<h3 className="text-2xl font-montserrat font-semibold text-[#26392A]">
  Economic Empowerment
</h3>
<p className="text-sm text-gray-700 leading-relaxed font-light">
  Skills training and entrepreneurship support that turns trades into stable income.
</p>
    </div>
{/*card 2*/}
    <div className="bg-[#F3E9D4] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#E3D9C2] transition-colors cursor-pointer">
<span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] block">
  Climate
</span>
<div className="w-8 h-8 rounded-full border border-[#C3601E] flex items-center justify-center text-[#C3601E]">
  <i class="fa-solid fa-plus"></i>
</div>
<h3 className="text-2xl font-montserrat font-semibold text-[#26392A]">
  Climate Justice
</h3>
<p className="text-sm text-gray-700 leading-relaxed font-light">
  Clean energy access and ecosystem protection against bushfires and deforestation.
</p>
    </div>
{/*card 3*/}
    <div className="bg-[#F3E9D4] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#E3D9C2] transition-colors cursor-pointer">
<span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] block">
  GBV
</span>
<div className="w-8 h-8 rounded-full border border-[#C3601E] flex items-center justify-center text-[#C3601E]">
  {/* This is a temporary placeholder circle icon */}
  <i class="fa-solid fa-suitcase"></i>
</div>
<h3 className="text-2xl font-montserrat font-semibold text-[#26392A]">
  GBV Advocacy
</h3>
<p className="text-sm text-gray-700 leading-relaxed font-light">
  Legal aid and counseling support for survivors of gender-based violence.
</p>
    </div>
{/*card 4*/}
    <div className="bg-[#F3E9D4] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#E3D9C2] transition-colors cursor-pointer">
<span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] block">
  Leadership
</span>
<div className="w-8 h-8 rounded-full border border-[#C3601E] flex items-center justify-center text-[#C3601E]">
  {/* This is a temporary placeholder circle icon */}
  <i class="fa-solid fa-child"></i>
</div>
<h3 className="text-2xl font-montserrat font-semibold text-[#26392A]">
  Women In Leadership
</h3>
<p className="text-sm text-gray-700 leading-relaxed font-light">
  Pathways into political participation and decision-making roles.
</p>
    </div>
{/*card 5*/}
    <div className="bg-[#F3E9D4] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#E3D9C2] transition-colors cursor-pointer">
<span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E] block">
  Youth
</span>
<div className="w-8 h-8 rounded-full border border-[#C3601E] flex items-center justify-center text-[#C3601E]">
  {/* This is a temporary placeholder circle icon */}
  <i class="fa-solid fa-children"></i> 
</div>
<h3 className="text-2xl font-montserrat font-semibold text-[#26392A]">
  Youth Mentorship
</h3>
<p className="text-sm text-gray-700 leading-relaxed font-light">
  Social inclusion programs that connect young people with mentors and peers.
</p>
    </div>

 </div>
</section>
    )
}

export default Focusgrid;