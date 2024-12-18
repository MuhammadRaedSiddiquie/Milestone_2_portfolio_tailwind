import React from 'react'
import Style from "./project.module.css"
import Image from "next/image"

function Projects() {
  return (
    <section className='w-full min-h-screen h-fit relative z-[1] p-[2.5rem] bg-[#0a0a0a] flex items-center justify-center flex-col' id='projects'>
      <h1 className='text-white text-[2.5rem] mb-[3.5rem] text-center monu xl:text-[3rem] xl:mb-[4rem] xxl:text-[4rem] xxl:mb-[4.5rem]'>PROJECTS</h1>
      <div className='w-95% h-fit flex items-center justify-center gap-[40px] px-[25px] flex-wrap xl:px-[35px] xl:gap-[45px] xxl:gap-[60px]'>
        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/cal.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://calculator-js-lac.vercel.app/" target="_blank">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='l:text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px] '>Calculator</h1>
              <p className='l:text-[12px] l:tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px]  xxl:text-[16px] xxl:tracking-[0.8px] '>A simple calculator made with html,css and javascript</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Ts</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]' >*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/smash.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://smash-it-seven.vercel.app/" target="_blank">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>SmashIT</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>A fun Insect smashing game designed with html,css and javascript</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Js</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' card w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/hangman.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://hang-man-pi-nine.vercel.app/" target="_blank">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Hangman</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>An interactive popular Hangman game design using pure Css and Javascript</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Js</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/rps.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://rock-paper-scissor-orpin-sigma.vercel.app/" target="_blank">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Rock-Paper-Scissor</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>An interactive Rock,Paper & Scissor Game enabled with Ai using html,css and javascript
              </p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Js</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/portfolio.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://portfolio-raed-nextjs.vercel.app/" target="_blank">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Portfolio</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>Interactive and Simple Modern Web Development Portfolio designed with custom Css & Js</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>React</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/tiktak.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://tik-tac-toe-ashen.vercel.app/">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Tik Tak Toe</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>A simple tik tak game with html, css and javascript</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Ts</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>
        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/password.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://javascript-password-generator-phi.vercel.app/">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Tik Tak Toe</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>A simple tik tak game with html, css and javascript</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Ts</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>
        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images/resume.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://cvbuilder-phi.vercel.app/">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Resume Builder</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>An advanced and interactive Dynamic Resume Builder site for generation styled resume in few minutes</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Css</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Ts</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]' >*Click to view code*</p>
            </div></a>
        </div>
        <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={`' w-[315px] h-[200px] xl:w-[385px] xl:h-[230px] xxl:w-[430px] xxl:h-[250px]  bg-[#000] absolute z-[2] overflow-hidden flex items-center justify-center ' ${Style.imagecard}`}>
            <Image src="/Images" layout='fill' alt=""></Image>
          </div>
          <a href="">
            <div className='flex text-white z-[1] gap-[14px] px-[15px] h-[200px] w-[315px]  flex-col items-start justify-center '>
              <h1 className='text-[22px] font-[monospace] xl:text-[26px] xxl:text-[30px]'>Project</h1>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px] '>......</p>
              <div className='flex gap-[6px]'><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Html</span><span className='bg-[#03a9f4] rounded-[15px] w-[50px]  p-[5px] text-[13px] text-center font-[monospace] xl:text-[15px] xl:p-[6px] xl:w-[60px]'>Ts</span></div>
              <p className='text-[12px] tracking-[0.4px] xl:text-[14px] xl:tracking-[0.6px] xxl:text-[16px] xxl:tracking-[0.8px]'>*Click to view code*</p>
            </div></a>
        </div>

      </div>

    </section>
  )
}

export default Projects
