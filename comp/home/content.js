import { Row, Col } from 'react-grid-system'

const MobileContent = () => (
  <div>
    <div className='mobile-content'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id='left'>
            <h2>Somos una compañía certificada en el programa C-TPAT por mas de 10 años</h2>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id='right'>
            <img src='http://www.transportesvector.com.mx/img/c-tpat.png' />
          </div>
        </Col>
      </Row>
    </div>
    <style jsx>{`
      .mobile-content {
        height: 500px;

      }

      #left {
        background-color: #375651;
        height: 445px;
        width: 100%;
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      #right {
        height: 445px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    `}</style>
  </div>
)

export default MobileContent
