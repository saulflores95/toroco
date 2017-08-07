import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Col, Row} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

export default class Contact extends Component {
  handleEmail () {
    console.log(this.refs.name.getValue())
    console.log()
    console.log(this.refs.phone.getValue())
    console.log(this.refs.message.getValue())
    axios.post('/test', {
      name: this.refs.name.getValue(),
      email: this.refs.email.getValue(),
      phone: this.refs.phone.getValue(),
      message: this.refs.message.getValue()
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <MuiThemeProvider>
              <div className='form-wrapper'>
                <div className='text-container'>
                  <h2 className='text'>Deja tu informacion</h2>
                </div>
                <TextField
                  hintText={<span className='label'>Nombre</span>}
                  fullWidth
                  ref='name'
                /><br />
                <TextField
                  hintText={<span className='label'>Correo</span>}
                  fullWidth
                  ref='email'
                /><br />
                <TextField
                  hintText={<span className='label'>Telefono</span>}
                  fullWidth
                  ref='phone'
                /><br />
                <TextField
                  hintText={<span className='label'>Mensaje</span>}
                  fullWidth
                  multiLine
                  rows={2}
                  ref='message'
              /><br />
                <div className='button-form'>
                  <div className='button-container'>
                    <RaisedButton
                      label={<span style={{color: 'black'}}>Enviar</span>}
                      labelPosition='before'
                      primary={false}
                      className='raised-button'
                      style={{width: 180, marginTop: 20, marginBottom: 20, backgroundColor: 'inherit'}}
                      onClick={this.handleEmail.bind(this)}
                  />
                  </div>
                </div>
              </div>
            </MuiThemeProvider>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} style={{padding: 0, maxHeight: 388}}>
            <div>
              <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13453.01321741493!2d-116.9534487!3d32.5460843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d8220aae7ef18!2sToroco+Trucking!5e0!3m2!1ses-419!2smx!4v1500584628741' width='100%' height='388' allowFullScreen style={{border: 0}} />
            </div>
          </Col>
        </Row>
        <style jsx>
          {`
            .wrapper{
              max-width: 875px;
              margin-left: auto;
              margin-right: auto;
              display: block;
              background-color: #fbfaf8;
            }

            .text{
              text-align: left;
              color: black;
              font-size: 27px;
              font-family: Roboto !important;
              font-weight: 400;
              text-transform: uppercase;
            }

            .label {
              color: black !important;
              background-image: none !important;
              font-family: Roboto !important;
              font-size: 14px !important;
            }
            .form-wrapper {
              padding-left: 15px;
            }

            .img-container {
              margin-right: auto;
              display: block;
              width: 128px;
              height: 128px;
              margin-left: auto;
            }

            .contactForm {
              padding-top: 15px;
            }

            .img {
              margin-left: auto;
              margin-right: auto;
              display: bock;
            }

            .text-container {
              left: 0;
            }

            .button-form {
              margin-left: auto;
              margin-right: auto;
              display: block;
              height: 76px;
            }

            .button-container {
              background-color: black;
              height: 0;
            }
            .button-container:hover {
              background-color: #5e5e5e;
            }
          `}
        </style>
      </div>
    )
  }
}
