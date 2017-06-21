import React from 'react'

const Video = () => (
  <div className='container'>
    <div className='videoContainer'>
      <video width='100%' height='100%' autoPlay loop muted>
        <source src='http://cdn.shutterstock.com/shutterstock/videos/4462838/preview/stock-footage--wheel-truck-on-the-road-with-sunset-in-the-background-large-delivery-truck-is-moving-towards-set.mp4' type='video/mp4' />
        <source src='https://videos.pond5.com/truck-highway-2-footage-033305026_main_xxl.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'>
        <h1>Toroco Trucking</h1>
      </div>
    </div>
    <style jsx>
      {`
        @media only screen and (min-width: 1025px) {
          .video-container {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 100;
          }

          .video-container video {
            /* Make video to at least 100% wide and tall */
            min-width: 100%;
            min-height: 100%;

            /* Setting width & height to auto prevents the browser from stretching or squishing the video */
            width: auto;
            height: auto;
            z-index: -1;
            /* Center the video */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }

          .overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            bottom: 50%;
            left: 0;
            right: 30%;
            width: 95%;
            font-family:'Roboto'
            max-width: 50em;
            margin: auto auto 1em;
            box-sizing: border-box;
            padding: 2em;
            line-height: 1.5;
            text-align: center;
          }

          .overlay h1 {
            font-size: 55px;
            color: white;
          }
        }

        @media only screen and (min-width: 481px) and (max-width: 1024px) {
          .video-container {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 100;
          }

          .video-container video {
            /* Make video to at least 100% wide and tall */
            min-width: 100%;
            min-height: 100%;

            /* Setting width & height to auto prevents the browser from stretching or squishing the video */
            width: auto;
            height: auto;
            z-index: -1;
            /* Center the video */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }

          .overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            bottom: 50%;
            left: 0;
            right: 30%;
            width: 95%;
            max-width: 50em;
            margin: auto auto 1em;
            box-sizing: border-box;
            padding: 2em;
            line-height: 1.5;
            text-align: center;
          }

          .overlay h1 {
            font-size: 55px;
            color: white;
          }

        }

      `}
    </style>
  </div>

)

export default Video
