import React from 'react';
import video from '../Assets/intro.mp4'

export default function Info() {
  return (
    <video src={video} width='100%' height='auto' controls />
  );
}
