import React, { Fragment } from 'react';
import {
  Container,
} from '@material-ui/core';
import serviceIcon1 from '../../assets/images/home/service-icon1.png';
import serviceIcon2 from '../../assets/images/home/service-icon2.png';
import serviceIcon3 from '../../assets/images/home/service-icon3.png';
import serviceIcon4 from '../../assets/images/home/service-icon4.png';
import serviceIcon5 from '../../assets/images/home/service-icon5.png';
import serviceIcon6 from '../../assets/images/home/service-icon6.png';
import serviceIcon7 from '../../assets/images/home/service-icon7.png';
import serviceIcon8 from '../../assets/images/home/service-icon8.png';
import serviceIcon9 from '../../assets/images/home/service-icon9.png';
import serviceIcon10 from '../../assets/images/home/service-icon10.png';

const serviceIcons = [
  {
    icon: serviceIcon1,
    title: 'Plumbers',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon2,
    title: 'Electricians',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon3,
    title: 'Painters',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon4,
    title: 'Lawyers',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon5,
    title: 'Tutors',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon6,
    title: 'Realtors',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon7,
    title: 'Bus rentals',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon8,
    title: 'Therapists',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon9,
    title: 'Sport coaches',
    subTitle: '',
    link: '',
  },
  {
    icon: serviceIcon10,
    title: 'Tickets',
    subTitle: '(coming soon)',
    link: '',
    isComingSoon: true
  },
];

const ServicesSection = () => {
  return (
    <Fragment>
      <div className="py-4 bg-white">
        <Container fixed className="pb-4 home-service-icons">
          <div className="text-center py-4">
            <h3 className="display-3 mb-2 font-weight-bold text-primary">
              Just some of the services you can file
            </h3>
          </div>

          <div className="service-icons-outer d-flex">
            {serviceIcons.map((service, index) => {
              return (
                <div className="service-icon" key={`service-icon-${index}`}>
                  <img src={service.icon} />
                  <span className={`icon-title font-size-lg ${service.isComingSoon && 'coming-soon'}`}>
                    {service.title}
                    {service.subTitle && 
                      <span className="coming-soon-text">{service.subTitle}</span>
                    }
                    </span>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default ServicesSection;
