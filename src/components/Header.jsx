import linkedin from '../assets/images/linkedin.svg'
import instagran from '../assets/images/instagran.svg'
import seta from '../assets/images/seta.svg'
import { useEffect, useState, useRef } from 'react';

export function Header() {

    const timelineRef = useRef(null);

    const scrollToTimeline = () => {
        timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };

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

            <button
                onClick={scrollToTimeline}
                className="fixed bottom-4 right-4 rounded-full shadow-lg hover:opacity-90"
            >
                <img src={seta} alt="" loading="lazy"/>
            </button>
            {isMobile ? (
                <header ref={timelineRef}  className="px-10 lg:px-20 text-white flex flex-col justify-between items-center py-10 2xl:px-96 font-sans space-y-10">
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-full order-1 md:order-1'>
                            <p className='font-medium text-2xl xs:text-3xl'>Portifólio</p>
                        </div>

                        <div className="w-full flex justify-end gap-5 order-2 md:order-3">
                            <a className='w-6 h-6' href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                                <img src={linkedin} alt="icons" loading="lazy"/>
                            </a>

                            <a className='w-6 h-6' href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                                <img src={instagran} alt="icons" loading="lazy"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center order-3 md:order-2">

                        <nav className='w-full flex justify-between items-center text-xs'>
                            <ul className='w-full flex justify-between items-center gap-5'>
                                <li className='relative text-sm'>
                                <a 
                                    className='hover:underline-effect w-full h-full flex-grow' 
                                    href="#projects"
                                    onClick={(e) => handleScroll(e, 'projects')}
                                >
                                    Projetos
                                </a>
                                </li>
                                <li className='relative text-sm'>
                                    <a 
                                        className='hover:underline-effect w-full h-full flex-grow'
                                        href="#technologies"
                                        onClick={(e) => handleScroll(e, 'technologies')}
                                    >
                                        Tecnologias
                                    </a>
                                    </li>
                                <li className='relative text-sm'>
                                    <a 
                                        className='hover:underline-effect w-full h-full flex-grow' 
                                        href="#aboutme"
                                        onClick={(e) => handleScroll(e, 'aboutme')}
                                    >
                                        Sobre mim
                                    </a>
                                    </li>
                            </ul>
                        </nav>

                    </div>


                </header>
            ) : (
                <header ref={timelineRef}   className="px-10 lg:px-20 text-white flex justify-between items-center py-10 2xl:px-96 font-sans">
                    <div className='flex  w-auto order-1 md:order-1'>
                        <p className='font-medium text-3xl'>Portifólio</p>
                    </div>

                    <div className="flex w-full justify-center order-3 md:order-2">

                    <nav className='flex justify-between items-center text-xs'>
                            <ul className='w-full flex justify-between items-center gap-5'>
                                <li className='relative text-sm lg:text-xl xl:text-xl 2xl:text-xl'>
                                <a 
                                    className='hover:underline-effect w-full h-full flex-grow' 
                                    href="#projects"
                                    onClick={(e) => handleScroll(e, 'projects')}
                                >
                                    Projetos
                                </a>
                                </li>
                                <li className='relative text-sm lg:text-xl xl:text-xl 2xl:text-xl'>
                                    <a 
                                        className='hover:underline-effect w-full h-full flex-grow'
                                        href="#technologies"
                                        onClick={(e) => handleScroll(e, 'technologies')}
                                    >
                                        Tecnologias
                                    </a>
                                    </li>
                                <li className='relative text-sm lg:text-xl xl:text-xl 2xl:text-xl'>
                                    <a 
                                        className='hover:underline-effect w-full h-full flex-grow' 
                                        href="#aboutme"
                                        onClick={(e) => handleScroll(e, 'aboutme')}
                                    >
                                        Sobre mim
                                    </a>
                                    </li>
                            </ul>
                        </nav>

                    </div>

                    <div className="w-auto flex justify-end gap-5 order-2 md:order-3">
                        <a href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                            <img src={linkedin} alt="icons" loading="lazy"/>
                        </a>

                        <a href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                            <img src={instagran} alt="icons" loading="lazy"/>
                        </a>
                    </div>
                </header>
            )}
        </>

    )
}