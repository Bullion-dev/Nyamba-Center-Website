import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Partner(){
const navigate = useNavigate();

    return(
        <section className="w-full bg-[#C3601E] text-[#F3E9D4] py-16 lg:py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-9 grid grid-cols-1 gap-12 items-center justify-center">
<div className="flex items-center justify-center gap-2">
            {/*the orange line*/}
            <span className="w-6 h-0.5 bg-[#9C4A09]"></span>
            {/* tracking-widest It determines how much horizontal space sits between each individual letter or character in a word */}
            <span className="text-xs uppercase font-semibold tracking-widest text-[#9C4A09]">
              Northern Region, Ghana
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-medium text-center">
          Partner with us to advance community development and human rights.
          </h2>
          <div className="flex sm:flex-row flex-col items-center justify-center gap-4">
          <button onClick = {()=> navigate("/contact")} className="text-md font-medium px-4 py-2 transition-colors rounded-md cursor-pointer bg-[#16221A] hover:bg-[#26392A]">Partner With Us</button>
          <button onClick = {()=> navigate("/contact")} className="text-md font-medium px-4 py-2 transition-colors rounded-md cursor-pointer bg-transparent border hover:bg-[#F3E9D4] hover:text-[#C3601E]">Donate Now</button>
          </div>
        </div>
        </section>
    )
}

export default Partner;