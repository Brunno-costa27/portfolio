import linkedin from '../assets/images/linkedin.svg'
import instagran from '../assets/images/instagran.svg'

export function Footer(){

    return (
        <section className="text-white px-5 gap-2 grid lg:grid-cols-4 grid-cols-2 mt-10 justify-between items-center py-10 lg:px-20 2xl:px-96 font-sans">
             <div className='w-full'>
                <p className='gradient-text font-semibold text-sm'>Feel free to contact me</p>
             </div>

             <div className='w-full'>
                <p className='font-semibold text-sm tracking-tighter truncate'>sbrunno.costa@gmail.com </p>
             </div>

             <div className='w-full'>
                <p className='font-semibold text-sm'>Telegram @onnurbcosta </p>
             </div>

             <div className="w-full flex justify-end gap-5">
                <a href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                        <img src={linkedin} alt="icons" loading="lazy"/>
                    </a>

                    <a href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                        <img src={instagran} alt="icons" loading="lazy"/>
                    </a>
             </div>
        </section>
        
    )
}