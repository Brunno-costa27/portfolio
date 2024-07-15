import backgroundImage from '../assets/images/backgroundImage.svg'
import photograph from '../assets/images/photograph.jpg'
import axios from 'axios'

export function Main(){

    const handleDownload = async () => {

        try {
          const response = await axios.get('https://fastify-pdf-download.vercel.app/download', {
            responseType: 'blob', // Importante para lidar com dados binários (como arquivos)
          });
          console.log(response)
          // Criar um URL temporário para o arquivo baixado
          const url = window.URL.createObjectURL(new Blob([response.data]));
    
          // Criar um link temporário e clicá-lo para iniciar o download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'curriculo_atualizado.pdf'); // Nome do arquivo a ser baixado
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        } catch (error) {
          console.error('Erro ao baixar o arquivo:', error);
          // Tratar erros, exibir mensagens de erro, etc.
        }
      };


      

    return (
        <main className="w-full px-10 text-white lg:mt-48 mt-24 flex justify-between items-center lg:px-20 2xl:px-96 font-sans relative">
            <div className="flex flex-col space-y-5 lg:space-y-20 lg:absolute">
               <p className="text-3xl lg:text-6xl flex flex-col lg:space-y-10 space-y-5">
                <span className="gradient-text font-semibold">Hello, I'm Brunno, </span>
                <span className='font-semibold'>Full Stack developer</span>
                </p>

                <p className='text-[#929EB0] lg:text-base text-sm lg:w-[620px] text-left'>
                graduated in Systems Analysis and Development from the Federal Institute of Rio Grande do Norte. He has solid programming skills, having experience in the JavaScript language.
                </p>

                <div className=''>
                <button 
                    onClick={handleDownload}
                    className="flex shadow-lg shadow-[#00B2FF]  justify-center items-center p-3 lg:p-6 lg:w-[226px] w-full  rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] hover:opacity-90">
                    Download CV
                </button>
                </div>
            </div>

            <div className='hidden lg:w-full lg:flex lg:justify-end lg:items-end'>
                <img src={backgroundImage} alt="" />
            </div>

            <div className='hidden lg:flex lg:absolute w-[250px] h-[250px] top-0 2xl:right-[500px]   object-cover'>
            <img 
                src={photograph} 
                alt="" 
                className='rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] via- to-[#945DD6] shadow-lg shadow-[#00B2FF]'/>
            </div>
        </main>
    )
}