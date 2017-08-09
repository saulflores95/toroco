import React from 'react'
import Head from 'next/head'
const App = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=0' />
      <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' />
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
      <style>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
        #__next {
          height: 100%;
        }
        html {
          max-width: 100%;
          overflow-x: hidden;
          font-family: Roboto;
          margin-left: 0px;
          margin-top: 0px;
        }

        body {
          max-width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
          font-family: Roboto;
          margin-left: 0px;
          margin-top: 0px;
        }
      `}</style>
    </Head>
    <div>
      {props.children}
    </div>
  </div>
)

export default App
