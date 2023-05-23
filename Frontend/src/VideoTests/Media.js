import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import MediaPlayer from './MediaPlayer'
import { Player,ControlBar,BigPlayButton,ReplayControl,ForwardControl,PlaybackRateMenuButton,Shortcut } from 'video-react';

export default function Media(props) {
  const [speed,setSpeed] = useState();
  const mediaUrl = props.media._id ? `http://localhost:4000/VideoStreamTest/${props.media._id}`: null //Add video controller route
  useEffect(()=>{
    setSpeed(2);
  },[speed])
  return (
      <div>
      {/* <MediaPlayer srcUrl={mediaUrl} /> */}
        <Player src={mediaUrl} ref={c => {
          setSpeed(c);
        }}>
        <BigPlayButton position="center" />
          <ControlBar autoHide={true}>
            <ReplayControl seconds={30} order={2.3} />
            <ForwardControl seconds={30} order={3.3} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
            <Shortcut clickable={true}/>
          </ControlBar>
        </Player>
      </div>
    )
}


Media.propTypes = {
  media: PropTypes.object,
}

