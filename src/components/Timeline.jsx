import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <VerticalTimeline className='w-full px-5 sm:px-6 lg:px-8'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2022"
      contentStyle={{ background: '#0F1624', color: '#fff', padding: '20px', boxShadow: 'none' }}
      contentArrowStyle={{ border: 'none', background: '#0F1624' }}
      iconStyle={{ 
        background: 'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
        color: '#fff',
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
        I worked as an intern for a year as a full stack developer.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2023"
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
      I worked as a front end developer as a volunteer for an NGO for a month.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white"
      date="2023"
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
        Graduated from the Federal Institute of Rio Grande do Norte (IFRN) where he developed several projects in the area of ​​software development.
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
      took a reactJs and NodeJs course at <span className="gradient-text"><a href="https://app.rocketseat.com.br/">rocketseat</a></span> platform.
      </p>
    </VerticalTimelineElement> */}
  </VerticalTimeline>
  );
};

export default Timeline;
