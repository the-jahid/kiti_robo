import React from 'react';
import ReactHLSPlayer from 'react-hls-player';

import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const hlsConfig = {
    src: 'http://202.59.208.114/hls/',
    autoPlay: true,
    controls: true,
    width: '100%',
    height: '100%',
  };
  return (
    <div>
       <ReactHLSPlayer {...hlsConfig} />
    </div>
  );
}

export default VideoPlayer;