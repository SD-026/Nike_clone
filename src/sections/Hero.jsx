import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics,shoes } from './../contsnts/index';
import { bigShoe1  } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";



const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    // <h1>ldjn</h1>
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col  justify-center min-h-screen gap-10 max-container ">

    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 "> 
    <p className="text-xl text-coral-red font-montserrat "
    > Our Summer collection</p>
    <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] 
    
    font-bold">
    <span className="xl:bg-white xl:whitespace-nowrap  relative z-10 pr-10">
    The New Arrival
    </span>
    <br/>
    <span className="text-coral-red inline-block mt-3">Nike </span>
    Shoes    
    </h1>
    <p className="font-montserrat text-slate-grey ">Discover stylish Nike arivals, quality confort and inovation for your active life  </p>
    
    <Button label="Show Me"
      iconURL={arrowRight}
    />

    <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
    
    {statistics.map((stat)=>(
      <div key={stat.label} > 
      <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
      <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>

      </div>
    ))}

    </div>
    </div>

    <div className="relative flex flex-1 justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
    
      <img 
        src={bigShoeImg}
        className="relative z-10 object-contain"
        width={480}
        height={502}
      />  
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6" >
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              imgURL={shoe}
              ChangeBigShoe={ 
                (shoe)=>{setbigShoeImg(shoe)}
                
              }
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
