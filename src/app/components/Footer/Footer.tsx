import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'




function Footer() {
  return (
    <>
    
    <footer className='s:py-[30px] s:gap-[18px] w-full flex flex-col items-center justify-center bg-[#0a0a0a] py-[30px] relative z-[1] gap-[25px] border-t-[1px] border-solid border-[#64ffda] xl:py-[50px] xl:gap-[35px] xxl:py-[70px] xxl:gap-[50px]'>
        <ul className='s:gap-[15px] flex items-center justify-center gap-[20px] xl:gap-[50px] xxl:gap-[80px]'>
            <li className='s:text-[15px] font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white hover:text-[#04ffc3] font-["Franklin Gothic"] xl:text-[22px] xl:tracking-[0.8px] xxl:text-[28px] xxl:tracking-[1px]'>Home</li>
            <li className='s:text-[15px] font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white hover:text-[#04ffc3] font-["Franklin Gothic"] xl:text-[22px] xl:tracking-[0.8px] xxl:text-[28px] xxl:tracking-[1px]'>Projects</li>
            <li className='s:text-[15px] font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white hover:text-[#04ffc3] font-["Franklin Gothic"] xl:text-[22px] xl:tracking-[0.8px] xxl:text-[28px] xxl:tracking-[1px]'>Contact</li>
        </ul>
        {/* <div className={Style.icons}>
            <span></span>
            <span></span>
            <span></span>
        </div> */}
        <div className='flex s:gap-[20px] gap-[25px]'>
            <a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
                <div className='s:text-[17px] text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3] xl:text-[24px] xl:gap-[6px] xxl:text-[28px] xxl:gap-[8px]'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <h2>GitHub</h2>
                </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie-11714a301/">
                <div className='s:text-[17px] text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3] xl:text-[24px] xl:gap-[6px] xxl:text-[28px] xxl:gap-[8px]'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <h2>Linkedin</h2>
                </div>
            </a>
            <a target="_blank" href="">
                <div className='s:text-[17px] text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3] xl:text-[24px] xl:gap-[6px] xxl:text-[28px] xxl:gap-[8px]'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <h2>Mail</h2>
                </div>
            </a>
        </div>
        <hr className='w-[100px] border-none bg-[#ffffffcc] h-[3px] xl:h-[3.5px] xl:w-[250px] xxl:h-[4px] xxl:w-[320px]'/>
        <p className='s:text-[12px] text-[14px] text-white font-sans tracking-[0.5px] font-bold xl:text-[17px] xxl:text-[21px]'>Copyright@My-Portfolio</p>
    </footer>
    </>
  )
}

export default Footer
