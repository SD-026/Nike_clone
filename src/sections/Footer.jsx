// import React from 'react'

import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../contsnts"

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col ">

        <div className="flex-col  justify-center items-center ">
          <a href="/">
            <img src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src}
                alt="social media"
                width={24}
                height={24}

              />
            </div>
          ))}
          </div>
        </div>


      <div className="flex flex-1 justify-between   lg:gap-10 gap-20 flex-wrap ">
        {footerLinks.map((section)=>(
          <div key={section}>
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium ">
            {section.title}
            <ul>
            {section.links.map((link)=>(
              <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
              key={link.name}>
                <a>{link.name}</a>
              </li>
            ))}

            </ul>

            </h4>
          </div>
        ))}
      </div>
      </div>


      <div className="flex justify-between max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-wait mt-5">
        <img 
         src={copyrightSign}
         width={20}
         height={20}
         className="rounded-full m-0"

        />
        <p className="text-white text-lg ">Copy right goes to S.D</p>
      </div>
      <p className="font-montserrat text-lg text-white">Terms & conditions</p>
        
      </div>
    </footer>
  )
}

export default Footer
