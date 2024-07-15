import linkedin from '../assets/images/linkedin.svg'
import instagran from '../assets/images/instagran.svg'
import { useEffect, useState } from 'react';


export function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <>
            { isMobile ? (
            <header className="px-10 lg:px-20 text-white flex flex-col justify-between items-center py-10 2xl:px-96 font-sans space-y-10">
            <div className='w-full flex justify-between items-center'>
            <div className='w-full order-1 md:order-1'>
                <p className='font-medium text-xl xs:text-3xl'>Portfolio</p>
            </div>

            <div className="w-full flex justify-end gap-5 order-2 md:order-3">
                <a className='w-4 h-4' href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                    <img src={linkedin} alt="icons" />
                </a>

                <a className='w-4 h-4' href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                    <img src={instagran} alt="icons" />
                </a>
            </div>
            </div>

            <div className="flex w-full justify-between items-center order-3 md:order-2">

                <nav className='w-full flex justify-between items-center text-xs'>
                    <ul className='w-full flex justify-between items-center gap-5'>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">Projects</a></li>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">Technologies</a></li>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">About me</a></li>
                    </ul>
                </nav>

            </div>

            
        </header>
        ):(
            <header className="px-10 lg:px-20 text-white flex justify-between items-center py-10 2xl:px-96 font-sans">
            <div className='w-full order-1 md:order-1'>
                <p className='font-medium text-3xl'>Portfolio</p>
            </div>

            <div className="flex w-full justify-center order-3 md:order-2">

                <nav className='flex'>
                    <ul className='flex gap-5'>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">Projects</a></li>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">Technologies</a></li>
                        <li className='relative'><a className='hover:underline-effect w-full h-full flex-grow' href="#">About me</a></li>
                    </ul>
                </nav>

            </div>

            <div className="w-full flex justify-end gap-5 order-2 md:order-3">
                <a href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                    <img src={linkedin} alt="icons" />
                </a>

                <a href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                    <img src={instagran} alt="icons" />
                </a>
            </div>
        </header>
        )}
        </>
        
    )
}