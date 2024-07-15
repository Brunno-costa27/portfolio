import project from '../assets/images/project.png'

export function Projects() {

    return (
        <>

            <section className="px-10 text-white mt-[100px] flex flex-col py-10 lg:px-96 font-sans">
                <h2 className="text-xl lg:text-4xl font-semibold mb-16">Projects</h2>
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 ">
                    <div className='border border-fuchsia-300 lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img src={project} alt="" />

                       <div className='flex flex-col space-y-6'>
                       <p className='text-base lg:text-2xl font-semibold'>
                            Furniture store landing page
                        </p>

                        <p className='text-sm lg:text-lg text-[#929EB0]'>
                            Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)
                        </p>
                       </div>

                        <div className='w-full text-sm flex gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center h-12 lg:p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                               Live preview
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px] border border-white h-12  rounded-full hover:opacity-90">
                              Github
                            </button>
                        </div>
                    </div>

                    <div className='border border-fuchsia-300  lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img src={project} alt="" />

                        <div className='flex flex-col space-y-6'>
                        <p className='text-2xl font-semibold'>
                            Furniture store landing page
                        </p>

                        <p className='text-lg text-[#929EB0]'>
                            Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)
                        </p>
                        </div>

                        <div className='w-full text-sm flex gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                                Live preview
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px]  rounded-full border border-white hover:opacity-90">
                               Github
                            </button>
                        </div>
                    </div>

                    <div className='border border-fuchsia-300  lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img src={project} alt="" />

                       <div className='flex flex-col space-y-6'>
                       <p className='text-2xl font-semibold'>
                            Furniture store landing page
                        </p>

                        <p className='text-lg text-[#929EB0]'>
                            Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)
                        </p>
                       </div>

                        <div className='w-full text-sm flex gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                                Live preview
                            </button>

                            <button
                                className="flex  justify-center items-center p-6 w-[226px]  rounded-full border border-white hover:opacity-90">
                               Github
                            </button>
                        </div>


                        
                    </div>

                    <div className='border border-fuchsia-300 lg:p-10 p-5 rounded-[25px] space-y-10'>
                        <img src={project} alt="" />

                       <div className='flex flex-col space-y-6'>
                       <p className='text-2xl font-semibold'>
                            Furniture store landing page
                        </p>

                        <p className='text-lg text-[#929EB0]'>
                            Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)
                        </p>
                       </div>

                        <div className='w-full text-sm flex gap-2'>
                            <button
                                className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center p-6 w-[226px]  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                                Live preview
                            </button>

                            <button
                                className="flex justify-center items-center p-6 w-[226px] border border-white rounded-full hover:opacity-90">
                                 Github
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}