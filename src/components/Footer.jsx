import linkedin from '../assets/images/linkedin.svg'
import instagran from '../assets/images/instagran.svg'

export function Footer(){

    return (
        <section className="text-white flex mt-10 justify-between items-center py-10 px-96 font-sans">
             <div className='w-full'>
                <p className='gradient-text font-semibold'>Feel free to contact me</p>
             </div>

             <div className='w-full'>
                <p className='font-semibold'>sbrunno.costa@gmail.com </p>
             </div>

             <div className='w-full'>
                <p className='font-semibold'>Telegram @onnurbcosta </p>
             </div>

             <div className="w-full flex gap-5">
                <a href="https://www.linkedin.com/in/brunno-costa/" target="_blank">
                        <img src={linkedin} alt="icons" />
                    </a>

                    <a href="https://www.instagram.com/brunno_costa31/ " target="_blank">
                        <img src={instagran} alt="icons" />
                    </a>
             </div>
        </section>
        
    )
}