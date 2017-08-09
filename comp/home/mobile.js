import Typist from 'react-typist'

const MobileHome = () => (
  <div>
    <div className='mobile-header'>
      <div className='typer-div'>
        <Typist>
          <h1>Toroco Trocking</h1>
        </Typist>
      </div>
      <div />
    </div>
    <style jsx>{`
      .typer-div {
        text-align: center;
        color: white;
        font-family: Roboto;
        text-transform: uppercase;
        align-self: center;
        font-size:33px;
      }
      .mobile-header {
        display: flex;
        justify-content: center;
        background-image: url('/static/compromiso.jpg');
        min-height: 600px;
        background-attachment: fixed;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -55px;
      }
    `}</style>
  </div>
)

export default MobileHome
