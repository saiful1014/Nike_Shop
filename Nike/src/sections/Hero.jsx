import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col items-start justify-center w-full max-xl:padding-x pt-28">
        <p className="text-red-400 text-xl font-montserrat">
          Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arraival</span>
          <br/>
          <span className="mt-3 text-coral-red inline-block">Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for 
          your active life.</p>
          <Button lable="Shop Now"
          iconUrl={arrowRight}/>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat)=>(
              <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
              </div>
            )
            )
          }
          </div>
      </div>
    </section>
  )
}

export default Hero