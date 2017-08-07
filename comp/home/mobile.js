import Typist from 'react-typist'

const MobileHome = () => (
  <div>
    <div className='mobile-header'>
      <div className='typer-div'>
        <Typist>
          <h1>Estrategia en tiempo real.</h1>
        </Typist>
      </div>
    </div>
    <style jsx>{`
      .typer-div {
        text-align: center;
        color: white;
        padding-top: 120px;
        font-family: Roboto;
        text-transform: uppercase;
      }
      .mobile-header {
        background-color: red;
        background-size: 100% 300px;
        height: 300px;
        margin-left: -10px;
        margin-right: -10px;
        margin-top: -60px;
        background-repeat: no-repeat;
        background-image: url('/static/compromiso.jpg')
      }
    `}</style>
  </div>
)

export default MobileHome
