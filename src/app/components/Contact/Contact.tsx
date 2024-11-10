import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLink} from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center' id='contact'>
      <div id="myForm" className='flex justify-evenly w-full h-screen items-center bg-[color:var(--primary-color)]'>
        <div className='h-[80%]'>
          <h1 className='mt-[50px] text-[#fff] text-[30px] tracking-[2px]'>GOT A PROJECT?</h1>
          <h2 className='text-[3.5rem] text-[#04ffc3] tracking-[1.2px] monu'>Lets Talk!</h2>
        </div>
        <div className="w-[40vw] h-fit">
          <form action="">
            <input id="myName" className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc]' type="text" placeholder="Enter Your Name*" />
            <input id="myEmail" className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc]' type="text" placeholder="Enter Your Email*" />
            <input id="mySub" className='w-full py-[15px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc]' type="text" placeholder=" Subject" />
            <textarea className='w-full py-[10px] px-[15px] mt-[15px] rounded-[4px] box-border border-[1px] border-solid border-[#ccc]' name="" id="myMessage" placeholder="Message"></textarea>
            <label className='inline-block text-[18px] py-[6px] px-[12px] text-white cursor-pointer w-full my-[10px] '>
              <input className='hidden' type="file" />
              {/* <span><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></span> */}
              Attach File
            </label>
            <input className='w-[100px] mt-[5px] font-["Arial"] font-[18px] text-white rounded-[22px] bg-[#04ffc3] hover:bg-[#019975] hover:[#fff] p-[10px] border-[#019975] border-[2px] border-solid' type="submit" />

          </form>
        </div>
      </div>




    </section>
  )
}

export default Contact
