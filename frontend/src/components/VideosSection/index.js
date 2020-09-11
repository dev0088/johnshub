import React, { Fragment } from 'react';
import {
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import videoImage1 from '../../assets/images/home/home-video1.png';
import videoImage2 from '../../assets/images/home/home-video2.png';

import video1 from '../../assets/videos/Johnshub_1st_Video_with_new_logo.mp4';
import video2 from '../../assets/videos/Johnshub_Vendor_Revised.mp4';

const videos = [
  {
    image: videoImage1,
    url: video1,
    title: 'Customer',
    description: 'Click the video below to see how customers use Johnshub to find service providers fast',
    link: '',
  },
  {
    image: videoImage2,
    url: video2,
    title: 'Service provider',
    description: 'Click the video below to see how Service Providers use Johnshub to find customers without any cost per click schemes and advertising contracts',
    link: '',
  },
];

const VideosSection = () => {
  const [isPlays, setPlay] = React.useState([false, false]);

  const onClickPlay = (index) => {
    const nextData = isPlays;
    nextData[index] = true;
    setPlay(nextData);
  };

  const onClickPause = (index) => {
    const nextData = isPlays;
    nextData[index] = false;
    setPlay(nextData);
  }

  const onEnded = (index) => {
    onClickPause(index);
  }
  
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
                  {/* <p>
                    <img className="mt-3 mb-5" src={video.image} />
                  </p> */}
                  <div className='player-wrapper'>
                    <ReactPlayer
                      playing
                      className='react-player'
                      url={video.url}
                      width='100%'
                      height='100%'
                      controls
                      playIcon={<PlayCircleOutlineIcon className="player-button" onClick={() => onClickPlay(index)}/>}
                      light={video.image}
                      onPause={() => onClickPause(index)}
                      onEnded={() => onEnded(index)}
                    />
                  </div>
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
