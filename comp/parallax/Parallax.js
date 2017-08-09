import { Visible } from 'react-grid-system'

const Parallax = ({title, img}) => {
  return (
    <div>
      <div className='parallax' style={{ backgroundImage: `url("${img}")` }}>
        <Visible lg xl>
          <div className='overlay'>
            <h1>{title}</h1>
          </div>
        </Visible>
        <Visible xs sm md>
          <div className='mobile-overlay'>
            <h1>{title}</h1>
          </div>
        </Visible>
      </div>
      <style jsx>{`
        .parallax {
          min-height: 600px;
          background-attachment: fixed;
          background-position: bottom center;
          background-repeat: no-repeat;
          background-size: cover;
          margin: -55px;
        }

        .mobile-overlay {
          font-family: Roboto;
          color: white;
          font-size: 30px;
          text-align: center;
          padding-top: 150px;
        }

        .overlay {
          font-family:Roboto;
          color: white;
          font-size: 45px;
          letter-spacing: 0.5em;
          background: rgba(0,0,0,0.7);
          width: 100%;
          height: 601px;
          line-height: 500px;
          text-align: center;
        }

        .overlay h1 {
          margin:0px;
          text-transform: uppercase;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

export default Parallax
