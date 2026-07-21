import Hero from '../components/Hero'
import About from '../components/About'
import Focusgrid from '../components/Focusgrid'
import Partner from '../components/Partner'
import Programs from '../components/Programs'
import Slidingbanner from '../components/Slidingbanner'

function Home() {
  return (
    // Clean, plain section block wrapper. No inner navigation or padding rules 
    // are allowed here to prevent content overlapping or double spacing errors.
    <div className="w-full flex flex-col">
      <Slidingbanner/>
      <Hero />
      <About />
      <Focusgrid />
      <Programs />
      <Partner />
    </div>
  )
}

export default Home;