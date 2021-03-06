import { Col, Row, Visible } from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const services = [
  {title: 'Servicio de Importación/Exportación a través del Puerto de Entrada de Otay Mesa', icon: 'fa fa-truck'},
  {title: 'Servicio a cualquier localización en los estados de California, Nevada, Arizona, Oregon y Washington', icon: 'fa fa-globe'},
  {title: 'Como miembro activo del programa C-TPAT sus cargas cruzarán por la línea FAST', icon: 'fa fa-fighter-jet'},
  {title: 'Se elaboran E-Manifest utilizando el sistema ACE del CBP', icon: 'fa fa-check'},
  {title: 'Disponibilidad de trailers de 53 pies 24/7', icon: 'fa fa-clock-o'},
  {title: 'Sistema de monitoreo GPS para sus cargas', icon: 'fa fa-map-marker'},
  {title: 'Acceso rápido por internet a información relacionada con sus cargas a través de nuestro sistema de monitoreo', icon: 'fa fa-internet-explorer'},
  {title: 'Espacio para almacenamiento de trailers de todos tamaños en Tijuana y San Diego, protegido con personal de seguridad y camaras de circuito cerrado', icon: 'fa fa-hdd-o'},
  {title: 'Vigilancia las 24 horas en nuestras instalaciones', icon: 'fa fa-user-secret'},
  {title: 'Aseguranza para su mercancía incluida', icon: 'fa fa-shield'}
]

const Services = () => (
  <div>
    <Row>
      <Visible lg xl>
        <div className='heading-text'>
          <h1>En Transportes Toroco estamos comprometidos
            a proporcionar un excelente servicio
            y si nos elige como su compañía de transporte
            de carga estos serán algunos de sus beneficios: </h1>
        </div>
      </Visible>
      <Visible xs sm md>
        <div className='heading-text-mobile'>
          <h2>En Transportes Toroco estamos comprometidos
            a proporcionar un excelente servicio</h2>
        </div>
      </Visible>
    </Row>
    <Row>
      <MuiThemeProvider>
        <Row>
          {services.map(ser => {
            return (
              <Col md={4}>
                <div className='card'>
                  <div className='card-content'>
                    {ser.title}
                    <Row>
                      <Col md={12}>
                        <i className={ser.icon} aria-hidden='true' />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </MuiThemeProvider>
    </Row>
    <style>{`
      body {
        font-family: Roboto;
      }
      .heading-text {
        text-align:center;
        color: gray;
        font-size: 20px;
        padding: 100px;
      }
      .heading-text-mobile {
        text-align: center;
        color: gray;
        padding-top: 120px;
        padding-bottom: 120px;
        background-color: #F8F8F8;
      }
      .card{
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        height: 300px;
        margin-top:30px;
      }
      .card-content {
        text-align:center;
        padding:50px;
        font-size:20px;
      }
      .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

      }
    `}</style>
  </div>
)

export default Services
