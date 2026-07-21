import { useState, useEffect } from "react";

function Slidingbanner(){
     const [change, setChange] = useState(0);
  const banners = [
    "./logos/women.jpg",
    "./logos/children.jpg",
    "./logos/shea.jpg",
    "./logos/leadership.jpg",
    "./logos/voilence.jpg"
  ]

  useEffect(() =>{
    {/* now this is a function that means "run this code repeatedly" */}
const interval = setInterval(() => {
  setChange((prev) => (prev + 1)% banners.length);  
}, 4000);
{/* now this is called the cleanup function, it simply tells javascript to stop the timer */}
{/* React automatically calls this cleanup when the component is removed from the page */}
return () => clearInterval(interval);
{/*the empty array is the dependency array, it tells react Run this effect 
    only once, when the component first appears*/}
}, []);
    return (
        
        <div>
            <img src={banners[change]} alt="sliding banner" className="w-auto h-auto object-contain"/>
            
        </div>
    )
}

export default Slidingbanner;