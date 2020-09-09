import React, { Fragment } from 'react';
import {
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import videoImage1 from '../../assets/images/home/home-video1.png';
import videoImage2 from '../../assets/images/home/home-video2.png';

const videos = [
  {
    image: videoImage1,
    title: 'Customer',
    description: 'Click the video below to see how customers use Johnshub to find service providers fast',
    link: '',
  },
  {
    image: videoImage2,
    title: 'Service provider',
    description: 'Click the video below to see how Service Providers use Johnshub to find customers without any cost per click schemes and advertising contracts',
    link: '',
  },
];

const VideosSection = () => {
  return (
    <Fragment>
      <div className="py-4 bg-secondary video-section">
        <Container fixed className="pb-4">
          <Grid container spacing={4}>
            {videos.map((video, index) => {
              return (
                <Grid item xs={12} md={6} key={`video-${index}`} className="text-center">
                  <h3 className="sub-title text-primary">{video.title}</h3>
                  <p className="text-left font-size-lg">{video.description}</p>
                  <p><img className="mt-3 mb-5" src={video.image} /></p>
                  <Button
                    color="primary"
                    variant="contained"
                    id={`signup-${index}`}
                    name="signup"
                    type="submit">
                    <span className="btn-wrapper--label font-weight-bold">Sign up</span>
                  </Button>
                </Grid>
              );
              })
            }
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};
export default VideosSection;
