'use client'
import React from 'react'
import Style from "./skills.module.css"
import { useState, useEffect, useRef } from 'react';




function Skills() {
  const [count, setCount] = useState(0);
  const [angle, setAngle] = useState(0);
  const spinnerRef = useRef < HTMLDivElement | null > (null)

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
    setAngle(prevAngle => prevAngle - 45);
  };
  const discrementCount = () => {
    setCount((prevState) =>  (prevState-1)+8);
    setAngle((prevAngle) => prevAngle + 45);
  };

  useEffect(() => {
    if (spinnerRef.current !== null) {
      spinnerRef.current.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");

    }
    console.log(count)
  }, [spinnerRef, angle, count])

  return (
    <section className='w-full h-screen flex items-center justify-center flex-col py-[2.5rem] bg-[#121212]' id='skills'>
      <h1 className='monu text-white text-[2.5rem] text-center mb-[4rem] xl:text-[3rem] xl:mb-[5.5rem] xxl:text-[4rem]'>SKILLS</h1>
      <div className='w-[320px] h-[355px] relative [perspective:1000px] xl:[perspective:2000px] xl:w-[370px] xl:h-[370px] xxl:[perspective:2500px] xxl:w-[410px] xxl:h-[410px]'>
        <div ref={spinnerRef} className=' w-full h-[100%] absolute [transform-origin:50%_50%_-700px] [transform-style:preserve-3d] transition-[transform] duration-[2000ms] xxl:[transform-origin:50%_50%_-900px]' id='carousel'>
          <div className={`' bg-[url('/Images/python.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(0deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 0 ? "shadow" : "noshadow"]} `}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px] select-none xl:text-[22px] xxl:text-[26px] '>  With a strong foundation in Python, I leverage its versatility to build efficient back-end solutions. From scripting and automation to building full-fledged web applications, I use Python`&lsquo;`s extensive libraries and frameworks to create scalable and maintainable code.</p>

          </div>
          <div className={`' bg-[url('/Images/java.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(45deg)]  bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 1 ? "shadow" : "noshadow"]}`} >

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px] select-none xl:text-[22px] xxl:text-[26px] '>  Java has been instrumental in building enterprise-level applications. I bring expertise in using Java for back-end services, Android development, and large-scale systems, with a focus on performance, scalability, and security.</p>

          </div>
          <div className={`' bg-[url('/Images/ts.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(90deg)]  bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 2 ? "shadow" : "noshadow"]}`}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px] select-none xl:text-[22px] xxl:text-[26px] '>  I incorporate TypeScript into my development workflow to ensure robust, type-safe code. By extending JavaScript with static typing, I can catch errors early in the development process, resulting in more reliable and scalable applications.</p>

          </div>
          <div className={`' bg-[url('/Images/nextjs-icon.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(135deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 3 ? "shadow" : "noshadow"]}`}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px]  select-none xl:text-[22px] xxl:text-[26px]'>  Next.js enables me to build lightning-fast, SEO-friendly web applications. I specialize in creating server-side rendered applications and leveraging Next.js powerful static site generation to deliver optimized solutions for users.</p>

          </div>
          <div className={`' bg-[url('/Images/react.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(180deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 4 ? "shadow" : "noshadow"]}`}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px]  select-none xl:text-[22px] xxl:text-[26px]'>  React is my go-to library for building modular and responsive user interfaces. I enjoy creating reusable components and crafting fluid user experiences while ensuring state management and data flow remain efficient and organized.</p>

          </div>
          <div className={`' bg-[url('/Images/js.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(225deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 5 ? "shadow" : "noshadow"]}`}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px]  select-none xl:text-[22px] xxl:text-[26px]'>  JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design.</p>

          </div>
          <div className={`' bg-[url('/Images/c.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(270deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 6 ? "shadow" : "noshadow"]}`}>

            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px]  select-none xl:text-[22px] xxl:text-[26px]'>With C++, I develop high-performance applications that require optimized memory and processing efficiency. My experience with C++ ranges from systems programming to complex algorithm implementation, ensuring that code runs smoothly even in resource-intensive environments</p>
          </div>
          <div className={`' bg-[url('/Images/node.png')] absolute w-[320px] h-[320px] rounded-[50%] flex items-center justify-end flex-col gap-[20px] bg-center bg-no-repeat bg-cover  [transform-origin:50%_50%_-700px] [transform:rotateY(315deg)] bg-[#0c0c0c] xl:w-[370px] xl:h-[370px] xl:[transform-origin:50%_50%_-700px] xxl:w-[420px] xxl:h-[410px] xxl:[transform-origin:50%_50%_-900px] ' ${Style[count % 8 == 7 ? "shadow" : "noshadow"]}`}>
            <p  className='text-[18px] text-[#ffffff] w-[175%] bg-[#12121261] opacity-0 backdrop-blur-[20px]  select-none xl:text-[22px] xxl:text-[26px]'> Node.js allows me to bring JavaScript to the server side, creating scalable and efficient back-end applications. I use Node.js for real-time applications and RESTful APIs, leveraging its non-blocking architecture to deliver fast, data-driven solutions</p>

         </div>

        </div>
      </div>
      <div style={{ width: '100%', position: 'absolute' }}>
        <span className='float-left text-white inline-block text-[4rem] relative mx-[25px] duration-600 transition-[color]' onClick={discrementCount}>&lt;</span>
        <span className='float-right text-white inline-block text-[4rem] relative mx-[25px] duration-600 transition-[color]' onClick={incrementCount}>&gt;</span>
      </div>
    </section>
  )
}

export default Skills
