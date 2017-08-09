import { Row, Col } from 'react-grid-system'

const MobileContent = () => (
  <div>
    <div className='mobile-content'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div id='left'>
            left
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <div id='right'>
          right
        </div>        </Col>
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
      }

    `}</style>
  </div>
)

export default MobileContent
