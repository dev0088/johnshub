import React, { Fragment } from 'react';
import {
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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
      <div className="py-4 bg-gray-1000 video-section">
        <Container fixed className="pb-4">
          <Grid container spacing={4}>
            {videos.map((video, index) => {
              return (
                <Grid item xs={12} md={6} key={`video-${index}`} className="text-center">
                  <h3 className="sub-title text-primary">{video.title}</h3>
                  <p className="text-left font-size-lg">{video.description}</p>
                  <div className='player-wrapper'>
                    <ReactPlayer
                      playing
                      className='react-player'
                      url={video.url}
                      width='100%'
                      height='100%'
                      controls
                      playIcon={<div className="player-button-container"><PlayArrowIcon className="player-button-internal" onClick={() => onClickPlay(index)}/></div>}
                      light={video.image}
                      onPause={() => onClickPause(index)}
                      onEnded={() => onEnded(index)}
                    />
                  </div>
                  <Button
                    color="primary"
                    variant="contained"
                    id={`signup-${index}`}
                    className="botton-signup"
                    name="signup"
                    type="submit">
                    <span className="button-text btn-wrapper--label font-weight-bold">Sign up</span>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};
export default VideosSection;
