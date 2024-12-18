'use client'
import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center overflow-hidden bg-[#121212] gap-[10vw] pt-12 xxl:justify-evenly" id='home'>
      <aside className="s:absolute s:z-10 s:w-[90%] s:items-center s:border-l-[2px] s:border-[#64ffda] s:shadow-[inset_12px_0_13px_-10px,inset_-12px_0_13px_-10px] s:shadow-[#04ffc3] s:text-center s:h-[62%] s:bg-[#0a0a0ac4] s: s:backdrop-blur-[6px] flex bg-[#0a0a0a] flex-col h-[57%] w-[42.5%] rounded-2xl justify-evenly px-4 shadow-[inset_-12px_0_13px_-10px] shadow-[#04ffc3] border-r-[2px] border-[#64ffda]">
        <div className="flex flex-col gap-2 xl:gap-4 xxl:gap-6">
          <h2 style={{fontFamily:'monument extended',fontWeight:'100'}} className="text-3xl text-[#04ffc3] select-none s:text-sm xl:text-3xl xxl:text-5xl">Hi! I&lsquo;m</h2>
          <h1 style={{fontFamily:'monument extended'}} className="text-white text-[2.5rem] select-none s:text-[1.6rem] xl:text-[2.9rem] xxl:text-[3.5rem]">MUHAMMAD RAED</h1>
          <h3 className="text-white text-lg select-none s:leading-[2rem] xl:text-[1.4rem] xl:leading-[2rem] xxl:text-2xl xxl:leading-[2.2rem]">Learning Front-End Web Development passionate about creating interactive applications and
            experiences on the web.</h3>
        </div>
        <div className="w-[150px] items-center justify-center flex flex-col gap-4 s:w-[100px] xl:w-[150px] xl:gap-4 xxl:w-[180px] xxl:gap-6">
          <button className="text-white neon w-[150px] h-[50px] rounded-[22px] border-[#019975] border-[2px] cursor-pointer hover:bg-[#04a982] hover:border-white s:h-[40px] xl:h-[55px] xxl:rounded-[26px] xxl:w-[180px] xxl:h-[60px]">
            <a href="#about"><h4 className="text-lg xl:text-xl xxl:text-2xl">More</h4></a>
          </button>
          <div className='flex w-[150px] items-center justify-center' >
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer xxl:text-4xl"><a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a></span>
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer xxl:text-4xl"><a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a></span>
            <span className="text-white text-3xl mx-2 hover:text-[#04a982] cursor-pointer xxl:text-4xl"><a target="_blank" href="https://x.com/raedsiddiquie">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a></span>
          </div>
        </div>

      </aside>
      <aside className="h-[37rem] w-[30rem] flex items-center justify-center">
        <div className="s:w-[110%] s:items-end w-full h-full overflow-hidden flex items-center justify-center s:absolute s:z-[0]  xxl:w-[100%]"><Image className="z-10 mt-4" src="/Images/person.png" width={370} height={200} alt=""></Image></div>
      </aside>

    </section>
  )

}

export default Hero
