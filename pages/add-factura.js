import Uploader from '../comp/uploader/Uploader'

const addFactura = ({ user }) => (
  <div className='factura'>
    <Uploader />
    <style>
      {`
        .factura {
          margin-top:200px;
        }
      `}
    </style>
  </div>
)

addFactura.getInitialProps = async ({ req, res }) => {
  if (!req.user) {
    return res.redirect('/')
  }
  return { user: req.user.username }
}

export default addFactura
