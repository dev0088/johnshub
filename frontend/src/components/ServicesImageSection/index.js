import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import imageCard1 from '../../assets/images/home/home-card1.jpg';
import imageCard2 from '../../assets/images/home/home-card2.jpg';
import imageCard3 from '../../assets/images/home/home-card3.jpg';
import imageCard4 from '../../assets/images/home/home-card4.jpg';
import imageCard5 from '../../assets/images/home/home-card5.jpg';
import imageCard6 from '../../assets/images/home/home-card6.jpg';

const serviceCards = [
  {
    image: imageCard1,
    text: 'Find private coches',
  },
  {
    image: imageCard2,
    text: 'Find a lawyer',
  },
  {
    image: imageCard3,
    text: 'Find a Realtor',
  },
  {
    image: imageCard4,
    text: 'Find a tutor',
  },
  {
    image: imageCard5,
    text: 'Find a bus rental',
  },
  {
    image: imageCard6,
    text: 'Find any service',
  },
];

const ServicesImageSection = () => {
  return (
    <Fragment>
      <Grid container spacing={1} className="service-cards p-0 ">
        {serviceCards.map((service, index) => {
          return (
            <Grid item fluid="true" xs={6} md={4} lg={2} key={`service-${index}`}>
              <div className="service-card">
                <div className="card-outer service-card-image">
                  <img src={service.image} />
                  <p className="card-title">{service.text}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};
export default ServicesImageSection;
