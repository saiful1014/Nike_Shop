import { useState } from "react";
import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import { shoes,statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShowCard from "../components/ShowCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
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
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            )
            )
          }
          </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
        src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain z-10 relative"
        
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShowCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero