'use client'
import React from 'react'
import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  function incrementCount(num: number) {
    // eslint-disable-next-line
    setCount(prev => prev = num)
  }


  return (
    <section className='flex w-full h-screen items-center justify-center overflow-hidden z-[1] py-[2.5rem] relative flex-col xxl:gap-[2rem]' id='about'>
      <h1 className='text-white text-[2.5rem] z-[1] mb-[4rem] text-center monu xl:text-[3rem] xxl:text-[4rem]'>ABOUT ME</h1>
      <div className='flex items-center w-[74%] h-[55vh] items-center justify-between xxl:w-[65%]'>
        <div className='flex flex-col items-center justify-between w-[22%] h-[100%] z-10'>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce] xl:text-[1.3rem] xl:rounded-[8px] xl:h-[4.5rem] xxl:text-[1.5rem] xxl:h-[5.2rem] xxl:rounded-[10px] ' ${count % 4 == 0 ? 'bg-[#03ecbe] hover:text-white active' : ''}`} onClick={() => incrementCount(0)}>INTRODUCTION</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce] xl:text-[1.3rem] xl:rounded-[8px] xl:h-[4.5rem] xxl:text-[1.5rem] xxl:h-[5.2rem] xxl:rounded-[10px] ' ${count % 4 == 1 ? 'bg-[#03ecbe] hover:text-white active' : ''}`} onClick={() => incrementCount(1)}>EDUCATION</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce] xl:text-[1.3rem] xl:rounded-[8px] xl:h-[4.5rem] xxl:text-[1.5rem] xxl:h-[5.2rem] xxl:rounded-[10px] ' ${count % 4 == 2 ? 'bg-[#03ecbe] hover:text-white active' : ''}`} onClick={() => incrementCount(2)}>SKILLS</span>
          <span className={` ' flex w-[80%] h-[3.75rem] bg-[#0a0a0a] z-10 items-center justify-center text-[1.3rem] hover:text-[#04ffc3] euro text-['monument extended'] text-white rounded-[8px] border-2 border-[#04ffce] xl:text-[1.3rem] xl:rounded-[8px] xl:h-[4.5rem] xxl:text-[1.5rem] xxl:h-[5.2rem] xxl:rounded-[10px] ' ${count % 4 == 3 ? 'bg-[#03ecbe] hover:text-white active' : ''}`} onClick={() => incrementCount(3)}>EXPERIENCE</span>
        </div>
        <div className='w-[72%] h-[100%] text-white rounded-[8px] border-2 border-[#04ffce]  shadow-[0_0_0_500px] shadow-[#0b0b0b] overflow-scroll overflow-x-hidden xl:shadow-[0_0_0_650px] xl:shadow-[#0b0b0b] xxl:shadow-[#0b0b0b]  xxl:shadow-[0_0_0_800px]'>
          <div className={`'text-center hidden flex-col flex h-[100%] px-8 border-b-2 items-start xxl:px-10 ' ${count % 4 == 0 ? 'visible' : ''}`}>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10 xl:text-[1.7rem] xl:leading-[3rem] xxl:text-[2rem] xxl:leading-[3.5rem]'>I&#39;m Raed Siddiquie, a passionate rising Web Developer seeking to get an opportunity where I can make the
              best of my potential and contribute to the organizations growth, while
              polishing my skills.I have strong base in Html, Css and Javascript and currently learning latest web technologies</p>
          </div>
          <div className={`'text-center hidden flex-col flex h-[100%] px-8 border-b-2 items-start justify-between' ${count % 4 == 1 ? 'visible' : ''}`}>
            <div className='mb-4 xxl:mb-7'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold xl:text-[1.4rem] xxl:text-[1.7rem]'>Bachelor of Science in Computer Science</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10 xl:text-[1.4rem] xl:leading-[2.8rem] xxl:text-[1.7rem] xxl:leading-[3rem]'>University Of Karachi - Ubit</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] xl:text-[1rem] xxl:text-[1.2rem]'>2024 - 2028</p>
            </div>
            <div className='mb-4 xxl:mb-7'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold xl:text-[1.4rem] xxl:text-[1.7rem]'>Intermediate In Engineering</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10 xl:text-[1.4rem] xl:leading-[2.8rem] xxl:text-[1.7rem] xxl:leading-[3rem]'>Gov. College For Men</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] xl:text-[1rem] xxl:text-[1.2rem]'>2021 - 2023</p>
            </div>
            <div className='mb-4 xxl:mb-7'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold xl:text-[1.4rem] xxl:text-[1.7rem]'>Matric In Computer Science</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10 xl:text-[1.4rem] xl:leading-[2.8rem] xxl:text-[1.7rem] xxl:leading-[3rem]'>Profectus International School</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] xl:text-[1rem] xxl:text-[1.2rem]'>2021</p>
            </div>
          </div>
          <div className={`'text-center hidden flex-col flex h-[100%] px-8 border-b-2 items-center ' ${count % 4 == 2 ? 'visible' : ''}`}>

            <div className='flex items-center justify-center flex-col w-[70%] my-6'>
              <p className='text-white text-[1.4remm] euro my-2 leading-10 xl:leading-[2.8rem] xl:text-[1.6rem] xxl:text-[2.1rem] xxl:leading-[3.5rem]'>Graphic Designing</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-[70%] my-6'>
              <p className='text-white text-[1.4remm] euro my-2 leading-10 xl:leading-[2.8rem] xl:text-[1.6rem] xxl:text-[2.1rem] xxl:leading-[3.5rem]'>Web Development</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[65%]"></div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-[70%] my-6'>
              <p className='text-white text-[1.4remm] euro my-2 leading-10 xl:leading-[2.8rem] xl:text-[1.6rem] xxl:text-[2.1rem] xxl:leading-[3.5rem]'>UI/UX Designing</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>

          </div>
          <div className={`'text-center hidden flex-col flex h-[100%] px-8 border-b-2 items-center xxl:text-[1.5rem]' ${count % 4 == 3 ? 'visible' : ''}`}>

            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10 xl:text-[1.7rem] xl:leading-[3rem] xxl:leading-[4rem] xxl:text-[2.1rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
