import { Visible } from 'react-grid-system'

const Parallax = ({title, img}) => (
  <div>
    <div className='parallax'>
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
    <style>{`
      .parallax {
        background-image: url(${img});
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
        top: 23%;
        left: 35%;
        position:absolute;
        letter-spacing: 0.5em;
        background: rgba(0,0,0,0.7);
        height:100px;
        padding-left:35px;
        padding-right:5px;
        padding-bottom: 10px;
      }

      .overlay h1 {
        margin:0px;
        text-transform: uppercase;
        font-weight: 300;
      }
    `}</style>
  </div>
)

export default Parallax
