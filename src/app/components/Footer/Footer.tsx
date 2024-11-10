import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'




function Footer() {
  return (
    <>
    
    <footer className='w-full flex flex-col items-center justify-center bg-[#0a0a0a] py-[30px] relative z-[1] gap-[25px] border-t-[1px] border-solid border-[#64ffda] '>
        <ul className='flex items-center justify-center gap-[20px]'>
            <li className='font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white gover:text-[#04ffc3] font-["Franklin Gothic"]'>Home</li>
            <li className='font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white gover:text-[#04ffc3] font-["Franklin Gothic"]'>Projects</li>
            <li className='font-[300] text-[18px] tracking-[0.5px] border-[#04ffc3] border-solid border-b-[1px] cursor-pointer text-white gover:text-[#04ffc3] font-["Franklin Gothic"]'>Contact</li>
        </ul>
        {/* <div className={Style.icons}>
            <span></span>
            <span></span>
            <span></span>
        </div> */}
        {/* <div className='flex gap-[25px]'>
            <a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
                <div className='text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3]'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <h2>GitHub</h2>
                </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie-11714a301/">
                <div className='text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3]'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <h2>Linkedin</h2>
                </div>
            </a>
            <a target="_blank" href="">
                <div className='text-white text-[20px] font-[700] flex items-center gap-[5px] hover:text-[#04ffc3]'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <h2>Mail</h2>
                </div>
            </a>
        </div> */}
        <hr className='w-[100px] border-none bg-[#ffffffcc] h-[3px]'/>
        <p className='text-[14px] text-white font-sans tracking-[0.5px] font-bold'>Copyright@My-Portfolio</p>
    </footer>
    </>
  )
}

export default Footer
