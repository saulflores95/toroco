import React from 'react'
import {Row, Col} from 'react-grid-system'

const Info = () => (
  <div className='container'>
    <Row>
      <Col lg={4} md={6} sm={6} xs={6}>
        <div className='card'>
          <img className='cardImg' src='http://www.chinatrucks.com/uploadfile/news/uploadfile/201204/20120426083955199.jpg' />
          <h1 className='title'>
            Respeto
          </h1>
          <p>
            Cumplimos con todos los procedimientos
            de seguridad internos y externos de
            Wnuestros clientes
          </p>
          <br />
          <br />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6} xs={6}>
        <div className='card'>
          <img className='cardImg' src='http://www.freegreatpicture.com/files/141/19761-hd-truck-truck.jpg' />
          <h1 className='title'>
            Compromiso
          </h1>
          <p>
            Es nuestro acuerdo al respetar ciertas instrucciones
            y obligaciones para con nuestros clientes durante el
            transporte de la mercancía
          </p>
        </div>
      </Col>
      <Col lg={4} md={6} sm={6} xs={6}>
        <div className='card'>
          <img className='cardImg' src='http://www.skf.com/binary/202-167321/full/13468-010.jpg' />
          <h1 className='title'>
            Honestidad
          </h1>
          <p>
            Proveemos información precisa y veraz a nuestros clientes
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6} xs={6}>
        <div className='card'>
          <img className='cardImg' src='https://previews.123rf.com/images/suljo/suljo1006/suljo100600013/7241998-HDR-image-of-two-trucks-in-transportation-route-Stock-Photo-logistics-truck-transport.jpg' />
          <h1 className='title'>
            Vanguardia
          </h1>
          <p>
            Estamos actualizados en los últimos
            avances del área de transporte de carga
          </p>
          <br />
          <br />
          <br />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6} xs={6}>
        <div className='card'>
          <img className='cardImg' src='http://roadweigh.com/files/truck-in-transport.jpg' />
          <h1 className='title'>
            Calidad
          </h1>
          <p>
            Proveemos un servicio óptimo,
            cumpliendo con el objetivo de
            satisfacer las necesidades del cliente
            y su mercancía
          </p>
        </div>
      </Col>
    </Row>
    <style>{`
      .container {
        margin-top: 200px;
        font-family: Roboto;
      }
      .misionparafo {
        text-align: center;
        padding-top: 200px;
        font-size: 18px;
        color: gray;
        width: 100%;
        padding-bottom: 200px;
      }

      .quienesheader {
        height: 400px;
        background-image: url('http://www.torocotrucking.com/freightmanager/images/main_image2.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .misioncontainer {
        padding-top: 250px;
      }

      .title {
        text-align: center;
      }

      .card {
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        transition: box-shadow 0.3s ease-in-out;
        padding: 20px;
      }

      .card p {
        font-size: 22px;
      }

      .cardImg {
        height: 250px;
        width: 100%;
      }

      .card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }
    `}</style>
  </div>
)

export default Info
