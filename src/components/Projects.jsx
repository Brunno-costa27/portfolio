import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
// import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'


export function Projects() {

    return (
        <>
            <section id="projects" className="px-5 text-white mt-[85px] flex flex-col py-10 lg:px-20 2xl:px-96  font-sans animate-fadeIn">
                <h2 className="text-xl lg:text-4xl font-semibold mb-10">Projetos</h2>
                <div className="w-full h-auto grid lg:grid-cols-2 grid-cols-1  gap-8 ">
                    <div className='border border-fuchsia-300 lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img className='w-full h-auto' src={project1} alt="" loading="lazy"/>

                       <div className='flex flex-col space-y-6'>
                       <p className='text-base lg:text-2xl font-semibold'>
                       Página inicial do desafio de front-end
                        </p>

                        <p className='text-sm lg:text-lg text-[#929EB0]'>
                        Desenvolvido com ReactJS e Tailwind CSS. Desafio 19 da plataforma <span className='gradient-text'><a href="https://desafio22-projetos-codelandia.vercel.app/" target='_blank'>codelândia</a></span>
                        </p>
                       </div>

                        <div className='w-full  text-sm flex justify-between items-start gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center h-12 lg:p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                               <a href="https://rachi-front.netlify.app/" target='_blank'>Visualização</a>
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px] border border-white h-12  rounded-full hover:opacity-90">
                              <a href="https://github.com/Brunno-costa27/rachi" target='_blank'>Github</a>
                            </button>
                        </div>
                    </div>

                    <div className='border border-fuchsia-300  lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img className='w-full h-auto' src={project2} alt="" loading="lazy"/>

                        <div className='flex flex-col space-y-6'>
                        <p className='text-base lg:text-2xl font-semibold'>
                        Potifólio para desenvolvedor front-end
                        </p>

                        <p className='text-sm lg:text-lg text-[#929EB0]'>
                        Desenvolvido com ReactJS e Tailwind CSS. Portfólio com projetos pessoais.
                        </p>
                        </div>

                        <div className='w-full text-sm flex justify-between items-center gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center h-12 lg:p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                                <a href="https://lange-page-portfolio.netlify.app/" target='_blank'>Visualização</a>
                                
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px] h-12 rounded-full border border-white hover:opacity-90">
                               <a href="https://github.com/Brunno-costa27/portfolio" target='_blank'>Github</a>
                            </button>
                        </div>
                    </div>

                    <div className='border border-fuchsia-300  lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img className='w-full h-auto' src={project3} alt="" loading="lazy"/>

                       <div className='flex flex-col space-y-6'>
                       <p className='text-base lg:text-2xl font-semibold'>
                       Página inicial de um menu online
                        </p>

                        <p className='text-sm lg:text-lg text-[#929EB0]'>
                        Desenvolvido com ReactJS e Tailwind CSS. Página inicial de um menu online. Em construção para uma empresa na minha cidade.
                        </p>
                       </div>

                        <div className='w-full text-sm flex justify-between items-center gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center lg:p-6 h-12 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                              
                                <a href="https://cardapio-teste.netlify.app/" target='_blank'>Visualização</a>
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px] h-12 rounded-full border border-white hover:opacity-90">
                                <a href="https://github.com/Brunno-costa27/cardapio-online" target='_blank'>Github</a>
                            </button>
                        </div>
                    </div>
                    <div className='border border-fuchsia-300 lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img className='w-full h-auto' src={project5} alt="" loading="lazy"/>

                       <div className='flex flex-col space-y-6'>
                       <p className='text-base lg:text-2xl font-semibold'>
                       Página inicial do desafio de front-end
                        </p>

                        <p className='text-sm lg:text-lg text-[#929EB0]'>
                        Layout HTML/CSS responsivo Página inicial do desafio de front-end. HTML5, CSS3 (SCSS). Melhorando os fundamentos do front-end.
                        </p>
                       </div>

                        <div className='w-full text-sm flex justify-between items-center gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center lg:p-6 h-12 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                               <a href="https://landingpagescursos.netlify.app/" target='_blank'>Live preview</a>
                            </button>

                            <button
                                className="flex justify-center items-center p-6 w-[226px] border h-12 border-white rounded-full hover:opacity-90">
                                 <a href="https://github.com/Brunno-costa27/landing-page-cursojs" target='_blank'>Github</a>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}