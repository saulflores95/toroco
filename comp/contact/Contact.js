import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container, Row, Col} from 'react-grid-system'
import Navbar from '../navbar/Navbar'
const position = [32.5194358, -117.0101997]
import NoSSR from 'react-no-ssr'
import { Component } from 'react'
//  const tijuana = [32.545048, -116.999554]
//  const sanDiego = [32.574632, -116.962051]

export default class Contact extends Component {
  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    return (
      <div className='wrapper'>
        <div className='imgcontainer'>
          <img width='100px' height='100px' src='http://www.torocotrucking.com/freightmanager/images/main_logo.jpg' />
        </div>
        <h2 className='text'>Contact us</h2>
        <h2 className='text'>It is our pleasure!</h2>
        <Container className='contactForm'>
          <MuiThemeProvider>
            <div>
              <TextField
                hintText={<span className='label'>Name</span>}
                fullWidth
              /><br />
              <TextField
                hintText={<span className='label'>Email</span>}
                fullWidth
              /><br />
              <TextField
                hintText={<span className='label'>Phone</span>}
                fullWidth
              /><br />
              <TextField
                hintText={<span className='label'>Message</span>}
                fullWidth
                multiLine
                rows={2}
            /><br />
            </div>
          </MuiThemeProvider>
            <div className='map'>
              <Map center={position} zoom={12}>
                <TileLayer
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
              </Map>
            </div>
          <div>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <div className='number'>
                  <h1>Tijuana</h1>
                  <h3><b>Tel: </b>(664) 647-8794 </h3>
                  <h3><b>Tel: </b>(664) 647-5930 </h3>
                  <h3><b>Fax: </b>(619) 758-3634 </h3>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div className='number'>
                  <h1>San Diego</h1>
                  <h3><b>Tel: </b>(619) 671-5840</h3>
                  <h3><b>Fax: </b>(619) 758-3634</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <style jsx>
          {`
              .wrapper{
                padding-top: 30px;
              }

              .text{
                text-align: center;
                color: gray;
                font-size: 16px;
              }

              .label {
                color: gray !important;
              }

              .imgcontainer{
                width: 100px;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                display: block;
              }

              .contactForm {
                padding-top: 15px;
              }

              .map {
                height: 350px;
                margin-bottom: 55px;
              }

              .number {
                text-align: center;
              }

            `}
        </style>
      </div>
    )
  }
}
