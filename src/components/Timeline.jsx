import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <VerticalTimeline className='w-full px-5 sm:px-6 lg:px-8'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2022"
      // contentStyle={{ background: '#0F1624', color: '#fff', padding: '20px', boxShadow: 'none' }}
      // contentArrowStyle={{ border: 'none', background: '#0F1624' }}
      iconStyle={{ 
        background: 'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
        color: '#0F1624',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginRight: '20px',
        marginBottom: '15px',
        marginTop: '15px',
      }}
      icon={<i className="fas fa-briefcase" style={{ fontSize: '16px' }}></i>}
    >
      <p className='text-[#929EB0]'>
        Trabalhei como estagiário por um ano como desenvolvedor full stack.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2023"
      // contentStyle={{ background: '#0F1624', color: '#fff', padding: '20px', boxShadow: 'none' }}
      // contentArrowStyle={{ border: 'none', background: '#0F1624' }}
      iconStyle={{ 
        background: 'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
        color: '#fff',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '15px',
      }}
      icon={<i className="fas fa-briefcase text-white"></i>}
    >
      <p className='text-[#929EB0]'>
      Trabalhei como desenvolvedor front end voluntário em uma ONG por um mês.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2023"
      // contentStyle={{ background: '#0F1624', color: '#fff', padding: '20px', boxShadow: 'none', border: "1px solid red" }}
      // contentArrowStyle={{ border: '1px solid red', background: '#fff' }}
      iconStyle={{ 
        background: 'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
        color: '#fff',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '15px',
      }}
      icon={<i className="fas fa-briefcase text-white"></i>}
    >
      <p className='text-[#929EB0]'>
        Formado pelo Instituto Federal do Rio Grande do Norte (IFRN), onde desenvolveu diversos projetos na área de desenvolvimento de software.
      </p>
    </VerticalTimelineElement>

    {/* <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2024"
      contentStyle={{ background: '#0F1624', color: '#fff', padding: '20px', boxShadow: 'none' }}
      contentArrowStyle={{ border: 'none', background: '#0F1624' }}
      iconStyle={{ 
        background: 'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
        color: '#fff',
        width: '40px',
        height: '40px',
        marginLeft: '-20px',
        marginTop: '15px',
      }}
      icon={<i className="fas fa-briefcase text-white"></i>}
    >
      <p className='text-[#929EB0]'>
      Fiz um curso de ReactJS e NodeJS na plataforma <span className="gradient-text"><a href="https://app.rocketseat.com.br/">rocketseat</a></span>.
      </p>
    </VerticalTimelineElement> */}
  </VerticalTimeline>
  );
};

export default Timeline;
