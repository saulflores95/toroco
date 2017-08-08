import { Col, Row } from 'react-grid-system'

const Nostros = () => (
  <div className='nosotros'>
    <Row>
      <Col md={6}>
        <div className='container-info'>
          <h3>
             Somos una compañía localizada en Tijuana, Baja California,
             México y en San Diego, California, Estados Unidos. Nos especializamos
             en operaciones de Importación/Exportación a través de la frontera México/Estados
             Unidos por el puerto de entrada de Otay Mesa. Transportamos cargas en los estados de
             California, Nevada, Arizona, Oregon y Washington.
           </h3>
          <h3>
             A través de nuestros 14 años de experiencia, muchos de nuestros
             clientes nos han reconocido como una compañía formal
             y responsable en el área. Hemos adquirido la experiencia y
             confianza necesaria para ofrecer un buen servicio a nuestros clientes.
           </h3>
        </div>
      </Col>
      <Col sm={12} md={6}>
        <div className='turck-img'>
          <img id='truckImg' width='100%' height='300px' src='https://s-media-cache-ak0.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif' />
        </div>
      </Col>
    </Row>
    <style jsx>
      {`
         .nosotros {
           background: #F2F2F2;
           font-family: Roboto;
           padding:50px;
          text-align: justify;
           margin: -15px;
          }

          .truck-img {
            width: 300px;
            height: 100px !important;
          }

          #truckImg {
            padding-top: 90px;
          }

          .container-info {
            margin-top:100px;
            margin-bottom: 100px;
          }

          .container-info h3 {
            font-weight: 400;
            letter-spacing: 0.5px;
            line-height: 1.7em;
            color: #838282;
          }
        `}
    </style>
  </div>
 )

export default Nostros
