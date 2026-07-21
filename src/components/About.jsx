import { Link } from "react-router-dom";

function About(){
    return(
<section className="w-full py-16 lg:py-24 overflow-hidden relative">

<div className="max-w-6xl mx-auto px-9 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/*first*/}
    <h2 className="text-4xl font-montserrat font-medium ">Who We are</h2>
<div className="space-y-6">
  <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
    Nyamba Centre for Women and Community Empowerment is committed to creating inclusive platforms that equip young people and women
     with the skills and resources needed to become agents of positive change in their own communities
  </p>
  <p className="text-base tracking-wide leading-relaxed font-light text-gray-800">
    We work where economic survival, environmental pressure, and gender injustice meet 
    because in the Northern Region, those three forces are rarely separate problems.
  </p>

  <Link to="/aboutall" className="text-[#C3601E]">Read our Full Story</Link>
</div>

{/*second*/}
<div>
   <h2 className="text-4xl font-montserrat font-medium">Our Vision</h2>
   <img src="/logos/community.jpg" alt="Community leadership" className="w-auto h-auto object-contain"/>
   </div>

  <p className="space-y-4 text-base tracking-wide leading-relaxed font-light text-gray-800">
    To become a community where women have equitable access to 
    Natural resources and can exercise full control over their bodies.
  </p>
  
 </div>
</section>
    )
}

export default About;