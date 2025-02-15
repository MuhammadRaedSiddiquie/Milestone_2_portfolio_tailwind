import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center' id='contact'>
      <div id="myForm" className='flex justify-evenly w-full h-screen items-center bg-[color:var(--primary-color)] s:flex-col'>
        <div className='h-[80%] s:h-[20%]'>
          <h1 className='mt-[50px] text-[#fff] text-[30px] tracking-[2px] s:text-[20px] s:tracking-[0.5px] xl:text-[35px] xxl:text-[40px]'>GOT A PROJECT?</h1>
          <h2 className='text-[3.5rem] text-[#04ffc3] tracking-[1.2px] monu s:text-[2.3rem] xl:text-[3.8rem] xxl:text-[4.2rem]'>Lets Talk!</h2>
        </div>
        <div className="w-[40vw] h-fit s:w-[85vw] xxl:w-[45vw]">
          <form action="">
            <input id="myName" className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc] s:text-[14px] xl:py-[15px] xl:text-[18px] xxl:py-[20px] xxl:text-[22px] xxl:rounded-[6px]' type="text" placeholder="Enter Your Name*" />
            <input id="myEmail" className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc] s:text-[14px] xl:py-[15px] xl:text-[18px] xxl:py-[20px] xxl:text-[22px] xxl:rounded-[6px]' type="text" placeholder="Enter Your Email*" />
            <input id="mySub" className='w-full py-[15px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc] s:text-[14px] s:py-[10px] xl:py-[15px] xl:text-[18px] xxl:py-[20px] xxl:text-[22px] xxl:rounded-[6px]' type="text" placeholder=" Subject" />
            <textarea className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc] s:text-[14px] s:py-[30px] xl:py-[30px] xl:text-[18px] xxl:py-[50px] xxl:text-[22px] xxl:rounded-[6px]' name="" id="myMessage" placeholder="Message"></textarea>
            <label className='inline-block text-[18px] py-[6px] px-[12px] text-white cursor-pointer w-full my-[10px] s:text-[14px] xl:py-[7px] xl:text-[22px] xxl:py-[8px] xxl:text-[24px]'>
              <input className='hidden' type="file" />
              <span><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></span>
              Attach File
            </label>
            <input className='w-[100px] mt-[5px] font-["Arial"] text-[18px] text-white rounded-[22px] bg-[#04ffc3] hover:bg-[#019975] hover:[#fff] hover:border-[#fff] p-[10px] border-[#019975] border-[2px] border-solid s:text-[12px] s:rounded-[16px] xl:w-[150px] xl:rounded-[24px] xl:p-[14px] xl:text-[20px] xxl:w-[180px] xxl:rounded-[26px] xxl:p-[20px] xxl:text-[22px]' type="submit" />

          </form>
        </div>
      </div>




    </section>
  )
}

export default Contact
