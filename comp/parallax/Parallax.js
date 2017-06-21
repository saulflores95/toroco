
const Parallax = ({title, img}) => (
  <div>
    <div className='parallax'>
      <div className='overlay'>
        <h1>{title}</h1>
      </div>
    </div>
    <style>{`
      .parallax {
        background-image: url(${img});
        min-height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .overlay {
        font-family:Roboto;
        color: white;
        font-size: 45px;
        top: 30%;
        left: 35%;
        position:absolute;
        letter-spacing: 0.5em;
        background: rgba(0,0,0,0.7);
        height:100px;
        margin:0px;
        padding:10px;
      }

      .overlay h1 {
        margin:0px;
      }
    `}</style>
  </div>
)

export default Parallax
